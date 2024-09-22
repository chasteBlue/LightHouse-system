const express = require('express');
const { registerDrink } = require('../functions/registerDrink');
const { getDrinks } = require ('../functions/getDrinks');
const { updateDrink } = require ('../functions/update/updateDrink');
const router = express.Router();

// Route for food item registration
router.post('/registerDrink', registerDrink);

// Route for retrieving all drinks
router.get('/getDrinks', getDrinks);

// PUT request to update a food item
router.put('/updateDrink/:drink_id', updateDrink);

module.exports = router;
