const { supabase } = require('../../supabaseClient');

// Function to get table reservations and details for a specific date
const getTableReservations = async (req, res) => {
  const { table_reservation_date } = req.query;

  try {
    console.log(`Fetching reservations for date: ${table_reservation_date}`);

    // Step 1: Fetch all reservations for the given date
    const { data: reservations, error: reservationsError } = await supabase
      .from('TABLE_RESERVATION')
      .select('table_reservation_id, table_time, reservation_status, table_guest_quantity, guest_id')
      .eq('table_reservation_date', table_reservation_date);

    if (reservationsError) {
      console.error('Error retrieving reservations:', reservationsError.message);
      return res.status(400).json({ error: reservationsError.message });
    }

    if (reservations.length === 0) {
      console.log('No reservations found for the selected date.');
      return res.status(200).json([]); // Return empty array if no reservations
    }

    // Log the reservations data fetched
    console.log('Reservations data:', reservations);

    // Step 2: Extract guest IDs and reservation IDs
    const guestIds = reservations.map(reservation => reservation.guest_id);
    const reservationIds = reservations.map(reservation => reservation.table_reservation_id);

    // Step 3: Fetch guest details from GUEST table using guest_ids
    const { data: guestDetails, error: guestDetailsError } = await supabase
      .from('GUEST')
      .select('guest_id, guest_fname, guest_lname, guest_phone_no')
      .in('guest_id', guestIds);

    if (guestDetailsError) {
      console.error('Error retrieving guest details:', guestDetailsError.message);
      return res.status(400).json({ error: guestDetailsError.message });
    }

    // Log guest details data
    console.log('Guest details data:', guestDetails);

    // Step 4: Fetch table_id from TABLE_LIST using table_reservation_id
    const { data: tableList, error: tableListError } = await supabase
      .from('TABLE_LIST')
      .select('table_id, table_reservation_id')
      .in('table_reservation_id', reservationIds);

    if (tableListError) {
      console.error('Error retrieving table list:', tableListError.message);
      return res.status(400).json({ error: tableListError.message });
    }

    // Log table list data
    console.log('Table list data:', tableList);

    // Step 5: Extract table IDs
    const tableIds = tableList.map(item => item.table_id);

    // Step 6: Fetch details from TABLE using the table_ids
    const { data: tableDetails, error: tableDetailsError } = await supabase
      .from('TABLE')
      .select('table_id, table_name, seat_quantity')
      .in('table_id', tableIds);

    if (tableDetailsError) {
      console.error('Error retrieving table details:', tableDetailsError.message);
      return res.status(400).json({ error: tableDetailsError.message });
    }

    // Log table details data
    console.log('Table details data:', tableDetails);

    // Step 7: Combine table reservations with table and guest details
    const combinedReservations = reservations.map(reservation => {
      const matchingTableList = tableList.find(tl => tl.table_reservation_id === reservation.table_reservation_id);
      const matchingTableDetails = tableDetails.find(td => td.table_id === matchingTableList?.table_id);
      const matchingGuestDetails = guestDetails.find(guest => guest.guest_id === reservation.guest_id);

      return {
        ...reservation,
        guest: {
          guest_fname: matchingGuestDetails?.guest_fname,
          guest_lname: matchingGuestDetails?.guest_lname,
          guest_phone_no: matchingGuestDetails?.guest_phone_no,
        },
        table: {
          table_id: matchingTableDetails?.table_id,
          table_name: matchingTableDetails?.table_name,
          seat_quantity: matchingTableDetails?.seat_quantity,
        }
      };
    });

    // Log combined reservations data
    console.log('Combined reservations data:', combinedReservations);

    // Step 8: Format the response by grouping into time slots
    const timeSlots = ['09:00', '10:00', '11:00', '02:00', '03:00', '04:00', '05:00'];

    const formattedTimeSlots = timeSlots.reduce((acc, slot) => {
        const reservationsInSlot = combinedReservations.filter(reservation => reservation.table_time && reservation.table_time.startsWith(slot));
      
        if (reservationsInSlot.length > 0) {
          acc.push({
            time: slot,
            reservations: reservationsInSlot,
          });
        }
      
        return acc;
      }, []);
      

    // Log final formatted time slots data
    console.log('Formatted time slots data:', formattedTimeSlots);

    // Step 9: Send the final response with grouped reservations
    res.status(200).json(formattedTimeSlots);
  } catch (error) {
    console.error('Error fetching table reservations:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getTableReservations,
};
