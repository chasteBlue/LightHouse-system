const { supabase } = require('../supabaseClient'); // Import Supabase client

const getFoodOrders = async (req, res) => {
    try {
        // Query the FOOD_ORDER table to retrieve all records
        const { data: foodOrders, error } = await supabase
            .from('FOOD_ORDER')
            .select('*'); // Select all columns

        if (error) {
            console.error('Error retrieving food orders:', error.message);
            return res.status(400).json({ error: error.message });
        }

        // Send the retrieved data as a JSON response
        res.status(200).json(foodOrders);
    } catch (err) {
        console.error('Error fetching food orders:', err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getFoodOrders };
