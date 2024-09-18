const express = require('express');
const { registerStaff } = require('../functions/registerStaff');

const router = express.Router();

// Route for staff registration
router.post('/registerStaff', registerStaff);

module.exports = router;
