const { supabase } = require('../../supabaseClient'); // Import Supabase client
const { v4: uuidv4 } = require('uuid'); // Import UUID library

const registerAdditionalItem = async (req, res) => {
    const {
        check_in_id,
        add_item_name,
        add_item_borrowed_date,
        add_item_returned_date,
        add_item_status
    } = req.body;

    const add_item_id = uuidv4(); 

    try {
        const { data: additionalItemData, error: additionalItemError } = await supabase
            .from('ADDITIONAL_ITEM')
            .insert([
                {
                    add_item_id,
                    check_in_id,
                    add_item_name,
                    add_item_borrowed_date: add_item_borrowed_date || new Date().toISOString(), // Use current date if not provided
                    add_item_returned_date: add_item_returned_date || null, // Use null if not provided
                    add_item_status
                }
            ]);

        if (additionalItemError) {
            console.error('Error inserting into ADDITIONAL_ITEM:', additionalItemError.message);
            return res.status(400).json({ error: additionalItemError.message });
        }

        res.status(201).json({ message: "Additional item registered successfully!", additionalItemData });
    } catch (err) {
        console.error('Registration error:', err); 
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { registerAdditionalItem };
