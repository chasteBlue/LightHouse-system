const { supabase } = require('../supabaseClient'); // Import Supabase client
const { v4: uuidv4 } = require('uuid'); // Import UUID library

const registerRoomPhotos = async (req, res) => {
    const { room_id, photos } = req.body;
    
    if (!room_id) {
        return res.status(400).json({ error: 'Room ID is required.' });
    }

    if (!photos || !Array.isArray(photos) || photos.length === 0) {
        return res.status(400).json({ error: 'Photos data is required.' });
    }

    // Additional validation for photo properties
    for (const photo of photos) {
        if (!photo.room_slot || !photo.room_photo_url) {
            return res.status(400).json({ error: 'Each photo must have a room_slot and a room_photo_url.' });
        }
    }

    // Define valid room slot values
    const validRoomSlots = ['MAIN', 'EXTRA'];

    try {
        // Create an array of photo entries to be inserted
        const photoEntries = photos.map((photo) => {
            // Check if the provided room_slot is valid
            if (!validRoomSlots.includes(photo.room_slot)) {
                throw new Error(`Invalid room slot value: ${photo.room_slot}. Must be 'MAIN' or 'EXTRA'.`);
            }

            return {
                room_photo_id: uuidv4(), // Generate a unique ID for each photo
                room_id, // Use the provided room_id
                room_slot: photo.room_slot.toUpperCase(), // Convert to uppercase to match ENUM
                room_photo_url: photo.room_photo_url // Photo URL
            };
        });

        // Insert all photo entries into the ROOM_PHOTOS table
        const { data: roomPhotosData, error: roomPhotosError } = await supabase
            .from('ROOM_PHOTOS')
            .insert(photoEntries);

        if (roomPhotosError) {
            console.error('Error inserting room photos:', roomPhotosError.message);
            return res.status(400).json({ error: roomPhotosError.message });
        }

        res.status(201).json({ message: "Room photos registered successfully!", roomPhotosData });
    } catch (err) {
        console.error('Registration error:', err.message);
        res.status(500).json({ error: err.message || "Internal Server Error" });
    }
};

module.exports = { registerRoomPhotos };
