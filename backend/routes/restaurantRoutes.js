const express = require('express');
const { getTable } = require ('../functions/restaurantDesk/getTable');
const { updateTable } = require ('../functions/restaurantDesk/updateTable');
const { getCheckedInGuests } = require ('../functions/restaurantDesk/getCheckedInGuests');
const { checkTablesAvailability } = require ('../functions/restaurantDesk/checkTablesAvailability');
const { registerTableReservation } = require('../functions/guest/registerTableReservation');
const { getTableReservations } = require('../functions/restaurantDesk/getTableReservations');
const { updateTableReservationStatus } = require('../functions/restaurantDesk/updateTableReservationStatus');
const { getTableReservations2 } = require ('../functions/restaurantDesk/getTableRev2');
const { getPendingTableReservations } = require ('../functions/restaurantDesk/getPendingTableReservations')
const { getAllTableReservations } = require('../functions/restaurantDesk/getTableRev3')
const router = express.Router();

// Route for retrieving all tables
router.get('/getCheckedInGuests', getCheckedInGuests );

// Route for retrieving all checked in guest
router.get('/getTables', getTable);

// Route for updating table details
router.put('/updateTable/:table_id', updateTable);

router.get('/checkTablesAvailability', checkTablesAvailability);

// POST route to register a new table reservation
router.post('/registerTableReservation', registerTableReservation);

// Route for retrieving all table reservations
router.get('/getTableReservations', getTableReservations);

// Route for retrieving all table reservations 2nd version
router.get('/getTableReservations2', getTableReservations2);

// Route for retrieving all table reservations 2nd version
router.get('/getTableReservations3', getAllTableReservations);

router.get('/getPendingTableReservations', getPendingTableReservations);
// Route for updating table reservation status
router.put('/updateTableReservationStatus/:table_reservation_id', updateTableReservationStatus);

module.exports = router;
