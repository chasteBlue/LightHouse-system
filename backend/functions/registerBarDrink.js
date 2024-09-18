const { supabase } = require('../supabaseClient');
const { v4: uuidv4 } = require('uuid'); // Import UUID library

const registerBarDrink = async (req, res) => {
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

    const drink_id = uuidv4(); // Generate a unique UUID for drink_id

    try {
        const { data, error } = await supabase
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

        if (error) {
            console.error('Error inserting into BAR_DRINK:', error.message);
            return res.status(400).json({ error: error.message });
        }

        res.status(201).json({ message: "Bar drink registered successfully!", data });
    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { registerBarDrink };
