const { supabase } = require('../supabaseClient');

const getFoodPhotos = async (req, res) => {
    try {
        const { data: foodItems, error } = await supabase
            .from('FOOD_ITEM')
            .select('food_id, food_name, food_photo, food_final_price')
            .eq('food_status', 'ACTIVE'); // Assuming 'status' field marks active photos

        if (error) {
            return res.status(400).json({ error: error.message });
        }

        res.status(200).json({ foodItems });
    } catch (err) {
        console.error('Error fetching food photos:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { getFoodPhotos };
