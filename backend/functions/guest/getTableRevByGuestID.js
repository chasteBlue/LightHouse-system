const { supabase } = require('../../supabaseClient'); // Import Supabase client

// API to get table reservations by guest ID
const getTableRevByGuestID = async (req, res) => {
    const { guest_id } = req.query;

    // Check if guest_id is provided
    if (!guest_id) {
        console.log('Guest ID not provided');
        return res.status(400).json({ message: 'Guest ID is required.' });
    }

    try {
        // Step 1: Fetch table reservations by guest_id
        console.log(`Fetching table reservations for guest_id: ${guest_id}`);
        const { data: reservations, error: reservationsError } = await supabase
            .from('TABLE_RESERVATION')
            .select('table_reservation_id, reservation_status, cancel_reservation_request, table_time, table_guest_quantity,table_notes, table_reservation_date')
            .eq('guest_id', guest_id);

        if (reservationsError) {
            console.error('Error fetching table reservations:', reservationsError);
            return res.status(500).json({ error: 'Failed to fetch table reservations' });
        }

        // Log the fetched reservations
        console.log('Fetched reservations:', reservations);

        // If no reservations found, return a message
        if (!reservations.length) {
            console.log('No table reservations found for this guest.');
            return res.status(404).json({ message: 'No table reservations found for this guest.' });
        }

        // Step 2: Fetch table_ids from TABLE_LIST by matching table_reservation_id
        const reservationIds = reservations.map(reservation => reservation.table_reservation_id);
        console.log('Fetching table IDs for reservation IDs:', reservationIds);

        const { data: tableList, error: tableListError } = await supabase
            .from('TABLE_LIST')
            .select('table_reservation_id, table_id')
            .in('table_reservation_id', reservationIds);

        if (tableListError) {
            console.error('Error fetching table IDs:', tableListError);
            return res.status(500).json({ error: 'Failed to fetch table IDs' });
        }

        // Log the fetched table IDs
        console.log('Fetched table IDs:', tableList);

        // Step 3: Fetch table details (table_name and seat_quantity) for each table_id
        const tableIds = tableList.map(item => item.table_id);
        console.log('Fetching table details for table IDs:', tableIds);

        const { data: tables, error: tablesError } = await supabase
            .from('TABLE')
            .select('table_id, table_name, seat_quantity')
            .in('table_id', tableIds);

        if (tablesError) {
            console.error('Error fetching table details:', tablesError);
            return res.status(500).json({ error: 'Failed to fetch table details' });
        }

        // Log the fetched table details
        console.log('Fetched table details:', tables);

        // Step 4: Map table details to the reservations
        const reservationsWithTables = reservations.map(reservation => {
            const tableItem = tableList.find(item => item.table_reservation_id === reservation.table_reservation_id);

            // Safeguard: Check if tableItem and table exist before accessing table properties
            if (!tableItem) {
                console.error(`No table found for reservation ID: ${reservation.table_reservation_id}`);
                return { ...reservation, table_name: 'Unknown', seat_quantity: 'Unknown' };
            }

            const table = tables.find(t => t.table_id === tableItem.table_id);
            if (!table) {
                console.error(`No table details found for table ID: ${tableItem.table_id}`);
                return { ...reservation, table_name: 'Unknown', seat_quantity: 'Unknown' };
            }

            return {
                ...reservation,
                table_name: table.table_name || 'Unknown',
                seat_quantity: table.seat_quantity || 'Unknown',
            };
        });

        // Log the final reservations with table details
        console.log('Reservations with table details:', reservationsWithTables);

        // Step 5: Return reservations with table details in response as JSON
        return res.status(200).json(reservationsWithTables);
    } catch (error) {
        console.error('Error fetching table reservations:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { getTableRevByGuestID };
