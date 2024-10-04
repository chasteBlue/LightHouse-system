const { supabase } = require('../../supabaseClient');

const getRoomReservationsAll = async (req, res) => {
    try {
        console.log('Fetching all room reservations');

        // Step 1: Fetch all reservations from ROOM_RESERVATION
        const { data: reservations, error: reservationsError } = await supabase
            .from('ROOM_RESERVATION')
            .select('room_reservation_id, reservation_status, room_check_in_date, room_check_out_date, guest_id');

        if (reservationsError) {
            console.error('Error fetching room reservations:', reservationsError);
            return res.status(400).json({ error: reservationsError.message });
        }

        if (reservations.length === 0) {
            console.log('No room reservations found.');
            return res.status(200).json([]);
        }

        // Step 2: Fetch room_ids from ROOM_LIST using room_reservation_id
        const reservationIds = reservations.map(reservation => reservation.room_reservation_id);

        const { data: roomList, error: roomListError } = await supabase
            .from('ROOM_LIST')
            .select('room_id, room_reservation_id')
            .in('room_reservation_id', reservationIds);

        if (roomListError) {
            console.error('Error fetching room list:', roomListError);
            return res.status(400).json({ error: roomListError.message });
        }

        // Step 3: Fetch room details from ROOM table using room_id
        const roomIds = roomList.map(item => item.room_id);

        const { data: rooms, error: roomsError } = await supabase
            .from('ROOM')
            .select('room_id, room_number, room_type_name, room_pax_max, room_status')
            .in('room_id', roomIds);

        if (roomsError) {
            console.error('Error fetching room details:', roomsError);
            return res.status(400).json({ error: roomsError.message });
        }

        // Step 4: Fetch the photos for each room from ROOM_PHOTO_LIST
        const { data: roomPhotos, error: photosError } = await supabase
            .from('ROOM_PHOTO_LIST')
            .select('room_id, room_slot, room_photo_url')
            .in('room_id', roomIds);

        if (photosError) {
            console.error('Error fetching room photos:', photosError);
            return res.status(400).json({ error: photosError.message });
        }

        // Step 5: Filter out reservations where guest_id is null
        const validGuestIds = reservations
            .filter(reservation => reservation.guest_id !== null)
            .map(reservation => reservation.guest_id);

        // Step 6: Fetch guest details from GUEST table using valid guest_ids
        const { data: guests, error: guestError } = await supabase
            .from('GUEST')
            .select('guest_id, guest_fname, guest_lname')
            .in('guest_id', validGuestIds);

        if (guestError) {
            console.error('Error fetching guest details:', guestError);
            return res.status(400).json({ error: guestError.message });
        }

        // Step 7: Map room reservations with room details, photos, and guest details
        const combinedReservations = reservations.map(reservation => {
            const roomListItem = roomList.find(item => item.room_reservation_id === reservation.room_reservation_id);
            const roomDetails = rooms.find(room => room.room_id === roomListItem?.room_id);

            const photos = roomPhotos.filter(photo => photo.room_id === roomListItem?.room_id);
            const mainPhoto = photos.find(photo => photo.room_slot === 'MAIN') || null;
            const extraPhotos = photos.filter(photo => photo.room_slot === 'EXTRA');

            const guestDetails = guests.find(guest => guest.guest_id === reservation.guest_id);

            return {
                ...reservation,
                room: roomDetails ? {
                    room_number: roomDetails.room_number,
                    room_type_name: roomDetails.room_type_name,
                    room_pax_max: roomDetails.room_pax_max,
                    room_status: roomDetails.room_status,
                    images: {
                        main: mainPhoto ? mainPhoto.room_photo_url : 'https://via.placeholder.com/600x400',
                        extra: extraPhotos.map(photo => photo.room_photo_url)
                    }
                } : null,
                guest: guestDetails ? {
                    guest_fname: guestDetails.guest_fname,
                    guest_lname: guestDetails.guest_lname
                } : { guest_fname: 'Unknown', guest_lname: 'Unknown' }
            };
        });

        // Return the combined room reservations with room details, photos, and guest details
        console.log('Combined Reservations:', combinedReservations);
        res.status(200).json(combinedReservations);
    } catch (error) {
        console.error('Error fetching room reservations:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { getRoomReservationsAll };
