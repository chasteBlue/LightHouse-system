const { supabase } = require('../../supabaseClient');  // Import Supabase client
const bcrypt = require('bcrypt'); 

const updateStaff = async (req, res) => {
    const {
        staff_id, // The ID of the staff to update
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
        staff_password // Optional: Only update if provided
    } = req.body;

    if (!staff_id) {
        return res.status(400).json({ error: "Staff ID is required for update." });
    }

    try {
        // If staff_password is provided, hash it before updating
        let updatedFields = {
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
            staff_status
        };

        if (staff_password) {
            const hashedPassword = await bcrypt.hash(staff_password, 10);
            updatedFields.staff_password = hashedPassword;
        }

        // Update the STAFF table
        const { data, error } = await supabase
            .from('STAFF')
            .update(updatedFields)
            .eq('staff_id', staff_id); // Specify which staff member to update based on the staff_id

        if (error) {
            console.error('Error updating STAFF:', error.message);
            return res.status(400).json({ error: error.message });
        }

        res.status(200).json({ message: "Staff updated successfully!", data });
    } catch (err) {
        console.error('Update error:', err); // Log any other errors
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { updateStaff };
