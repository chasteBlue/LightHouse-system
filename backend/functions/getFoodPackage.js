const { supabase } = require('../supabaseClient'); // Import Supabase client

const getFoodPackage = async (req, res) => {
    try {
        const { data: foodPackages, error } = await supabase
            .from('EVENT_FOOD_PACKAGE')
            .select('*'); // Select all columns

        if (error) {
            console.error('Error retrieving food packages:', error.message);
            return res.status(400).json({ error: error.message });
        }

        // Send the retrieved data as a JSON response
        res.status(200).json(foodPackages);
    } catch (err) {
        console.error('Error fetching food packages:', err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getFoodPackage };
