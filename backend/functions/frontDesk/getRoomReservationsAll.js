const { supabase } = require('../../supabaseClient'); // Import Supabase client

// API to get all room reservations (join ROOM_RESERVATION with ROOM_LIST)
const getRoomReservationsAll = async (req, res) => {
    try {
        // Step 1: Fetch all room reservations from ROOM_RESERVATION table
        console.log('Fetching all room reservations');

        // Join ROOM_RESERVATION with ROOM_LIST to get room_id
        const { data: reservations, error: reservationsError } = await supabase
            .from('ROOM_RESERVATION')
            .select(`
                room_reservation_id, 
                reservation_status, 
                check_in_date, 
                check_out_date, 
                ROOM_LIST(room_id, room_number)
            `);

        if (reservationsError) {
            console.error('Error fetching room reservations:', reservationsError);
            return res.status(500).json({ error: 'Failed to fetch room reservations' });
        }

        // If no reservations are found, return a message
        if (!reservations.length) {
            console.log('No room reservations found.');
            return res.status(404).json({ message: 'No room reservations found.' });
        }

        // Step 2: Fetch room details for each reservation by joining ROOM_LIST
        const reservationsWithRooms = reservations.map(reservation => {
            const roomDetails = reservation.ROOM_LIST ? reservation.ROOM_LIST[0] : null;
            return {
                ...reservation,
                room_number: roomDetails ? roomDetails.room_number : 'Unknown',
                room_id: roomDetails ? roomDetails.room_id : 'Unknown',
            };
        });

        // Log the final reservations with room details
        console.log('Reservations with room details:', reservationsWithRooms);

        // Step 3: Return reservations with room details in response as JSON
        return res.status(200).json(reservationsWithRooms);
    } catch (error) {
        console.error('Error fetching room reservations:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { getRoomReservationsAll };
