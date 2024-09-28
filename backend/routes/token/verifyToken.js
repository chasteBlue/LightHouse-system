const express = require('express');
const jwt = require('jsonwebtoken');
const { supabase } = require('../../supabaseClient'); 

const router = express.Router();

router.get('/verifyToken', async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret'); 
        const { guest_id, staff_id } = decoded;

        if (guest_id) {
            // Check if the guest exists in the database
            const { data: guest, error } = await supabase
                .from('GUEST')
                .select('*')
                .eq('guest_id', guest_id)
                .single();

            if (error || !guest) {
                return res.status(401).json({ error: 'Invalid token. Guest not found.' });
            }

            res.status(200).json({ message: 'Guest token is valid.', userType: 'guest' });
        } else if (staff_id) {
            // Check if the staff exists in the database
            const { data: staff, error } = await supabase
                .from('STAFF')
                .select('*')
                .eq('staff_id', staff_id)
                .single();

            if (error || !staff) {
                return res.status(401).json({ error: 'Invalid token. Staff not found.' });
            }

            res.status(200).json({ message: 'Staff token is valid.', userType: 'staff' });
        } else {
            return res.status(401).json({ error: 'Access denied. Not a recognized user.' });
        }
    } catch (err) {
        console.error('Token verification error:', err);
        res.status(401).json({ error: 'Invalid token.' });
    }
});

module.exports = router;
