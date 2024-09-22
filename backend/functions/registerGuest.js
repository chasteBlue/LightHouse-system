const { v4: uuidv4 } = require('uuid');
const { supabase } = require('../supabaseClient');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing

// Correct path to the Firebase Admin SDK JSON file
const serviceAccount = require('../config/lighthousehotel-firebase-adminsdk-vywmp-7e7396bb73.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Middleware to verify Firebase token
const verifyFirebaseToken = async (req, res, next) => {
    const idToken = req.headers.authorization;

    if (!idToken) {
        return res.status(401).json({ error: 'Unauthorized, token required.' });
    }

    try {
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        req.user = decodedToken; 
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token.' });
    }
};

// Register Guest Route with token verification
const registerGuest = async (req, res) => {
    const {
        guest_fname,
        guest_lname,
        guest_birthdate,
        guest_address,
        guest_email,
        guest_country,
        guest_phone_no,
        guest_gender,
        guest_photo,
        guest_password // Adding password to the request body
    } = req.body;

    const guest_id = uuidv4(); // Generate unique guest ID

    if (!guest_fname || !guest_email || !guest_phone_no || !guest_password) {
        return res.status(400).json({ error: "Required fields are missing." });
    }

    try {
        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(guest_password, 10); // 10 is the salt rounds

        // Insert guest data into the GUEST table
        const { data, error } = await supabase
            .from('GUEST')
            .insert([{
                guest_id,
                guest_fname,
                guest_lname,
                guest_birthdate,
                guest_address,
                guest_email,
                guest_country,
                guest_phone_no,
                guest_gender,
                guest_photo,
                guest_password: hashedPassword 
            }]);

        if (error) {
            return res.status(400).json({ error: error.message });
        }

        res.status(201).json({ message: "Guest registered successfully!", data });
    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { registerGuest, verifyFirebaseToken };