const axios = require("axios");

module.exports.generateItinerary = async (tripData) => {


const { destination, days, people, budget, budgetAmount, interests } = tripData;
const budgetStr = budgetAmount 
  ? `${budget} (total budget: ₹${Number(budgetAmount).toLocaleString('en-IN')})` 
  : budget;
const prompt = `
You are a travel planner. Generate a realistic ${days}-day itinerary for ${people} traveling to ${destination}.
Budget level: ${budgetStr}.
Interests: ${interests || 'general sightseeing'}.
${budgetAmount ? `The total trip budget is ₹${budgetAmount}. Make sure totalEstimatedCost stays within this amount and distribute costs across days accordingly.` : ''}

Return ONLY valid JSON in this exact format:
{
  "destination": "${destination}",
  "days": [
    {
      "day": 1,
      "title": "Sample",
      "morning": "text",
      "afternoon": "text",
      "evening": "text",
      "places": ["place1"],
      "weather": "Sunny",
      "estimatedCost": 100
    }
  ],
  "totalEstimatedCost": 300,
  "tips": "text"
}
`;


  try {
    const res = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    let text = res.data.choices[0].message.content;

    console.log("RAW AI:", text); //  DEBUG

    text = text.replace(/```json|```/g, "").trim();

    return JSON.parse(text);

  } catch (err) {
    console.log("AI ERROR:", err.response?.data || err.message);

    //  FALLBACK (VERY IMPORTANT)
    return {
      destination,
      days: [
        {
          day: 1,
          title: "Sample Day",
          morning: "Explore city",
          afternoon: "Visit attractions",
          evening: "Dinner",
          places: ["Main Area"],
          weather: "Sunny",
          estimatedCost: 100
        }
      ],
      totalEstimatedCost: 100,
      tips: "Demo plan (AI failed)"
    };
  }
};