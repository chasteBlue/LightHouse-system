const { supabase } = require('../supabaseClient');

// API to fetch one "MAIN" slot photo for each room
const getMainRoomPhotos = async (req, res) => {
    try {
        // Fetch room photos with the "MAIN" slot, joining with the ROOM table to get room details
        const { data: roomsWithPhotos, error } = await supabase
            .from('ROOM_PHOTO_LIST')
            .select(`
                room_photo_url,
                room_id,
                ROOM!inner(room_id, room_type_name, room_number)
            `)
            .eq('room_slot', 'MAIN');  // Filter only the photos with the "MAIN" slot

        if (error) {
            console.error('Error fetching main room photos:', error);
            return res.status(400).json({ error: error.message });
        }

        console.log('Fetched Room Photos:', roomsWithPhotos);

        // Use JavaScript to filter out duplicate "MAIN" photos for the same room
        const uniqueMainPhotos = [];
        const seenRoomIds = new Set();

        roomsWithPhotos.forEach(photo => {
            // Log each photo and its corresponding room details to inspect
            console.log(`Room ID: ${photo.room_id}, Room Type Name: ${photo.ROOM.room_type_name}, Room Number: ${photo.ROOM.room_number}`);

            if (!seenRoomIds.has(photo.room_id)) {
                uniqueMainPhotos.push(photo);  // Add photo if the room_id has not been seen
                seenRoomIds.add(photo.room_id);  // Mark room_id as seen
            }
        });

        // Return the data as a JSON response
        res.status(200).json({ rooms: uniqueMainPhotos });
    } catch (err) {
        console.error('Error fetching room photos:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { getMainRoomPhotos };
