// this takes data from  the databse and arrange it to listings
const mongoose =require("mongoose");
const review = require("./review");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
    title: {
        type:String,
        required: true,
    },

    description: String,
    image:{
        url:String,
        filename: String,
        },
    price: Number,
    location: String,
    country: String, 
     category: {
  type: String,
  enum: [
    "trending",
    "mountains",
    "arctic",
    "castle",
    "amazing pools",
    "camping",
    "farm",
    "rooms",
    "cities",
    "beachfront"
  ]
},
    // created a array because their will be multiple reviews
    reviews: [
        {
            type:Schema.Types.ObjectId,
            ref:"Review",
        },
    ],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
   // coordinates must be inside geometry
geometry:{
  type:{ type:String, enum:['Point'], required: true },
  coordinates:{ type:[Number], required: true }, // ← nested inside geometry
},

});

listingSchema.post("findOneAndDelete", async (listing)=>{
    if (listing ){
 await Review.deleteMany({_id: {$in : listing.reviews}});
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;