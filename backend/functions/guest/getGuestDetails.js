// controllers/guestController.js
const { supabase } = require('../../supabaseClient');
const jwt = require('jsonwebtoken');

// Function to get guest details by guest_id
const getGuestDetails = async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret'); 
        const { guest_id } = decoded;

        const { data: guest, error } = await supabase
            .from('GUEST')
            .select('*')
            .eq('guest_id', guest_id)
            .single();

        if (error || !guest) {
            return res.status(404).json({ error: "Guest not found." });
        }

        res.status(200).json(guest);
    } catch (err) {
        console.error('Error fetching guest details:', err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getGuestDetails };
