const { supabase } = require('../supabaseClient'); // Import Supabase client

const registerStaff = async (req, res) => {
    const {
        staff_id,
        staff_fname,
        staff_lname,
        staff_username,
        staff_email,
        staff_phone_no,
        staff_gender,
        staff_shift_time,
        staff_hire_date,
        staff_photo,
        staff_acc_role,
        staff_status
    } = req.body;

    try {
        const { data, error } = await supabase
            .from('STAFF')
            .insert([
                {
                    staff_id,
                    staff_fname,
                    staff_lname,
                    staff_username,
                    staff_email,
                    staff_phone_no,
                    staff_gender,
                    staff_shift_time,
                    staff_hire_date,
                    staff_photo,
                    staff_acc_role,
                    staff_status
                }
            ]);

        if (error) {
            return res.status(400).json({ error: error.message });
        }

        res.status(201).json({ message: "Staff registered successfully!", data });
    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { registerStaff };
