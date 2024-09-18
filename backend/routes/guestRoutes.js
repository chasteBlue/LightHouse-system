// backend/routes/guestRoutes.js
const express = require('express');
const { registerGuest } = require('../functions/registerGuest');
const { getGuests } = require('../functions/getGuests');

const router = express.Router();

// Route for guest registration
router.post('/registerGuest', registerGuest);

// Route for retrieving all guests (GET)
router.get('/getGuests', getGuests);

module.exports = router;
