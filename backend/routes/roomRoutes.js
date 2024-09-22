const express = require('express');
const { registerRoom } = require('../functions/registerRoom');
const { getRooms } = require('../functions/getRooms');
const { getRoomList } = require('../functions/getRoomList');
const { getRoomReservations } = require('../functions/getRoomReservations');
const { updateRoom } = require('../functions/update/updateRoom');
const { registerRoomPhotos } = require ('../functions/registerRoomPhotos')
const router = express.Router();

// Route for room registration
router.post('/registerRoom', registerRoom);

// Route for retrieving all rooms
router.get('/getRooms', getRooms);

// Route for retrieving all room lists
router.get('/getRoomList', getRoomList);

// Route for retrieving all room reservations
router.get('/getRoomReservations', getRoomReservations);

// Route for updating room details
router.put('/updateRoom/:id', updateRoom);

router.post('/registerRoomPhotos', registerRoomPhotos);

module.exports = router;
