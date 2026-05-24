const Listing = require("../models/listings.js");
const axios = require("axios");
const ejs = require('ejs');
const path = require('path');

// requiring things for map api 
const geocode = async (location, country) => {
  const query = `${location}, ${country}`;
  const { data } = await axios.get(
    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`,
    { headers: { "User-Agent": "TripAIO/1.0 (your@email.com)" } }
  );
  return data.length > 0
    ? { type: "Point", coordinates: [parseFloat(data[0].lon), parseFloat(data[0].lat)] }
    : null; // returns null if address not found
};

// INDEX
module.exports.index = async (req, res) => {
  let { q, page = 1 } = req.query;
  const perPage = 12;
  let filter = {};


  if (q) {
    filter = {
      $or: [
        { title: { $regex: q, $options: "i" } },
        { country: { $regex: q, $options: "i" } }
      ]
    };
  }

  const totalListings = await Listing.countDocuments(filter);
  const totalPages = Math.ceil(totalListings / perPage);
  const allListings = await Listing.find(filter)
    .skip((page - 1) * perPage)
    .limit(perPage);

  let rate = 0.012;
  try {
    const response = await axios.get("https://api.exchangerate-api.com/v4/latest/INR");
    rate = response.data.rates.USD;
  } catch (e) {
    console.log("Exchange rate API failed, using fallback rate");
  }

res.render("listings/index.ejs", { 
  listings: allListings, 
  rate,
  selectedCategory: null,
  q: q || "",
  currentPage: parseInt(page),
  totalPages,
  activePage: 'listings',
  currUser: req.user || null,
  sort:""
});
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs", { currUser: req.user || null });
};



module.exports.showListing = async (req, res, next) => {
  const { id } = req.params;
  const listing = await Listing.findById(id)
    .populate("owner")
    .populate({
      path: "reviews",
      populate: { path: "author" }
    });

  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }

  res.render("listings/show.ejs", { listing });
};

// CREATE
module.exports.createListing = async (req, res, next) => {

  // geocoading basic sample  code so that it gives forwardgeocodefor res.body.listing.location
// and store the geometry inside the listing 

  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.listing);

  //  ADD THIS (file handling)

  newListing.image = { url, filename };
  newListing.owner = req.user._id;
   
  //  FIX: add fallback if geocode fails
  const geoData = await geocode(
    req.body.listing.location,
    req.body.listing.country
  );

  newListing.geometry =
    geoData || {
      type: "Point",
      coordinates: [78.9629, 20.5937], // fallback (India)
    };


  // newListing.geometry = await geocode(req.body.listing.location, req.body.listing.country);
  await newListing.save();
  req.flash("success", "new listing created!");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist! ");
    return res.redirect("/listings");
  }
  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace(
  "/upload",
  "/upload/w_250,c_fit,q_auto,f_auto"
);
  res.render("listings/edit.ejs", { listing ,  originalImageUrl, currUser: req.user || null });
};


module.exports.updateListing = async (req, res) => {
  let { id } = req.params;

  let listing = await Listing.findById(id);

  if (!listing.owner._id.equals(res.locals.currUser._id)) {
    req.flash("error", "You don't have permission to edit ");
    return res.redirect(`/listings/${id}`);
  }

  Object.assign(listing, req.body.listing);

  if (req.file) {
    listing.image = {
      url: req.file.path,
      filename: req.file.filename,
    };
  }

  const geoData = await geocode(listing.location, listing.country);

  listing.geometry = geoData || {
    type: "Point",
    coordinates: [78.9629, 20.5937],
  };

  await listing.save();

  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};


module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "Listing Deleted");
  res.redirect("/listings");
};
