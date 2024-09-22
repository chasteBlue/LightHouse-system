const { supabase } = require('../supabaseClient'); 
const { v4: uuidv4 } = require('uuid'); 

const registerRoom = async (req, res) => {
    const {
        room_number,
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

    const room_id = uuidv4(); 
 
    try {
        const { data: roomData, error: roomError } = await supabase
            .from('ROOM')
            .insert([
                {
                    room_id,
                    room_number,
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
        console.error('Registration error:', err); 
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { registerRoom };
