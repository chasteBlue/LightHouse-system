const { supabase } = require('../../supabaseClient'); 

const updateConcierge = async (req, res) => {
    const { concierge_id } = req.params;
    const {
        concierge_type,
        concierge_description,
        concierge_supplier,
        concierge_phone_no,
        concierge_duration,
        concierge_start_time,
        concierge_end_time,
        concierge_type_price,
        concierge_status
    } = req.body;

    // Check if concierge_id is provided
    if (!concierge_id) {
        return res.status(400).json({ error: "Concierge ID is required for updating." });
    }

    try {
        // Updating the concierge details in the database
        const { data: updatedConciergeData, error: conciergeError } = await supabase
            .from('CONCIERGE_DETAIL')
            .update({
                concierge_type,
                concierge_description,
                concierge_supplier,
                concierge_phone_no,
                concierge_duration,
                concierge_start_time,
                concierge_end_time,
                concierge_type_price,
                concierge_status
            })
            .eq('concierge_id', concierge_id); // Using concierge_id to find the correct row

        // Handle any errors returned by Supabase
        if (conciergeError) {
            console.error('Error updating CONCIERGE_DETAIL:', conciergeError.message);
            return res.status(400).json({ error: conciergeError.message });
        }

        // If everything went well, return the updated data
        res.status(200).json({ message: "Concierge service updated successfully!", updatedConciergeData });
    } catch (err) {
        // Catch any unexpected errors and return a 500 status
        console.error('Update error:', err); 
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { updateConcierge };
