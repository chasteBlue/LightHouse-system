const express = require('express');
const cors = require('cors'); // Import CORS middleware
const guestRoutes = require('./routes/guestRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware to enable CORS
app.use(cors()); // Use CORS middleware

// Middleware to parse JSON
app.use(express.json());

// Guest routes
app.use('/api', guestRoutes); // Routes are mounted under /api

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
console.log("Supabase URL:", process.env.SUPABASE_URL);  // Debug line to check if URL is loaded
const checkInRoutes = require('./routes/checkInRoutes'); // Import the check-in routes
app.use('/api', checkInRoutes); // Routes are mounted under /api
const staffRoutes = require('./routes/staffRoutes'); // Import the staff routes

// Use the staff routes
app.use('/api', staffRoutes); // Routes are mounted under /api
