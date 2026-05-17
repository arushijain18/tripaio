// requiring everthing you need that is mongodb , data,listings

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listings.js");
const axios = require("axios"); 

// THIS IS THE BASIC SETUP FOR MONGODB
// const MONGO_URL = "mongodb://127.0.0.1:27017/tripaio";
// require("dotenv").config({ path: "../.env" });
require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });

const MONGO_URL = process.env.ATLASDB_URL;

main().then(() =>{
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
});


async function main() {
    await mongoose.connect(MONGO_URL);
}

// ADD THIS HELPER FUNCTION
const geocode = async (location, country) => {
  const query = `${location}, ${country}`;
  const { data } = await axios.get(
    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`,
    { headers: { "User-Agent": "TripAIO/1.0 (your@email.com)" } }
  );
  return data.length > 0
    ? { type: "Point", coordinates: [parseFloat(data[0].lon), parseFloat(data[0].lat)] }
    : { type: "Point", coordinates: [78.9629, 20.5937] }; // fallback: India center
};

 
const initDB = async () => {
  await Listing.deleteMany({});

  // REPLACE insertMany with a loop so we can geocode each listing
  for (let obj of initData.data) {
    obj.owner = "69bbd51cb9a9452d9f3c2749"; // keep your existing owner id
    obj.geometry = await geocode(obj.location, obj.country); 
    await Listing.create(obj);
    console.log(`${obj.title} → ${obj.location}`);
    await new Promise((r) => setTimeout(r, 1100)); // wait 1.1 sec between requests
  }

  console.log("🎉 data was initialized with coordinates!");
  mongoose.connection.close(); 
};


initDB();