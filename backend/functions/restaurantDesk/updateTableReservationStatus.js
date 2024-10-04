const { supabase } = require('../../supabaseClient');

const updateTableReservationStatus = async (req, res) => {
  const { table_reservation_id } = req.params;
  const { reservation_status } = req.body;

  console.log('Reservation ID:', table_reservation_id);
  console.log('Reservation Status:', reservation_status);

  if (!table_reservation_id) {
    return res.status(400).json({ error: 'Reservation ID is missing' });
  }

  if (!reservation_status) {
    return res.status(400).json({ error: 'Reservation status is missing' });
  }

  try {
    // Fetch the current reservation to check its status and date
    const { data: reservation, error: fetchError } = await supabase
      .from('TABLE_RESERVATION')
      .select('table_reservation_id, reservation_status, table_reservation_date')
      .eq('table_reservation_id', table_reservation_id)
      .single();

    if (fetchError || !reservation) {
      return res.status(404).json({ error: 'Reservation not found' });
    }

    // Check if the reservation is still "PENDING" and older than one day
    const currentTime = new Date();
    const reservationDate = new Date(reservation.table_reservation_date);
    const oneDayInMillis = 24 * 60 * 60 * 1000; // One day in milliseconds

    if (reservation.reservation_status === 'PENDING' && (currentTime - reservationDate) > oneDayInMillis) {
      // Automatically mark the reservation as "NO SHOW"
      reservation_status = 'NO SHOW';
      console.log(`Reservation ${table_reservation_id} automatically set to NO SHOW`);
    }

    // Update the reservation status
    const { data: updatedReservation, error: updateError } = await supabase
      .from('TABLE_RESERVATION')
      .update({
        reservation_status,
      })
      .eq('table_reservation_id', table_reservation_id);

    if (updateError) {
      return res.status(400).json({ error: updateError.message });
    }

    res.status(200).json({
      message: 'Reservation status updated successfully!',
      updatedReservation,
    });
  } catch (err) {
    console.error('Error updating reservation status:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { updateTableReservationStatus };
