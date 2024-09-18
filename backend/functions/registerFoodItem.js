const { supabase } = require('../supabaseClient'); // Import Supabase client
const { v4: uuidv4 } = require('uuid'); // Import UUID library

const registerFoodItem = async (req, res) => {
    const {
        food_category_name,
        food_name,
        food_price,
        food_status,
        food_description,
        food_photo,
        food_final_price,
        food_disc_percentage,
        food_service_category
    } = req.body;

    const food_id = uuidv4(); // Generate a new unique UUID for food_id

    try {
        // Insert into the FOOD_ITEM table
        const { data: foodData, error: foodError } = await supabase
            .from('FOOD_ITEM')
            .insert([
                {
                    food_id,
                    food_category_name,
                    food_name,
                    food_price,
                    food_status,
                    food_description,
                    food_photo,
                    food_final_price,
                    food_disc_percentage,
                    food_service_category
                }
            ]);

        if (foodError) {
            console.error('Error inserting into FOOD_ITEM:', foodError.message);
            return res.status(400).json({ error: foodError.message });
        }

        res.status(201).json({ message: "Food item registered successfully!", foodData });
    } catch (err) {
        console.error('Registration error:', err); // Log any other errors
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { registerFoodItem };
