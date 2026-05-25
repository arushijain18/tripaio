const express= require("express");
const router= express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listings.js");
const axios = require("axios");
const { isLoggedIn, isOwner, validateListing, isLoggedInSoft } = require("../middleware.js");
const {listingSchema} = require("../schema.js");
const listingController = require("../controllers/listings.js");
// this is used to parse the data of the form 
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

//Index route
router.route("/")
.get(wrapAsync(async (req, res) => {
  const q = req.query.q;

const page = parseInt(req.query.page) || 1;
const limit = 24;
const skip = (page - 1) * limit;

let filter = {};

if (q) {
  filter = {
    $or: [
      { country: { $regex: new RegExp("^" + q + "$", "i") } },
      { title: { $regex: new RegExp(q, "i") } }
    ]
  };
}

const total = await Listing.countDocuments(filter);

// const listings = await Listing.find(filter)

const sort = req.query.sort;
let sortOption = {};
if (sort === "low") sortOption = { price: 1 };
else if (sort === "high") sortOption = { price: -1 };

const listings = await Listing.find(filter)
  .sort(sortOption)
  .skip(skip)
  .limit(limit);

if (q && listings.length === 0) {
 req.flash("error", "This staycation or country is unavailable");
return res.redirect("/listings");
}
 res.render("listings/index.ejs", {
  listings,
  currentPage: page,
  totalPages: Math.ceil(total / limit),
  q,
  selectedCategory: "All",
  rate: 0.012,
   sort: sort || ""
});
}))
.post(
  isLoggedIn,
  upload.single("listing[image]"),
  validateListing,
  wrapAsync(listingController.createListing)
);



// overehere 1st the new route will be listed which gives the form and then the show route that will find by id and then show
// NEW ROUTE
router.get("/new", isLoggedIn,listingController.renderNewForm);


// EDIT ROUTE
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingController.renderEditForm));

// UPDATE ROUTE

router.put(
  "/:id",
  upload.single("listing[image]"),  //  add this
  isLoggedIn,
  isOwner,
  validateListing,
  wrapAsync(listingController.updateListing)
);




//  Filter by category
router.get("/category/:category", async (req, res) => {
  const { category } = req.params;

  const listings = await Listing.find({
    category: { $regex: new RegExp(`^${category}$`, "i") }
  });

  let rate = 0.012;

  try {
    const response = await axios.get("https://api.exchangerate-api.com/v4/latest/INR");
    rate = response.data.rates.USD;
  } catch {}

  // res.render("listings/index.ejs", { listings, selectedCategory: category, rate, currentPage: 1,
  //   totalPages: 1,
  //   q: "" });
  res.render("listings/index.ejs", { listings, selectedCategory: category, rate, currentPage: 1,
    totalPages: 1,
    q: "", sort: "" });
});


// SMART SEARCH SUGGESTIONS ROUTE

// PRIORITY:
// 1. Country suggestions first
// 2. If no country → listing suggestions
// 3. Fully dynamic with MongoDB

router.get("/search/suggestions", async (req, res) => {
  const q = req.query.q || "";

  if (!q) return res.json([]);

  //  STEP 1: FIND COUNTRIES FIRST (HIGH PRIORITY)
  const countries = await Listing.find({
    country: { $regex: "^" + q, $options: "i" }
  }).distinct("country");

  // If countries exist → return only countries
  if (countries.length > 0) {
    return res.json(
      countries.map(c => ({
        type: "country",
        country: c
      }))
    );
  }

  //  STEP 2: IF NO COUNTRY MATCH → SEARCH LISTINGS
 const listings = await Listing.find({
  title: { $regex: new RegExp("^" + q, "i") } //  FIX HERE
}).limit(8);

  return res.json(
    listings.map(l => ({
      type: "listing",
      title: l.title,
      id: l._id
    }))
  );
});


// SHOW ALL LISTINGS OF A SELECTED COUNTRY

// This enables:
//clicking a country in search
//  showing all staycations in that country

router.get("/country/:name", async (req, res) => {
  const { name } = req.params;

  const listings = await Listing.find({
  country: { $regex: new RegExp("^" + name + "$", "i") }
  });

  //  If country not found in DB
  if (listings.length === 0) {
    // You can also use flash message (optional improvement)
    // return res.status(404).render("error.ejs", {
    //   message: "This country staycations are unavailable"
    // });
    req.flash("error", "This country staycations are unavailable");
return res.status(404).redirect("/listings");
  }

  
  res.render("listings/index.ejs", {
    listings,
    selectedCategory: name,
    rate: 0.012,
    currentPage: 1,
  totalPages: 1,
  q: "",
  sort: ""
  });
});



// DELETE ROUTE
router.delete("/:id",isLoggedIn,isOwner,  wrapAsync(listingController.destroyListing));


// SHOW ROUTE
router.get("/:id" ,
     wrapAsync(listingController.showListing));



module.exports = router;