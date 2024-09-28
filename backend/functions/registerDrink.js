const { supabase } = require('../supabaseClient'); // Import Supabase client
const { v4: uuidv4 } = require('uuid'); // Import UUID library

const MAX_FILE_SIZE = 3 * 1024 * 1024;

const registerDrink = async (req, res) => {
    const {
        bar_category_name,
        drink_name,
        drink_price,
        drink_status,
        drink_description,
        drink_photo,
        drink_final_price,
        drink_disc_percentage
    } = req.body;

    // Generate a unique drink ID using UUID
    const drink_id = uuidv4();

    // Validate image format and size
    if (drink_photo) {
        const matches = drink_photo.match(/^data:(image\/(png|jpeg|jpg));base64,/);
        if (!matches) {
            return res.status(400).json({ error: 'Invalid file format. Please upload PNG, JPEG, or JPG images.' });
        }

        // Check file size
        const base64Str = drink_photo.split(',')[1];
        const buffer = Buffer.from(base64Str, 'base64');
        if (buffer.length > MAX_FILE_SIZE) {
            return res.status(400).json({ error: 'File size should not exceed 3 MB.' });
        }
    }

    try {
        // Insert into the BAR_DRINK table
        const { data: drinkData, error: drinkError } = await supabase
            .from('BAR_DRINK')
            .insert([
                {
                    drink_id,
                    bar_category_name,
                    drink_name,
                    drink_price,
                    drink_status,
                    drink_description,
                    drink_photo,
                    drink_final_price,
                    drink_disc_percentage
                }
            ]);

        if (drinkError) {
            console.error('Error inserting into BAR_DRINK:', drinkError.message);
            return res.status(400).json({ error: drinkError.message });
        }

        res.status(201).json({ message: "Drink item registered successfully!", drinkData });
    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { registerDrink };
