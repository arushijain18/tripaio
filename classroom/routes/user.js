const express = require("express");
const router= express.Router();

// in this the common part will be in the server.js file and rest of the details will lie in this user file


// Index-users
router.get("/", (req,res) =>{
    res.send("Get for users");

});


// Show-users
router.get("/:id", (req,res) =>{
    res.send("Get for show users id ");
    
});

// post-users
router.post("/", (req,res) =>{
    res.send("POST for users");
    
});
// routes for users
// delete-users
router.delete("/:id", (req,res) =>{
    res.send("DELETE for users id");
    
});

module.exports = router;