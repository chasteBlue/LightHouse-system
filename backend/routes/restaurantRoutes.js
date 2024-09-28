const express = require('express');
const { getTable } = require ('../functions/restaurantDesk/getTable');
const { updateTable } = require ('../functions/restaurantDesk/updateTable');
const { getCheckedInGuests } = require ('../functions/restaurantDesk/getCheckedInGuests')

const router = express.Router();

// Route for retrieving all tables
router.get('/getCheckedInGuests', getCheckedInGuests );

// Route for retrieving all checked in guest
router.get('/getTables', getTable);

// Route for updating table details
router.put('/updateTable/:table_id', updateTable);

module.exports = router;
