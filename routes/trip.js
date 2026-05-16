if (!process.env.GEOAPIFY_KEY) {
  console.warn("⚠️  GEOAPIFY_KEY is not set — maps will not render");
}

const express = require("express");
const router = express.Router();
const { isLoggedIn, isLoggedInSoft } = require("../middleware");
const Groq = require("groq-sdk");
const axios = require("axios");
const Itinerary = require("../models/itinerary");
const ejs = require("ejs");
const path = require("path");
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });


const render = (res, next, file, data) => {
  ejs.renderFile(path.join(__dirname, '../views', file), data, (err, html) => {
    if (err) return next(err);
    res.send(html);
  });
};


router.get("/plan", isLoggedInSoft, (req, res, next) => {
  render(res, next, 'trip/plan.ejs', { currUser: req.user || null });
});

router.post("/generate", isLoggedIn, async (req, res, next) => {
  try {
    // const { destination, days, people, budget, interests, budgetAmount } = req.body;
    let { destination, days, people, budget, interests, budgetAmount } = req.body;

const spellCheck = await groq.chat.completions.create({
  model: "llama-3.3-70b-versatile",
  messages: [{ role: "user", content: `Fix the spelling of this travel destination and return ONLY the correctly spelled name, nothing else: "${destination}"` }],
  max_tokens: 20
});
destination = spellCheck.choices[0].message.content.trim();
const parsedBudgetAmount = budgetAmount ? parseInt(budgetAmount) : null;
    const interestText = Array.isArray(interests) ? interests.join(", ") : interests;

const prompt = `You are a world-class travel curator and local expert. Return ONLY valid JSON, no extra text, no markdown.

Create a premium ${days}-day travel itinerary for ${destination}, India for ${people} travelers with ${budget} budget and interests in ${interestText}.

You must research ${destination} deeply. Think about:
- Famous historical monuments, forts, temples, shrines
- Local cuisine, popular restaurants, street food spots, cafes
- Shopping areas, local markets, handicraft bazaars
- Nature spots, lakes, parks, gardens, viewpoints
- Day trips to nearby towns and villages
- Cultural experiences, local festivals, art
- Adventure activities if available
- Lesser known hidden gems locals love
- Scenic spots for photography
- Evening entertainment, shows, local events

For ${destination} specifically think about ALL tourist attractions, religious sites, historical places, natural beauty spots, food streets, shopping areas and unique local experiences that make this destination special.

STRICT RULES:
- Every day MUST be completely unique — zero repetition of places across all ${days} days
- Only suggest real places that genuinely exist in or near ${destination}
- Never suggest generic activities like "visit a sabzi mandi" or "go to a park" without a real specific name
- Each place must have its actual real name — not generic descriptions
- Quality over quantity — suggest places worth visiting and experiencing
- Include a healthy mix every few days: history day, food day, nature day, shopping day, cultural day, day trip, relaxation day
- estimatedCost must be realistic for ${budget} budget travelers in India
${parsedBudgetAmount 
  ? `- STRICT: Total budget is ₹${parsedBudgetAmount}. totalEstimatedCost MUST be between ₹${Math.floor(parsedBudgetAmount * 0.85)} and ₹${parsedBudgetAmount}. Each day should cost roughly ₹${Math.round(parsedBudgetAmount / days / 100) * 100}. Plan ${budget} quality hotels, food and experiences that justify this spend.`
  : `- Estimate costs naturally for a ${budget} budget trip.`
}
- Do NOT limit to only the user's interests — create a complete well-rounded trip

Return exactly this JSON with exactly ${days} days, no more no less:
{
  "destination": "${destination}",
  "days": [
    {
      "day": 1,
      "title": "Descriptive unique title for this day",
      "morning": "Specific activity at a real named place",
      "afternoon": "Different specific activity at a different real named place",
      "evening": "Specific evening activity at a real named place",
      "places": ["Exact Real Place Name 1", "Exact Real Place Name 2", "Exact Real Place Name 3"],
      "weather": "Realistic weather for ${destination} in this season",
      "estimatedCost": 1500
    }
  ],
  "totalEstimatedCost": 15000,
  "tips": "Genuinely useful and specific travel tips for ${destination}"
}`;
    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }]
    });
   
    let text = response.choices[0].message.content;
    text = text.replace(/```json|```/g, "").trim();
    const itinerary = JSON.parse(text); 
    if (parsedBudgetAmount && itinerary.totalEstimatedCost < parsedBudgetAmount * 0.75) {
  const scaleFactor = (parsedBudgetAmount * 0.95) / itinerary.totalEstimatedCost;
  itinerary.days = itinerary.days.map(day => ({
    ...day,
    estimatedCost: Math.round(day.estimatedCost * scaleFactor / 100) * 100
  }));
  itinerary.totalEstimatedCost = itinerary.days.reduce((sum, d) => sum + d.estimatedCost, 0);
}        //  only once, here
    const usedImageUrls = new Set();             //  only once, here
    for (let day of itinerary.days) {            //  only one loop
      const searchTerms = [
        day.places?.[0] ? `${day.places[0]} ${destination}` : null,
        day.places?.[1] ? `${day.places[1]} ${destination}` : null,
        day.places?.[2] ? `${day.places[2]} ${destination}` : null,
        day.title ? `${day.title} ${destination}` : null,
        `${destination} travel`,
        `${destination} landscape`,
      ].filter(Boolean);

      let imageUrl = null;

      for (const term of searchTerms) {
        try {
          const response = await axios.get(
            `https://api.pexels.com/v1/search?query=${encodeURIComponent(term)}&per_page=15&page=${Math.floor(Math.random() * 3) + 1}`,
            { headers: { Authorization: process.env.PEXELS_API_KEY } }
          );
          const photos = response.data.photos || [];
          const fresh = photos.find(p => {
            const url = p?.src?.large;
            return url && !usedImageUrls.has(url);
          });
          if (fresh) {
            imageUrl = fresh.src.large;
            usedImageUrls.add(imageUrl);
            break;
          }
        } catch { continue; }
      }

      day.imageUrl = imageUrl;
    }
    req.session.lastItinerary = itinerary;
    console.log("GEOAPIFY KEY:", process.env.GEOAPIFY_KEY);
    render(res, next, 'trip/result.ejs', { itinerary, destination, days, people, budget, interests, currUser: req.user || null ,geoKey: process.env.GEOAPIFY_KEY});
  } catch (err) {
    console.log(err);
    req.flash("error", "Could not generate itinerary. Try again.");
    res.redirect("/trip/plan");
  }
});

