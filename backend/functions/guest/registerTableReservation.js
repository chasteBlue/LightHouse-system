// controllers/restaurantController.js
const { supabase } = require('../../supabaseClient');
const jwt = require('jsonwebtoken');

// Function to register a new table reservation
const registerTableReservation = async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    // Decode token to get guest_id
    const decoded = jwt.verify(token, 'your_jwt_secret'); // Replace 'your_jwt_secret' with your actual JWT secret
    const { guest_id } = decoded;

    const {
      selectedTableId,
      reservationDate,
      reservationTime,
      numberOfGuests,
      notes
    } = req.body;

    // Step 1: Insert into TABLE_RESERVATION
    const { data: reservationData, error: reservationError } = await supabase
      .from('TABLE_RESERVATION')
      .insert([{
        guest_id,
        table_reservation_date: reservationDate,
        table_guest_quantity: numberOfGuests,
        table_time: reservationTime,
        table_notes: notes,
        reservation_status: 'PENDING' // Assuming initial status is confirmed
      }])
      .select('table_reservation_id')
      .single();

    if (reservationError) {
      console.error('Error inserting reservation:', reservationError.message);
      return res.status(500).json({ error: 'Failed to create reservation.' });
    }

    const table_reservation_id = reservationData.table_reservation_id;

    // Step 2: Insert into TABLE_LIST
    const { data: tableListData, error: tableListError } = await supabase
      .from('TABLE_LIST')
      .insert([{
        table_id: selectedTableId,
        table_reservation_id
      }])
      .select()
      .single();

    if (tableListError) {
      console.error('Error inserting into table list:', tableListError.message);
      return res.status(500).json({ error: 'Failed to link table to reservation.' });
    }

    // Step 3: Respond with success
    res.status(201).json({ 
      message: 'Reservation created successfully.',
      reservation_id: table_reservation_id,
      table_list: tableListData 
    });
  } catch (err) {
    console.error('Error registering reservation:', err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { registerTableReservation };
