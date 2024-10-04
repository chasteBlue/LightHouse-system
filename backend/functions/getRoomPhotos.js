const { supabase } = require('../supabaseClient');

const getRoomPhotos = async (req, res) => {
    const { roomId } = req.query;

    try {
        const { data: photos, error } = await supabase
            .from('ROOM_PHOTO_LIST')
            .select('*')
            .eq('room_id', roomId);  // Fetch only the photos for the provided roomId

        if (error) {
            return res.status(400).json({ error: error.message });
        }

        res.status(200).json(photos);
    } catch (err) {
        console.error('Error fetching room photos:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { getRoomPhotos };
