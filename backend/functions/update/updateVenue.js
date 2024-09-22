const { supabase } = require('../../supabaseClient');

const updateVenue = async (req, res) => {
    const {  event_venue_id } = req.params; 
    const {
        venue_name,
        venue_description,
        venue_status,
        venue_price,
        venue_final_price,
        event_disc_percentage,
        venue_max_pax
    } = req.body;

    try {
        const { data, error } = await supabase
            .from('EVENT_VENUE')
            .update({
                venue_name,
                venue_description,
                venue_status,
                venue_price,
                venue_final_price,
                event_disc_percentage,
                venue_max_pax
            })
            .eq('event_venue_id', event_venue_id); // Match the event_venue_id to update

        if (error) {
            console.error('Error updating venue:', error.message);
            return res.status(400).json({ error: error.message });
        }

        res.status(200).json({ message: "Venue updated successfully!", data });
    } catch (err) {
        console.error('Update error:', err); 
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { updateVenue };
