// routes/eventsRoutes.js

const express = require('express');
const { registerVenue } = require('../functions/registerVenue');
const { getVenue } = require('../functions/getVenue');
const { registerFoodPackage } = require('../functions/registerFoodPackage');
const { getFoodPackage } = require('../functions/getFoodPackage');
const { updateFoodPackage } = require ('../functions/update/updateFoodPackage')
const { updateVenue } = require ('../functions/update/updateVenue')
const router = express.Router();

// Route for venue registration
router.post('/registerVenue', registerVenue);

// Route for retrieving all venues
router.get('/getVenue', getVenue);

// Route for registering a new food package
router.post('/registerFoodPackage', registerFoodPackage);

// Route for retrieving all food packages
router.get('/getFoodPackage', getFoodPackage);

// PUT request to update a food package
router.put('/updateFoodPackage/:event_fd_pckg_id', updateFoodPackage);

// PUT request to update a venue package
router.put('/updateVenue/:event_venue_id', updateVenue);

module.exports = router;
