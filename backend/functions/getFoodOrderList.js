const { supabase } = require('../supabaseClient'); // Import Supabase client

const getFoodOrderList = async (req, res) => {
    try {
        // Query the FOOD_ORDER_LIST table to retrieve all records
        const { data: foodOrderList, error } = await supabase
            .from('FOOD_ORDER_LIST')
            .select('*'); // Select all columns

        if (error) {
            console.error('Error retrieving food order list:', error.message);
            return res.status(400).json({ error: error.message });
        }

        // Send the retrieved data as a JSON response
        res.status(200).json(foodOrderList);
    } catch (err) {
        console.error('Error fetching food order list:', err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getFoodOrderList };
