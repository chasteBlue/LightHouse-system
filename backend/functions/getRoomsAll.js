const { supabase } = require('../supabaseClient'); 

const getRoomsAll = async (req, res) => {
    try {
        const { data: rooms, error } = await supabase
            .from('ROOM')
            .select('*'); 

        if (error) {
            console.error('Error retrieving rooms:', error.message);
            return res.status(400).json({ error: error.message });
        }
        
        res.status(200).json(rooms);
    } catch (err) {
        console.error('Error fetching rooms:', err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}; 

module.exports = { getRoomsAll };