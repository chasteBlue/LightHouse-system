const { supabase } = require('../../supabaseClient'); // Import Supabase client

// API to cancel a table reservation
const cancelTableReservation = async (req, res) => {
    const { table_reservation_id, cancel_reason } = req.body;

    // Check if table_reservation_id and cancel_reason are provided
    if (!table_reservation_id || !cancel_reason) {
        return res.status(400).json({ message: 'Table reservation ID and cancellation reason are required.' });
    }

    try {
        // Step 1: Update the TABLE_RESERVATION table to set reservation_status to 'CANCELED'
        // Update cancel_reservation_request to save the cancellation reason
        const { data: tableReservation, error: updateError } = await supabase
            .from('TABLE_RESERVATION')
            .update({
                reservation_status: 'CANCELED',
                cancel_reservation_request: cancel_reason            })
            .eq('table_reservation_id', table_reservation_id);  // Match reservation by ID

        if (updateError) {
            console.error('Error updating table reservation:', updateError);
            return res.status(500).json({ error: 'Failed to cancel table reservation' });
        }

        // Step 3: Return a success message if the cancellation is successful
        return res.status(200).json({ message: 'Table reservation cancelled successfully' });
    } catch (error) {
        console.error('Error cancelling table reservation:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { cancelTableReservation };
