// functions/registerFoodPackage.js
const { supabase } = require('../supabaseClient'); // Import Supabase client
const { v4: uuidv4 } = require('uuid'); // Import UUID library

const registerFoodPackage = async (req, res) => {
    const {
        event_fd_pckg_name,
        event_fd_pckg_final_price,
        event_fd_main_dish_lmt,
        event_fd_pasta_lmt,
        event_fd_rice_lmt,
        event_fd_dessert_lmt,
        event_fd_drinks_lmt,
        event_fd_status
    } = req.body;

    const event_fd_pckg_id = uuidv4(); 

    try {
        const { data, error } = await supabase
            .from('EVENT_FOOD_PACKAGE')
            .insert([
                {
                    event_fd_pckg_id,
                    event_fd_pckg_name,
                    event_fd_pckg_final_price,
                    event_fd_main_dish_lmt,
                    event_fd_pasta_lmt,
                    event_fd_rice_lmt,
                    event_fd_dessert_lmt,
                    event_fd_drinks_lmt,
                    event_fd_status
                }
            ]);

        if (error) {
            console.error('Error inserting food package:', error.message);
            return res.status(400).json({ error: error.message });
        }

        res.status(201).json({ message: "Food package registered successfully!", data });
    } catch (err) {
        console.error('Error registering food package:', err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { registerFoodPackage };
