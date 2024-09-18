const { supabase } = require('../supabaseClient');

const getBarDrinks = async (req, res) => {
    try {
        const { data: barDrinks, error } = await supabase
            .from('BAR_DRINK')
            .select('*'); // Select all columns

        if (error) {
            console.error('Error retrieving bar drinks:', error.message);
            return res.status(400).json({ error: error.message });
        }

        res.status(200).json(barDrinks);
    } catch (err) {
        console.error('Error fetching bar drinks:', err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getBarDrinks };
