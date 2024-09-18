const { supabase } = require('../supabaseClient');

const getBarOrders = async (req, res) => {
    try {
        const { data: barOrders, error } = await supabase
            .from('BAR_ORDER')
            .select('*'); // Select all columns

        if (error) {
            console.error('Error retrieving bar orders:', error.message);
            return res.status(400).json({ error: error.message });
        }

        res.status(200).json(barOrders);
    } catch (err) {
        console.error('Error fetching bar orders:', err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getBarOrders };
