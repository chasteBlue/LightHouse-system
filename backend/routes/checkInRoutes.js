const express = require('express');
const { registerCheckIn } = require('../functions/registerCheckIn');

const router = express.Router();

// Route for check-in registration
router.post('/registerCheckIn', registerCheckIn);

module.exports = router;
