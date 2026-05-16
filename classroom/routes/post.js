const express = require("express");
const router = express.Router();


// these routes are for post


// Index
router.get("/", (req,res) =>{
    res.send("Get for posts");

});


// Show
router.get("/:id", (req,res) =>{
    res.send("Get for show posts id ");
    
});

// post
router.post("/", (req,res) =>{
    res.send("POST for posts");
    
});

// delete
router.delete("/:id", (req,res) =>{
    res.send("DELETE for posts id");
    
});

module.exports= router;
