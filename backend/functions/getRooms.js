const { supabase } = require('../supabaseClient');

const getRooms = async (req, res) => {
    const { checkIn, checkOut, adults, children, reservedRoomIds } = req.query;

    // Calculate the total number of people
    const totalGuests = parseInt(adults) + parseInt(children);

    try {
        console.log(`CheckIn: ${checkIn}, CheckOut: ${checkOut}, Adults: ${adults}, Children: ${children}, Total Guests: ${totalGuests}`);
        console.log('Reserved Room IDs:', reservedRoomIds);

        // Construct the query for fetching rooms
        let query = supabase
            .from('ROOM')
            .select('*')
            .gte('room_pax_max', totalGuests);

        // Apply the filter for reserved rooms if there are any reserved room IDs
        if (reservedRoomIds && reservedRoomIds.length) {
            query = query.not('room_id', 'in', reservedRoomIds);
        }

        // Fetch all rooms that can accommodate the number of guests and are not reserved
        const { data: rooms, error } = await query;

        if (error) throw error;

        // Log the rooms found
        console.log('Number of Rooms Matching Capacity and Availability:', rooms.length);
        console.log('Rooms:', rooms);

        res.status(200).json({ rooms });
    } catch (error) {
        // Log the error for debugging
        console.error('Error fetching rooms:', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getRooms };