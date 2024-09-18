const { supabase } = require('../supabaseClient'); // Import from supabaseClient.js

const registerGuest = async (req, res) => {
    const {
        guest_id, //550e8400-e29b-41d4-a716-446655440000
        guest_fname,
        guest_lname,
        guest_birthdate,
        guest_address,
        created_at,
        guest_email,
        guest_country,
        guest_phone_no,
        guest_gender,
        guest_photo
    } = req.body;

    try {
        const { data, error } = await supabase
            .from('GUEST')
            .insert([
                {
                    guest_id,
                    guest_fname,
                    guest_lname,
                    guest_birthdate,
                    guest_address,
                    created_at,
                    guest_email,
                    guest_country,
                    guest_phone_no,
                    guest_gender,
                    guest_photo
                }
            ]);

        if (error) {
            return res.status(400).json({ error: error.message });
        }

        res.status(201).json({ message: "Guest registered successfully!", data });
    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { registerGuest };
