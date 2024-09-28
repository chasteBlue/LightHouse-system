const { supabase } = require('../../supabaseClient'); // Import Supabase client

const getTable = async (req, res) => {
    try {
        const { data: tableData, error } = await supabase
            .from('TABLE')
            .select('*'); // Select all columns

        if (error) {
            console.error('Error retrieving table data:', error.message);
            return res.status(400).json({ error: error.message });
        }

        res.status(200).json(tableData);
    } catch (err) {
        console.error('Error fetching table data:', err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getTable };
