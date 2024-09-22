const express = require('express');
const { registerFoodItem } = require('../functions/registerFoodItem');
const { registerFoodOrder } = require('../functions/registerFoodOrder');
const { getFoodItems } = require('../functions/getFoodItems'); // Import the function to get food items
const { getFoodOrders } = require('../functions/getFoodOrders'); // Import the function to get food orders
const { getFoodOrderList } = require('../functions/getFoodOrderList'); // Import the function to get food order list
const { updateFoodItem } = require('../functions/update/updateFoodItem'); // Import the function to get food order list
const { updateFoodPackage } = require ('../functions/update/updateFoodPackage')
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

// PUT request to update a food item
router.put('/updateFoodItem/:food_id', updateFoodItem);

// PUT request to update a food package
router.put('/updateFoodIPackage/:event_fd_pckg_id', updateFoodPackage);

module.exports = router;
