
const ejs = require('ejs');
const path = require('path');
const Itinerary = require("../models/itinerary");
const aiService = require("../utils/aiService");

module.exports.showForm = (req, res, next) => {
  ejs.renderFile(path.join(__dirname, '../views/trip/new.ejs'), {
    currUser: req.user || null
  }, (err, html) => {
    if (err) return next(err);
    res.send(html);
  });
};

module.exports.generate = async (req, res, next) => {
  try {
    const result = await aiService.generateItinerary(req.body);
    req.session.trip = { ...req.body, generatedData: result };
    ejs.renderFile(path.join(__dirname, '../views/trip/itinerary.ejs'), {
      itinerary: result, 
      ...req.body, 
      currUser: req.user || null
    }, (err, html) => {
      if (err) return next(err);
      res.send(html);
    });
  } catch (err) {
    req.flash("error", "Could not generate itinerary. Try again.");
    res.redirect("/trip/new");
  }
};

module.exports.save = async (req, res) => {
  const trip = req.session.trip;
  await Itinerary.create({ ...trip, owner: req.user._id });
  req.flash("success", "Itinerary saved!");
  res.redirect("/trip/saved");
};

module.exports.saved = async (req, res, next) => {
  const list = await Itinerary.find({ owner: req.user._id });
  ejs.renderFile(path.join(__dirname, '../views/trip/saved.ejs'), {
    list,
    currUser: req.user || null,
    success: req.flash("success"),
    error: req.flash("error")
  }, (err, html) => {
    if (err) return next(err);
    res.send(html);
  });
};