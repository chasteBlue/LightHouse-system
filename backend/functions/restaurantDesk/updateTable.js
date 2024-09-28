const { supabase } = require('../../supabaseClient'); // Import Supabase client

const updateTable = async (req, res) => {
    const { table_id } = req.params; // Extract table_id from request parameters
    const {
        table_name,
        table_status,
        seat_quantity
    } = req.body; 


    try {
        // Update the table details in the database
        const { data: updatedTableData, error: tableError } = await supabase
            .from('TABLE')
            .update({
                table_name,
                table_status,
                seat_quantity
            })
            .eq('table_id', table_id); // Use table_id to find the correct row

        // Handle any errors returned by Supabase
        if (tableError) {
            console.error('Error updating TABLE:', tableError.message);
            return res.status(400).json({ error: tableError.message });
        }

        // If everything went well, return the updated data
        res.status(200).json({ message: "Table updated successfully!", updatedTableData });
    } catch (err) {
        // Catch any unexpected errors and return a 500 status
        console.error('Update error:', err); 
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { updateTable };
