const express = require('express');
const { registerFoodItem } = require('../functions/registerFoodItem');
const { registerFoodOrder } = require('../functions/registerFoodOrder');
const { getFoodItems } = require('../functions/getFoodItems'); // Import the function to get food items
const { getFoodOrders } = require('../functions/getFoodOrders'); // Import the function to get food orders
const { getFoodOrderList } = require('../functions/getFoodOrderList'); // Import the function to get food order list

const router = express.Router();

// Route for food item registration
router.post('/registerFoodItem', registerFoodItem);

// Route for food order registration
router.post('/registerFoodOrder', registerFoodOrder);

// Route for retrieving all food items
router.get('/getFoodItems', getFoodItems);

// Route for retrieving all food orders
router.get('/getFoodOrders', getFoodOrders);

// Route for retrieving all food order list
router.get('/getFoodOrderList', getFoodOrderList);

module.exports = router;
