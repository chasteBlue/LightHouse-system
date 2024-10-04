const express = require('express');
const { getDrinkOrders} = require ('../functions/barDesk/getDrinkOrders');
const { registerDrinkOrder } = require ('../functions/barDesk/registerDrinkOrders');
const { updateBarOrderStatus} = require ('../functions/barDesk/updateOrderStatus');
const { getDrinkOrderById } = require ('../functions/barDesk/getDrinkOrderById');
const { getDrinkOrdersAll } = require ('../functions/barDesk/getDrinkOrdersAll');
const {getCountDrinkOrderList } = require('../functions/barDesk/getCountDrinkOrderList');
router = express.Router();

// Route for retrieving all tables
router.get('/getDrinkOrders', getDrinkOrders );

router.post('/registerDrinkOrders', registerDrinkOrder);

router.put('/updateBarOrderStatus/:bar_order_id', updateBarOrderStatus);

router.get('/getDrinkOrderById/:bar_order_id', getDrinkOrderById);

router.get('/getDrinkOrdersAll', getDrinkOrdersAll);

router.get('/getCountDrinkOrderList', getCountDrinkOrderList);
module.exports = router;
