const { supabase } = require('../../supabaseClient');

// Function to fetch check-in data with guest names
const getCheckInGuests = async () => {
    try {
        const { data, error } = await supabase
            .from('ROOM_RESERVATION')
            .select(`
                check_in_id, 
                guest:guest_id(guest_fname, guest_lname)
            `)
            .neq('reservation_status', 'CANCELLED'); // Exclude cancelled reservations

        if (error) {
            console.error('Error fetching check-in data with guests:', error.message);
            return { error: error.message };
        }

        const checkInWithGuests = data.map(item => ({
            check_in_id: item.check_in_id,
            guest_name: `${item.guest.guest_fname} ${item.guest.guest_lname}` // Concatenate first and last name
        }));

        return { data: checkInWithGuests };
    } catch (err) {
        console.error('Error fetching check-in data:', err);
        return { error: "Internal Server Error" };
    }
};

module.exports = {
    getCheckInGuests
};
