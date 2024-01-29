// IMPORT STATEMENT 
const express = require('express');
const router = express.Router();
const {registerUser} = require('../Controllers/regsiter_user');
const {isUserExist} = require('../Controllers/login');
const {userProfile} = require("../Controllers/profile");
const {URF} = require('../Controllers/refferel_code');
 
//  Routers
router.get("/", (req, res)=>{
    res.send("hellow world")
})
router.post("/user-register", registerUser)
router.post("/login", isUserExist)
router.post("/urc", URF)
router.get("/profile/:id", userProfile)

module.exports = router
