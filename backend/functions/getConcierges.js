const { supabase } = require('../supabaseClient'); // Import Supabase client

const getConcierges = async (req, res) => {
    try {
        const { data: conciergeData, error } = await supabase
            .from('CONCIERGE_DETAIL')
            .select('*'); // Select all columns

        if (error) {
            console.error('Error retrieving concierge data:', error.message);
            return res.status(400).json({ error: error.message });
        }

        res.status(200).json(conciergeData);
    } catch (err) {
        console.error('Error fetching concierge data:', err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getConcierges };
