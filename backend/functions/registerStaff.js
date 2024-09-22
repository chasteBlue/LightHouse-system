const { supabase } = require('../supabaseClient'); // Import Supabase client
const { v4: uuidv4 } = require('uuid'); 
const bcrypt = require('bcrypt'); 

const registerStaff = async (req, res) => {
    const {
        staff_fname,
        staff_lname,
        staff_username,
        staff_email,
        staff_phone_no,
        staff_gender,
        shift_start_time,
        shift_end_time,
        staff_hire_date,
        staff_photo,
        staff_acc_role,
        staff_status,
        staff_password 
    } = req.body;

    try {

        const staff_id = uuidv4().toString();
        console.log('Generated staff_id:', staff_id);
        // Hash the password before storing
        const hashedPassword = await bcrypt.hash(staff_password, 10);

        // Insert the staff data into the STAFF table
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
                    shift_start_time,
                    shift_end_time,
                    staff_hire_date,
                    staff_photo,
                    staff_acc_role,
                    staff_status,
                    staff_password: hashedPassword 
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