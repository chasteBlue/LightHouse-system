const { supabase } = require('../supabaseClient'); // Import Supabase client

const getRoomList = async (req, res) => {
    try {
        // Query the ROOM_LIST table to retrieve all records
        const { data: roomList, error } = await supabase
            .from('ROOM_LIST')
            .select('*'); // Select all columns

        if (error) {
            console.error('Error retrieving room list:', error.message);
            return res.status(400).json({ error: error.message });
        }

        // Send the retrieved data as a JSON response
        res.status(200).json(roomList);
    } catch (err) {
        console.error('Error fetching room list:', err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getRoomList };
