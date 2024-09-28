const { supabase } = require('../supabaseClient');
const { v4: uuidv4 } = require('uuid');

// Max size in bytes (5 MB)
const MAX_FILE_SIZE = 3 * 1024 * 1024;

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

    const food_id = uuidv4();

    // Validate image format and size
    if (food_photo) {
        // Check if base64 string is in the expected format
        const matches = food_photo.match(/^data:(image\/(png|jpeg|jpg));base64,/);
        if (!matches) {
            return res.status(400).json({ error: 'Invalid file format. Please upload PNG, JPEG, or JPG images.' });
        }

        // Check file size
        const base64Str = food_photo.split(',')[1];
        const buffer = Buffer.from(base64Str, 'base64');
        if (buffer.length > MAX_FILE_SIZE) {
            return res.status(400).json({ error: 'File size should not exceed 5 MB.' });
        }
    }

    try {
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

        res.status(201).json({ message: 'Food item registered successfully!', foodData });
    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { registerFoodItem };
