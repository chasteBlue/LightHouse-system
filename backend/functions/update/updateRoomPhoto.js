const { supabase } = require('../../supabaseClient');

// API to update room photo details (slot or URL)
const updateRoomPhoto = async (req, res) => {
    const { room_photo_id, room_slot, room_photo_url } = req.body;

    try {
        // Step 1: Validate input
        if (!room_photo_id || !room_slot) {
            return res.status(400).json({ error: 'Room photo ID and slot are required.' });
        }

        // Step 2: Update room photo in the database
        const { data, error } = await supabase
            .from('ROOM_PHOTO_LIST')
            .update({
                room_slot: room_slot,  // Update room slot (MAIN, EXTRA, ARCHIVE)
                ...(room_photo_url && { room_photo_url })  // Update photo URL only if provided
            })
            .eq('room_photo_id', room_photo_id);  // Match the room photo by ID

        if (error) {
            return res.status(400).json({ error: error.message });
        }

        // Step 3: Return success response
        return res.status(200).json({
            message: 'Room photo updated successfully!',
            data
        });
    } catch (err) {
        console.error('Error updating room photo:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { updateRoomPhoto };
