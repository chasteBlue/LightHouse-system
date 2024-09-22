// registerLaundry.js
const { supabase } = require('../supabaseClient'); // Import Supabase client
const { v4: uuidv4 } = require('uuid'); // Import UUID library

const registerLaundry = async (req, res) => {
    const {
        laundry_item,
        laundry_ironing_price,
        laundry_status
    } = req.body;

    const laundry_id = uuidv4(); // Generate a unique ID for the laundry item

    try {
        // Insert into the LAUNDRY_DETAIL table
        const { data: laundryData, error: laundryError } = await supabase
            .from('LAUNDRY_DETAIL')
            .insert([
                {
                    laundry_id,
                    laundry_item,
                    laundry_ironing_price,
                    laundry_status
                }
            ]);

        if (laundryError) {
            console.error('Error inserting into LAUNDRY_DETAIL:', laundryError.message);
            return res.status(400).json({ error: laundryError.message });
        }

        res.status(201).json({ message: "Laundry item registered successfully!", laundryData });
    } catch (err) {
        console.error('Registration error:', err); // Log any other errors
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { registerLaundry };
