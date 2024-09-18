const { supabase } = require('../supabaseClient'); // Import Supabase client

const getRooms = async (req, res) => {
    try {
        // Query the ROOM table to retrieve all records
        const { data: rooms, error } = await supabase
            .from('ROOM')
            .select('*'); // Select all columns

        if (error) {
            console.error('Error retrieving rooms:', error.message);
            return res.status(400).json({ error: error.message });
        }

        // Send the retrieved data as a JSON response
        res.status(200).json(rooms);
    } catch (err) {
        console.error('Error fetching rooms:', err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}; 

module.exports = { getRooms };
