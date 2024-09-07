// backend/routes/guestRoutes.js
const express = require('express');
const { registerGuest } = require('../functions/registerGuest');

const router = express.Router();

// Route for guest registration
router.post('/registerGuest', registerGuest);

module.exports = router;
