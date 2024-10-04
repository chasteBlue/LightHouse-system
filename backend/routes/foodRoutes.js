const express = require('express');
const { registerFoodItem } = require('../functions/registerFoodItem');
const { registerFoodOrder } = require('../functions/restaurantDesk/registerFoodOrders');
const { getFoodItems } = require('../functions/getFoodItems'); // Import the function to get food items
const { getFoodOrders } = require('../functions/restaurantDesk/getFoodOrders'); // Import the function to get food orders
const { getFoodOrdersAll } = require('../functions/restaurantDesk/getFoodOrdersAll'); // Import the function to get food orders
const { getFoodOrderById } = require ('../functions/restaurantDesk/getFoodOrderById')
const { updateOrderStatus } = require ('../functions/restaurantDesk/updateOrderStatus')
const { getFoodOrderList } = require('../functions/getFoodOrderList'); // Import the function to get food order list
const { updateFoodItem } = require('../functions/update/updateFoodItem'); // Import the function to get food order list
const { updateOrderArchive } = require ('../functions/restaurantDesk/updateOrderArchive');
const {getFoodPhotos } = require('../functions/getFoodPhotos');
//count for dashboard
const { getCountFoodOrderList } = require ('../functions/restaurantDesk/getCountFoodOrderList');
const router = express.Router();

// Route for food item registration
router.post('/registerFoodItem', registerFoodItem);

// Route for food order registration
router.post('/registerFoodOrders', registerFoodOrder);

// Route for retrieving all food items
router.get('/getFoodItems', getFoodItems);

// Route for retrieving all food orders
router.get('/getFoodOrders', getFoodOrders);

// PUT request to update a food order status
router.put('/updateOrderStatus/:food_order_id', updateOrderStatus);

// Route for retrieving all food orders
router.get('/getFoodOrderById/:food_order_id', getFoodOrderById);


// Route for retrieving all food orders
router.get('/getFoodOrdersAll', getFoodOrdersAll);

// Route for retrieving all food order list
router.get('/getFoodOrderList', getFoodOrderList);

// PUT request to update a food item
router.put('/updateFoodItem/:food_id', updateFoodItem);

// PUT request to update a food order status
router.put('/updateOrderArchive/:food_order_id', updateOrderArchive);

router.get('/getFoodPhotos',getFoodPhotos);
//count
// Route for retrieving all food items orders by list and count
router.get('/getCountFoodOrderList', getCountFoodOrderList);

module.exports = router;
