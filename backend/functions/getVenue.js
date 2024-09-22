const { supabase } = require('../supabaseClient'); // Import Supabase client

const getVenue = async (req, res) => {
    try {
        // Query the EVENT_VENUE table to retrieve all records
        const { data: venues, error } = await supabase
            .from('EVENT_VENUE')
            .select('*'); // Select all columns

        if (error) {
            console.error('Error retrieving event venues:', error.message);
            return res.status(400).json({ error: error.message });
        }

        res.status(200).json(venues);
    } catch (err) {
        console.error('Error fetching event venues:', err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getVenue };
