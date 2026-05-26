
  require('dotenv').config();
  
const express = require("express");
const app = express();
app.set('trust proxy', 1);
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/user.js");
const Listing = require("./models/listings.js");
const listingRouter = require("./routes/listing.js");
const tripRouter = require("./routes/trip");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/tripaio";

const dbUrl = process.env.ATLASDB_URL;


// ── VIEW ENGINE ──────────────────────────────
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine('ejs', ejsMate);

// ── BODY + STATIC ────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

// ── SESSION ──────────────────────────────────

const store = MongoStore.create({
  mongoUrl: dbUrl,
  // crypto:{
  //   secret: process.env.SECRET 
  // },
  touchAfter:24*3600,
});

store.on("error",(err) =>{
  console.log("ERROR in MONGO SESSION STORE",err);
});

const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
// CHANGE your cookie config inside sessionOptions
  // cookie: {
  //   maxAge: 7 * 24 * 60 * 60 * 1000,
  //   httpOnly: true,
  //  secure: process.env.NODE_ENV === 'production', // enables secure cookies on HTTPS
  // sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax', // allows cross-request cookies
  // },
  cookie: {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: true,
    sameSite: 'none',
},
};

app.use(session(sessionOptions));
app.use(flash());

// ── PASSPORT ─────────────────────────────────

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  console.log("REQ USER:", req.user);
  console.log("SESSION:", req.session);
  next();
});

// ── LOCALS ───────────────────────────────────

app.use((req, res, next) => {
  res.locals.success = req.flash("success") || [];
  res.locals.error = req.flash("error") || [];
  res.locals.currUser = req.user || null;
  next();
});

app.get('/favicon.ico', (req, res) => res.status(204).end());

// ── ROOT ROUTE ───────────────────────────────

// NEW - REPLACE WITH THIS
// app.get("/", async (req, res, next) => {
//   try {
//     const featured = await Listing.aggregate([{ $sample: { size: 3 } }]);
//     const highlight = req.flash("highlight")[0];
//     res.render("home.ejs", { featured, highlight });
//   } catch(err) {
//     next(err);
//   }
// });
app.get("/", async (req, res, next) => {
  try {
    console.log("HOME ROUTE - req.user:", req.user);
    console.log("HOME ROUTE - session:", req.session);
    const featured = await Listing.aggregate([{ $sample: { size: 3 } }]);
    res.render("home.ejs", { featured });
  } catch(err) {
    next(err);
  }
});
// ── ROUTERS ──────────────────────────────────
app.use("/listings", listingRouter);
app.use("/trip", tripRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

// ── 404 ──────────────────────────────────────
app.use((req, res, next) => {
  next(new ExpressError(404, "Page not found!"));
});

// ── ERROR HANDLER ────────────────────────────
app.use((err, req, res, next) => {
    if (res.headersSent) return next(err);
  let { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).render("error.ejs", { message });
});

// ── START SERVER ─────────────────────────────
async function startServer() {
  try {
    await mongoose.connect(dbUrl);
    console.log("DB CONNECTED");
    app.listen(8080, () => {
      console.log("Server listening on port 8080");
    });
  } catch(err) {
    console.log("DB ERROR:", err);
  }
}
startServer();