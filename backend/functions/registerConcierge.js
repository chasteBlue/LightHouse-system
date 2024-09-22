const { supabase } = require('../supabaseClient'); // Import Supabase client
const { v4: uuidv4 } = require('uuid'); // Import UUID library

const registerConcierge = async (req, res) => {
    const {
        concierge_type,
        concierge_description,
        concierge_supplier,
        concierge_phone_no,
        concierge_duration,
        concierge_start_time,
        concierge_end_time,
        concierge_type_price,
        concierge_status
    } = req.body;

    const concierge_id = uuidv4(); // Generate a unique ID for the concierge

    try {
        const { data: conciergeData, error: conciergeError } = await supabase
            .from('CONCIERGE_DETAIL')
            .insert([
                {
                    concierge_id,
                    concierge_type,
                    concierge_description,
                    concierge_supplier,
                    concierge_phone_no,
                    concierge_duration,
                    concierge_start_time,
                    concierge_end_time,
                    concierge_type_price,
                    concierge_status
                }
            ]);

        if (conciergeError) {
            console.error('Error inserting into CONCIERGE_DETAIL:', conciergeError.message);
            return res.status(400).json({ error: conciergeError.message });
        }

        res.status(201).json({ message: "Concierge service registered successfully!", conciergeData });
    } catch (err) {
        console.error('Registration error:', err); // Log any other errors
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { registerConcierge };
