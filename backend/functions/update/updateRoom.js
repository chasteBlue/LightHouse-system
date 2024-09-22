const { supabase } = require('../../supabaseClient'); 

const updateRoom = async (req, res) => {
    const { id } = req.params; 
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

    if (!id) {
        return res.status(400).json({ error: "Room ID is required for update." });
    }

    try {
        const { data: roomData, error: roomError } = await supabase
            .from('ROOM')
            .update({
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
            })
            .eq('room_id', id); 

        if (roomError) {
            console.error('Error updating ROOM:', roomError.message);
            return res.status(400).json({ error: roomError.message });
        }

        res.status(200).json({ message: "Room updated successfully!", roomData });
    } catch (err) {
        console.error('Update error:', err); 
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { updateRoom };
