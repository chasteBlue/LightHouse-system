const { supabase } = require('../../supabaseClient');

// Utility function to check date overlap
const datesOverlap = (checkIn, checkOut, reservedCheckIn, reservedCheckOut) => {
    return (new Date(checkIn) <= new Date(reservedCheckOut) && new Date(checkOut) >= new Date(reservedCheckIn));
};

// API to get rooms that are available for reservation
const checkRoomAvailability = async (req, res) => {
    const { check_in_date, check_out_date, total_guests, number_of_rooms } = req.query;

    try {
        // Step 1: Fetch room reservations with 'CONFIRMED' status and overlapping dates
        const { data: reservedRooms, error: reservationsError } = await supabase
            .from('ROOM_RESERVATION')
            .select('room_reservation_id, room_check_in_date, room_check_out_date, reservation_status, ROOM_LIST!inner(room_id)')
            .or(`room_check_in_date.lte.${check_out_date},room_check_out_date.gte.${check_in_date}`)
            .eq('reservation_status', 'CONFIRMED');  // Only fetch confirmed reservations

        if (reservationsError) {
            console.error('Error fetching reservations:', reservationsError);
            return res.status(400).json({ error: reservationsError.message });
        }

        // Step 2: Extract reserved room_ids from ROOM_LIST where the reservation is confirmed and dates overlap
        const reservedRoomIds = reservedRooms
            .filter(reservation => datesOverlap(check_in_date, check_out_date, reservation.room_check_in_date, reservation.room_check_out_date))
            .map(reservation => reservation.ROOM_LIST.room_id);

        // Step 3: Fetch all rooms that match guest requirements and are available
        const { data: allRooms, error: allRoomsError } = await supabase
            .from('ROOM')
            .select('*')
            .eq('room_status', 'AVAILABLE')  // Only select rooms marked as 'AVAILABLE'
            .gte('room_pax_max', total_guests);  // Filter rooms based on guest capacity

        if (allRoomsError) {
            console.error('Error fetching all rooms:', allRoomsError);
            return res.status(400).json({ error: allRoomsError.message });
        }

        // Step 4: Filter out rooms that are reserved based on reservation status and dates
        const availableRooms = allRooms.filter(room => !reservedRoomIds.includes(room.room_id));

        // Step 5: Return available rooms and room count
        res.status(200).json({
            available_rooms: availableRooms,
            available_room_count: availableRooms.length,
            number_of_rooms_needed: number_of_rooms,
        });
    } catch (error) {
        console.error('Error checking room availability:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { checkRoomAvailability };