router.post("/save", isLoggedIn, async (req, res) => {
  try {
    const { destination, days, people, budget, interests, budgetAmount } = req.body;
const parsedBudgetAmount = budgetAmount ? parseInt(budgetAmount) : null;
    const itineraryData = req.session.lastItinerary;
    if (!itineraryData) {
      req.flash("error", "No itinerary data found. Please generate again.");
      return res.redirect("/trip/plan");
    }
    const coverImage = itineraryData?.days?.[0]?.imageUrl || null;
    await Itinerary.create({ destination, days, people, budget, itineraryData, coverImage, owner: req.user._id });
    req.flash("success", "Itinerary saved successfully!");
    res.redirect("/trip/saved");
  } catch (err) {
    console.log(err);
    req.flash("error", "Could not save itinerary.");
    res.redirect("/trip/plan");
  }
});

router.get("/saved", isLoggedInSoft, async (req, res, next) => {
  try {
    const list = await Itinerary.find({ owner: req.user._id }).sort({ createdAt: -1 });
    render(res, next, 'trip/saved.ejs', {
      list,
      currUser: req.user || null,
      success: req.flash("success"),
      error: req.flash("error")
    });
  } catch (err) {
    req.flash("error", "Could not load saved trips.");
    res.redirect("/trip/plan");
  }
});

router.get("/saved/:id", isLoggedIn, async (req, res, next) => {
  try {
    const trip = await Itinerary.findById(req.params.id);
    if (!trip) {
      req.flash("error", "Trip not found.");
      return res.redirect("/trip/saved");
    }
    
    render(res, next, 'trip/result.ejs', {
      itinerary: trip.itineraryData,
      destination: trip.destination,
      days: trip.days,
      people: trip.people,
      budget: trip.budget,
      currUser: req.user || null,
     geoKey: process.env.GEOAPIFY_KEY
    });
  } catch (err) {
    req.flash("error", "Could not load trip.");
    res.redirect("/trip/saved");
  }
});

router.delete("/saved/:id", isLoggedIn, async (req, res) => {
  try {
    await Itinerary.findByIdAndDelete(req.params.id);
    req.flash("success", "Trip deleted!");
    res.redirect("/trip/saved");
  } catch (err) {
    req.flash("error", "Could not delete trip.");
    res.redirect("/trip/saved");
  }
});

router.get("/budget", isLoggedInSoft, async (req, res, next) => {
  let { destination, days, people, budget } = req.query;
  if (destination) {
    const spellCheck = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: `Fix the spelling of this travel destination and return ONLY the correctly spelled name, nothing else: "${destination}"` }],
      max_tokens: 20
    });
    destination = spellCheck.choices[0].message.content.trim();
  }
  render(res, next, 'trip/budget.ejs', { destination, days, people, budget, currUser: req.user || null });
});


module.exports = router;