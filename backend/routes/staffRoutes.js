const express = require('express');
const { registerStaff } = require('../functions/registerStaff');
const { getStaffs } = require('../functions/getStaffs');
const { updateStaff } = require('../functions/update/updateStaff');
const { loginStaff } = require('../functions/loginStaff');

const router = express.Router();

// Route for staff registration
router.post('/registerStaff', registerStaff);

// Route to get list of all staff
router.get('/getStaffs', getStaffs);

// Route to update staff details by ID
router.put('/updateStaff/:staff_id', updateStaff);

// Route for staff login
router.post('/loginStaff', loginStaff);

module.exports = router;
