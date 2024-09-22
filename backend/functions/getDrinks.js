const { supabase } = require('../supabaseClient'); 
const getDrinks = async (req, res) => {
    try {

        const { data: drinks, error } = await supabase
            .from('BAR_DRINK')
            .select('*'); 

        if (error) {
            console.error('Error retrieving drinks:', error.message);
            return res.status(400).json({ error: error.message });
        }

        res.status(200).json(drinks);
    } catch (err) {
        console.error('Error fetching drinks:', err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getDrinks };
