// backend/functions/registerGuest.js
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// Initialize Supabase client
const supabaseUrl = 'https://cayfvgjakympxwknatco.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNheWZ2Z2pha3ltcHh3a25hdGNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM3ODAyNzAsImV4cCI6MjAzOTM1NjI3MH0.5Q3n5m3b1XN4EkBTpidqc0XwWQJJDLC2m48xh6GsDKk";

if (!supabaseKey) {
    console.error("Supabase key is missing!");
    process.exit(1); // Exit if key is not found
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Function to handle guest registration
const registerGuest = async (req, res) => {
    const { guest_id, guest_fname, guest_lname, guest_birthdate, guest_address, created_at, guest_email, guest_country, guest_phone_no, guest_gender, guest_photo } = req.body;

    try {
        // Insert new guest into the Guest_Account table
        const { data, error } = await supabase
            .from('GUEST')
            .insert([
                {
                    guest_id: guest_id,
                    first_name: guest_fname,
                    last_name: guest_lname,
                    gender: guest_gender,
                    birthdate: guest_birthdate,
                    address: guest_address,
                    country: guest_country,
                    contact_number: guest_phone_no,
                    email: guest_email,
                    date_created: created_at,
                    profile_pic: guest_photo
                }
            ]);

        if (error) {
            return res.status(400).json({ error: error.message });
        }

        res.status(201).json({ message: "Guest registered successfully!", data });
    } catch (err) {
        console.error('Registration error:', err); // Log error for debugging
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { registerGuest };
