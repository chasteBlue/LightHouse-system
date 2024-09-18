const express = require('express');
const { registerBarDrink } = require('../functions/registerBarDrink');
const { registerBarOrder } = require('../functions/registerBarOrder');
const { getBarDrinks } = require('../functions/getBarDrinks');
const { getBarOrders } = require('../functions/getBarOrders');
const { getBarOrderList } = require('../functions/getBarOrderList');

const router = express.Router();

// Route for bar drink registration
router.post('/registerBarDrink', registerBarDrink);

// Route for bar order registration
router.post('/registerBarOrder', registerBarOrder);

// Route for retrieving all bar drinks
router.get('/getBarDrinks', getBarDrinks);

// Route for retrieving all bar orders
router.get('/getBarOrders', getBarOrders);

// Route for retrieving all bar order list
router.get('/getBarOrderList', getBarOrderList);

module.exports = router;
