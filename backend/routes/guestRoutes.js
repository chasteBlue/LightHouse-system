// backend/routes/guestRoutes.js
const express = require('express');
const { registerGuest } = require('../functions/registerGuest');
const { getGuests } = require('../functions/getGuests');
const { loginGuest } = require('../functions/loginGuest');
const { getGuestDetails } = require('../functions/guest/getGuestDetails');
const { updateGuest } = require('../functions/guest/updateGuest');
const { getReservationsByReservationId } = require('../functions/guest/getReservationsByReservationId');
const { getReservationsByGuestId } = require('../functions/guest/getReservationByGuestId')
const { cancelReservation } = require('../functions/guest/cancelReservation');
const { getTableRevByGuestID } = require('../functions/guest/getTableRevByGuestID');
const { cancelTableReservation } = require('../functions/guest/cancelTableReservation');
const router = express.Router();

router.post('/registerGuest', registerGuest);

router.get('/getGuests', getGuests);

router.post('/loginGuest', loginGuest);

router.get('/getGuestDetails', getGuestDetails);

router.put('/updateGuest', updateGuest);

router.get('/getReservationsByGuestId', getReservationsByGuestId);

router.get('/getReservationsByReservationId',getReservationsByReservationId);

router.post('/cancelReservation', cancelReservation);

router.get('/getTableRevByGuestID', getTableRevByGuestID);

router.post('/cancelTableReservation', cancelTableReservation);

module.exports = router;
