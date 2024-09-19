const { supabase } = require('../supabaseClient'); 
const { v4: uuidv4 } = require('uuid'); 

const registerRoomReservation = async (req, res) => {
    const {
        room_reservation_date,
        room_check_in_date,
        room_check_out_date,
        room_is_breakfast,
        room_pax,
        room_notes,
        room_company,
        room_is_downpayment,
        room_downpayment,
        cancel_reservation_request,
        reservation_status,
        guest_id,
        room_id  // Added room_id to link to ROOM_LIST
    } = req.body;

    const room_reservation_id = uuidv4(); // Generate a new unique UUID for room_reservation_id
    const list_room_id = uuidv4(); // Generate a new unique UUID for list_room_id
 
    try {
        // Insert into the ROOM_RESERVATION table
        const { data: reservationData, error: reservationError } = await supabase
            .from('ROOM_RESERVATION')
            .insert([
                {
                    room_reservation_id,
                    room_reservation_date,
                    room_check_in_date,
                    room_check_out_date,
                    room_is_breakfast,
                    room_pax,
                    room_notes,
                    room_company,
                    room_is_downpayment,
                    room_downpayment,
                    cancel_reservation_request,
                    reservation_status,
                    guest_id
                }
            ]);

        if (reservationError) {
            console.error('Error inserting into ROOM_RESERVATION:', reservationError.message);
            return res.status(400).json({ error: reservationError.message });
        }

        // After successful reservation insertion, insert into ROOM_LIST
        const { data: roomListData, error: roomListError } = await supabase
            .from('ROOM_LIST')
            .insert([
                {
                    list_room_id,
                    room_id,
                    room_reservation_id  // Link the room reservation to ROOM_LIST
                }
            ]);

        if (roomListError) {
            console.error('Error inserting into ROOM_LIST:', roomListError.message); // Log error
            return res.status(400).json({ error: roomListError.message }); // Return the error
        }

        res.status(201).json({ message: "Room reservation registered successfully and ROOM_LIST updated!", reservationData, roomListData });
    } catch (err) {
        console.error('Registration error:', err); // Log any other errors
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { registerRoomReservation };
