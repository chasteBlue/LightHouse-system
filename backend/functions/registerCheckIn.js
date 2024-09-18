const { supabase } = require('../supabaseClient'); // Import Supabase client
const { v4: uuidv4 } = require('uuid'); // Import UUID library

const registerCheckIn = async (req, res) => {
    const {
        check_in_date_time,
        initial_payment,
        payment_status,
        check_in_status,
        staff_id,
        guest_name  // Add guest_name input for CHECK_IN_NAME_LIST
    } = req.body;

    const check_in_id = uuidv4(); // Generate a new unique UUID for check_in_id
    const check_in_list_id = uuidv4(); // Generate a new unique UUID for check_in_list_id

    try {
        // First, insert into the CHECK_IN table
        const { data: checkInData, error: checkInError } = await supabase
            .from('CHECK_IN')
            .insert([
                {
                    check_in_id,
                    check_in_date_time,
                    initial_payment,
                    payment_status,
                    check_in_status,
                    staff_id
                }
            ]);

        if (checkInError) {
            console.error('Error inserting into CHECK_IN:', checkInError.message);
            return res.status(400).json({ error: checkInError.message });
        }

        // After successful check-in, insert into CHECK_IN_NAME_LIST
        const { data: nameListData, error: nameListError } = await supabase
            .from('CHECK_IN_NAME_LIST')
            .insert([
                {
                    check_in_list_id,
                    check_in_id,
                    guest_name
                }
            ]);

        if (nameListError) {
            console.error('Error inserting into CHECK_IN_NAME_LIST:', nameListError.message); // Log error
            return res.status(400).json({ error: nameListError.message }); // Return the error
        }

        res.status(201).json({ message: "Check-in registered successfully and name list updated!", checkInData, nameListData });
    } catch (err) {
        console.error('Registration error:', err); // Log any other errors
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { registerCheckIn };
