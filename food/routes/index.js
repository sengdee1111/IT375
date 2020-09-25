const express = require('express');
const router = express.Router();

// import data
const restaurantsObj = require('../data');

// Render Web
router.get('/',(req,res)=>{
    res.render('main',{restaurants: restaurantsObj});
});
module.exports = router;