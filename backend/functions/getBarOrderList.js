const { supabase } = require('../supabaseClient');

const getBarOrderList = async (req, res) => {
    try {
        const { data: barOrderList, error } = await supabase
            .from('BAR_ORDER_LIST')
            .select('*'); // Select all columns

        if (error) {
            console.error('Error retrieving bar order list:', error.message);
            return res.status(400).json({ error: error.message });
        }

        res.status(200).json(barOrderList);
    } catch (err) {
        console.error('Error fetching bar order list:', err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getBarOrderList };
