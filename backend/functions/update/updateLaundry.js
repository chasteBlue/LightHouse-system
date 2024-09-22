const { supabase } = require('../../supabaseClient');

const updateLaundry = async (req, res) => {
    const { laundry_id } = req.params;
    const {
        
        laundry_item,
        laundry_ironing_price,
        laundry_status
    } = req.body;

    try {
        const { data, error } = await supabase
            .from('LAUNDRY_DETAIL')
            .update({
                laundry_item,
                laundry_ironing_price,
                laundry_status
            })
            .eq('laundry_id', laundry_id); // Match the laundry_id to update

        if (error) {
            console.error('Error updating laundry:', error.message);
            return res.status(400).json({ error: error.message });
        }

        res.status(200).json({ message: "Laundry item updated successfully!", data });
    } catch (err) {
        console.error('Update error:', err); 
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { updateLaundry };
