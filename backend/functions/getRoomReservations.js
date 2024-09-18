const { supabase } = require('../supabaseClient'); // Import Supabase client

const getRoomReservations = async (req, res) => {
    try {
        // Query the ROOM_RESERVATION table to retrieve all records
        const { data: roomReservations, error } = await supabase
            .from('ROOM_RESERVATION')
            .select('*'); // Select all columns

        if (error) {
            console.error('Error retrieving room reservations:', error.message);
            return res.status(400).json({ error: error.message });
        }

        // Send the retrieved data as a JSON response
        res.status(200).json(roomReservations);
    } catch (err) {
        console.error('Error fetching room reservations:', err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getRoomReservations };
