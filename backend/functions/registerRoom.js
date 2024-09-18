const { supabase } = require('../supabaseClient'); // Import Supabase client
const { v4: uuidv4 } = require('uuid'); // Import UUID library

const registerRoom = async (req, res) => {
    const {
        room_type_name,
        room_description,
        room_pax_min,
        room_pax_max,
        extra_bed_max,
        room_rate,
        room_disc_percentage,
        room_final_rate,
        room_status,
        room_breakfast_availability
    } = req.body;

    const room_id = uuidv4(); // Generate a new unique UUID for room_id
 
    try {
        // Insert into the ROOM table
        const { data: roomData, error: roomError } = await supabase
            .from('ROOM')
            .insert([
                {
                    room_id, //650e8400-e29b-41d4-a716-446655440111
                    room_type_name,
                    room_description,
                    room_pax_min,
                    room_pax_max,
                    extra_bed_max,
                    room_rate,
                    room_disc_percentage,
                    room_final_rate,
                    room_status,
                    room_breakfast_availability
                }
            ]);

        if (roomError) {
            console.error('Error inserting into ROOM:', roomError.message);
            return res.status(400).json({ error: roomError.message });
        }

        res.status(201).json({ message: "Room registered successfully!", roomData });
    } catch (err) {
        console.error('Registration error:', err); // Log any other errors
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { registerRoom };
