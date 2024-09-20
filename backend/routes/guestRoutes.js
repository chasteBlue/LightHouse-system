// backend/routes/guestRoutes.js
const express = require('express');
const { registerGuest } = require('../functions/registerGuest');
const { getGuests } = require('../functions/getGuests');
const { loginGuest } = require('../functions/loginGuest');
const router = express.Router();

// Route for guest registration
router.post('/registerGuest', registerGuest);

// Route for retrieving all guests (GET)
router.get('/getGuests', getGuests);

router.post('/loginGuest', loginGuest);

module.exports = router;
