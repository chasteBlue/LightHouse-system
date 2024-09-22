// functions/registerVenue.js

const { supabase } = require('../supabaseClient'); // Import Supabase client
const { v4: uuidv4 } = require('uuid'); // Import UUID library

const registerVenue = async (req, res) => {
    const {
        venue_name,
        venue_description,
        venue_status,
        venue_price,
        venue_final_price,
        event_disc_percentage,
        venue_max_pax
    } = req.body;

    const event_venue_id = uuidv4(); 

    try {
        // Insert into the EVENT_VENUE table
        const { data: venueData, error: venueError } = await supabase
            .from('EVENT_VENUE')
            .insert([
                {
                    event_venue_id,
                    venue_name,
                    venue_description,
                    venue_status,
                    venue_price,
                    venue_final_price,
                    event_disc_percentage,
                    venue_max_pax
                }
            ]);

        if (venueError) {
            console.error('Error inserting into EVENT_VENUE:', venueError.message);
            return res.status(400).json({ error: venueError.message });
        }

        res.status(201).json({ message: "Event venue registered successfully!", venueData });
    } catch (err) {
        console.error('Registration error:', err); // Log any other errors
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { registerVenue };
