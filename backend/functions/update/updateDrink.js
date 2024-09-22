const { supabase } = require('../../supabaseClient');

const updateDrink = async (req, res) => {
    const { drink_id } = req.params; 
    const {
        drink_name,
        drink_price,
        drink_status,
        drink_description,
        drink_category,
        drink_photo,
        drink_final_price,
        drink_disc_percentage
    } = req.body;

    try {
        const { data: updatedDrinkData, error: drinkError } = await supabase
            .from('BAR_DRINK')
            .update({
                drink_name,
                drink_price,
                drink_status,
                drink_description,
                drink_category,
                drink_photo,
                drink_final_price,
                drink_disc_percentage
            })
            .eq('drink_id', drink_id); 

        if (drinkError) { 
            console.error('Error updating drink:', drinkError.message);
            return res.status(400).json({ error: drinkError.message });
        }

        res.status(200).json({ message: "Drink updated successfully!", updatedDrinkData }); // Corrected typo here
    } catch (err) {
        console.error('Update error:', err); 
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { updateDrink };
