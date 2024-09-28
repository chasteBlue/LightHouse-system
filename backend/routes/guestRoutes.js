// backend/routes/guestRoutes.js
const express = require('express');
const { registerGuest } = require('../functions/registerGuest');
const { getGuests } = require('../functions/getGuests');
const { loginGuest } = require('../functions/loginGuest');
const { getGuestDetails } = require('../functions/guest/getGuestDetails');
const { updateGuest } = require('../functions/guest/updateGuest');

const router = express.Router();

// Route for guest registration
router.post('/registerGuest', registerGuest);

router.get('/getGuests', getGuests);

router.post('/loginGuest', loginGuest);

router.get('/getGuestDetails', getGuestDetails);

router.put('/updateGuest', updateGuest);

module.exports = router;
