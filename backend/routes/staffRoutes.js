const express = require('express');
const { registerStaff } = require('../functions/registerStaff');
const { getStaffs } = require('../functions/getStaffs');
const { updateStaff } = require('../functions/update/updateStaff');

const router = express.Router();

// Route for staff registration
router.post('/registerStaff', registerStaff);

router.get('/getStaffs', getStaffs);

router.put('/updateStaff/:id', updateStaff);

module.exports = router;
