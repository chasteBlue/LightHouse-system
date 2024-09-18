const express = require('express');
const { registerRoomReservation } = require('../functions/registerRoomReservation'); // Ensure the path is correct

const router = express.Router();

// Route for room reservation registration
router.post('/registerRoomReservation', registerRoomReservation); // Ensure the function is properly imported

module.exports = router;
