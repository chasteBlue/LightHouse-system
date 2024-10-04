const { supabase } = require('../../supabaseClient');

// Utility function to check date overlap
const datesOverlap = (checkIn, checkOut, reservedCheckIn, reservedCheckOut) => {
    return (new Date(checkIn) <= new Date(reservedCheckOut) && new Date(checkOut) >= new Date(reservedCheckIn));
};

// API to get rooms that are available for reservation along with their photos
const getRoomsOrder = async (req, res) => {
    const { checkIn, checkOut, adults, children } = req.query;

    try {
        // Step 1: Fetch rooms from ROOM_LIST with their reservation status from ROOM_RESERVATION
        const { data: roomList, error: roomListError } = await supabase
            .from('ROOM_LIST')
            .select('room_id, room_reservation_id');

        if (roomListError) {
            console.error('Error fetching ROOM_LIST:', roomListError);
            return res.status(400).json({ error: roomListError.message });
        }
        console.log('Room List:', roomList); // Log the fetched room list

        // Step 2: Fetch reservations that are 'CONFIRMED' and overlap with the date range
        const { data: confirmedReservations, error: reservationsError } = await supabase
            .from('ROOM_RESERVATION')
            .select('room_reservation_id, room_check_in_date, room_check_out_date, reservation_status')
            .eq('reservation_status', 'CONFIRMED')
            .or(`room_check_in_date.lte.${checkOut},room_check_out_date.gte.${checkIn}`);

        if (reservationsError) {
            console.error('Error fetching confirmed reservations:', reservationsError);
            return res.status(400).json({ error: reservationsError.message });
        }
        console.log('Confirmed Reservations:', confirmedReservations); // Log the confirmed reservations

        // Step 3: Map room_ids from ROOM_LIST where the reservation is 'CONFIRMED' and dates overlap
        const reservedRoomIds = roomList
            .filter(room => {
                const reservation = confirmedReservations.find(reservation => reservation.room_reservation_id === room.room_reservation_id);
                return reservation && datesOverlap(checkIn, checkOut, reservation.room_check_in_date, reservation.room_check_out_date);
            })
            .map(room => room.room_id);
        console.log('Reserved Room IDs:', reservedRoomIds); // Log the reserved room IDs

        // Step 4: Fetch all rooms from ROOM table that match the guest requirements and are available
        const totalGuests = parseInt(adults, 10) + parseInt(children, 10);

        const { data: availableRooms, error: roomsError } = await supabase
            .from('ROOM')
            .select('*')
            .eq('room_status', 'AVAILABLE')
            .gte('room_pax_max', totalGuests);

        if (roomsError) {
            console.error('Error fetching available rooms:', roomsError);
            return res.status(400).json({ error: roomsError.message });
        }
        console.log('Available Rooms:', availableRooms); // Log the available rooms

        // Step 5: Filter out rooms that are already reserved and confirmed
        const nonReservedRooms = availableRooms.filter(room => !reservedRoomIds.includes(room.room_id));
        console.log('Non-Reserved Available Rooms:', nonReservedRooms); // Log the non-reserved rooms

        // Step 6: Fetch the photos for each available room from ROOM_PHOTO_LIST
        const roomIds = nonReservedRooms.map(room => room.room_id);
        const { data: roomPhotos, error: photosError } = await supabase
            .from('ROOM_PHOTO_LIST')
            .select('room_id, room_slot, room_photo_url')
            .in('room_id', roomIds);

        if (photosError) {
            console.error('Error fetching room photos:', photosError);
            return res.status(400).json({ error: photosError.message });
        }
        console.log('Room Photos:', roomPhotos); // Log the fetched room photos

        // Step 7: Map photos to the respective rooms
        const roomsWithPhotos = nonReservedRooms.map(room => {
            const photos = roomPhotos.filter(photo => photo.room_id === room.room_id);
            const mainPhoto = photos.find(photo => photo.room_slot === 'MAIN') || null;
            const extraPhotos = photos.filter(photo => photo.room_slot === 'EXTRA');

            return {
                ...room,
                images: {
                    main: mainPhoto ? mainPhoto.room_photo_url : 'https://via.placeholder.com/600x400',
                    extra: extraPhotos.map(photo => photo.room_photo_url)
                }
            };
        });
        console.log('Rooms with Photos:', roomsWithPhotos); // Log the rooms with photos

        // Step 8: Return available rooms with their photos
        res.status(200).json({
            rooms: roomsWithPhotos,
            available_room_count: roomsWithPhotos.length,
        });
    } catch (error) {
        console.error('Error fetching rooms:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { getRoomsOrder };
