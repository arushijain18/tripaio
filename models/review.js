const mongoose = require ("mongoose");
const Schema = mongoose.Schema;


// this os an example of review schema containing all the required things
const reviewSchema = new Schema({
    comment : String,
    rating: {
        type:Number,
        min:1,
        max:5
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    author:{
        type: Schema.Types.ObjectId,
        ref:"User",
    }
});


// creating a review model 
module.exports = mongoose.model("Review", reviewSchema);

  