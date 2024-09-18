const { supabase } = require('../supabaseClient'); // Import Supabase client

const getGuests = async (req, res) => {
    try {
        // Query the GUEST table to retrieve all records
        const { data: guests, error } = await supabase
            .from('GUEST')
            .select('*'); // Select all columns

        if (error) {
            console.error('Error retrieving guests:', error.message);
            return res.status(400).json({ error: error.message });
        }

        // Send the retrieved data as a JSON response
        res.status(200).json(guests);
    } catch (err) {
        console.error('Error fetching guests:', err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getGuests };
