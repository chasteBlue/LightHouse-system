const { supabase } = require('../../supabaseClient'); // Import Supabase client

const updateFoodItem = async (req, res) => {
    const { food_id } = req.params; // Get food_id from the request parameters
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

    try {
        // Update the FOOD_ITEM table
        const { data: updatedFoodData, error: foodError } = await supabase
            .from('FOOD_ITEM')
            .update({
                food_category_name,
                food_name,
                food_price,
                food_status,
                food_description,
                food_photo,
                food_final_price,
                food_disc_percentage,
                food_service_category
            })
            .eq('food_id', food_id); // Use the food_id to identify the record to update

        if (foodError) {
            console.error('Error updating FOOD_ITEM:', foodError.message);
            return res.status(400).json({ error: foodError.message });
        }

        res.status(200).json({ message: "Food item updated successfully!", updatedFoodData });
    } catch (err) {
        console.error('Update error:', err); // Log any other errors
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { updateFoodItem };
