const { supabase } = require('../../supabaseClient');

const updateFoodPackage = async (req, res) => {
    const { event_fd_pckg_id } = req.params; 
    const {
        event_fd_pckg_name,
        event_fd_pckg_final_price,
        event_fd_main_dish_lmt,
        event_fd_pasta_lmt,
        event_fd_rice_lmt,
        event_fd_dessert_lmt,
        event_fd_drinks_lmt,
        event_fd_status
    } = req.body;

    try {
        const { data, error } = await supabase
            .from('EVENT_FOOD_PACKAGE')
            .update({
                event_fd_pckg_name,
                event_fd_pckg_final_price,
                event_fd_main_dish_lmt,
                event_fd_pasta_lmt,
                event_fd_rice_lmt,
                event_fd_dessert_lmt,
                event_fd_drinks_lmt,
                event_fd_status
            })
            .eq('event_fd_pckg_id', event_fd_pckg_id); // Match the event_fd_pckg_id to update

        if (error) {
            console.error('Error updating food package:', error.message);
            return res.status(400).json({ error: error.message });
        }

        res.status(200).json({ message: "Food package updated successfully!", data });
    } catch (err) {
        console.error('Update error:', err); 
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { updateFoodPackage };
