const { supabase } = require('../supabaseClient');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Optional for generating JWT tokens

const loginGuest = async (req, res) => {
    const { guest_email, guest_password } = req.body;

    if (!guest_email || !guest_password) {
        return res.status(400).json({ error: "Email and password are required." });
    }

    try {
        // Retrieve guest record from database using email
        const { data: guest, error } = await supabase
            .from('GUEST')
            .select('*')
            .eq('guest_email', guest_email)
            .single(); // We expect a single record

        if (error || !guest) {
            return res.status(400).json({ error: "Invalid email or password." });
        }

        // Compare provided password with stored hashed password
        const isPasswordValid = await bcrypt.compare(guest_password, guest.guest_password);

        if (!isPasswordValid) {
            return res.status(400).json({ error: "Invalid email or password." });
        }

        // Optional: Generate a JWT token for session management
        const token = jwt.sign({ guest_id: guest.guest_id, guest_email: guest.guest_email }, 'your_jwt_secret', {
            expiresIn: '1h', // Token expiry time
        });

        // Return success message with token
        res.status(200).json({ message: "Login successful!", token });
    } catch (err) {
        console.error('Error logging in guest:', err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { loginGuest };
