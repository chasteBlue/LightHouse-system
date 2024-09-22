// laundryRoutes.js
const express = require('express');
const { registerLaundry } = require('../functions/registerLaundry');
const { getLaundry } = require('../functions/getLaundry');
const { updateLaundry } = require('../functions/update/updateLaundry')
const router = express.Router();

// Route for laundry item registration
router.post('/registerLaundry', registerLaundry);

// Route for retrieving all laundry items
router.get('/getLaundry', getLaundry);

// Route for updating laundry details
router.put('/updateLaundry/:laundry_id', updateLaundry);

module.exports = router;
