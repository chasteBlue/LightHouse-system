const { supabase } = require('../supabaseClient'); 


const getStaffs = async (req, res) => {
    try {
       
        const { data: staff, error } = await supabase
            .from('STAFF')
            .select('*'); 

        if (error) {
            console.error('Error retrieving staff:', error.message);
            return res.status(400).json({ error: error.message });
        }

        res.status(200).json(staff);
    } catch (err) {
        console.error('Error fetching staff:', err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getStaffs };
