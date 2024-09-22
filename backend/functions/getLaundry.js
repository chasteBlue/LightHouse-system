// getLaundry.js
const { supabase } = require('../supabaseClient'); // Import Supabase client

const getLaundry = async (req, res) => {
    try {
        // Query the LAUNDRY_DETAIL table to retrieve all records
        const { data: laundryItems, error } = await supabase
            .from('LAUNDRY_DETAIL')
            .select('*'); // Select all columns

        if (error) {
            console.error('Error retrieving laundry items:', error.message);
            return res.status(400).json({ error: error.message });
        }

        // Send the retrieved data as a JSON response
        res.status(200).json(laundryItems);
    } catch (err) {
        console.error('Error fetching laundry items:', err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getLaundry };
