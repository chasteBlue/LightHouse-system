const { supabase } = require('../supabaseClient');
const { v4: uuidv4 } = require('uuid');

const registerRoomPhotos = async (req, res) => {
    const { room_id, photos } = req.body;
    try {
        // Ensure room_id is valid
        const { data: roomData, error: roomError } = await supabase
            .from('ROOM')
            .select('room_id')
            .eq('room_id', room_id)
            .single();

        if (roomError || !roomData) {
            return res.status(400).json({ error: 'Room does not exist.' });
        }

        // Prepare photo data for insertion
        const photoRecords = photos.map((photo) => {
            const fileIdMatch = photo.room_photo_url.match(/\/d\/(.*?)\//);
            const fileId = fileIdMatch ? fileIdMatch[1] : null;

            if (!fileId) {
                throw new Error('Invalid Google Drive link.');
            }

            const convertedUrl = `https://drive.google.com/thumbnail?id=${fileId}`;
            return {
                room_photo_id: uuidv4(),
                room_id: roomData.room_id,
                room_slot: photo.room_slot,
                room_photo_url: convertedUrl,
            };
        });

        // Insert all photo records at once
        const { data, error } = await supabase
            .from('ROOM_PHOTO_LIST')
            .insert(photoRecords);

        if (error) {
            return res.status(400).json({ error: error.message });
        }

        res.status(201).json({ message: 'Room photos added successfully!', data });
    } catch (err) {
        console.error('Error adding room photos:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { registerRoomPhotos };
