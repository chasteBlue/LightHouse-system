require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Import CORS middleware
const guestRoutes = require('./routes/guestRoutes');
const checkInRoutes = require('./routes/checkInRoutes'); // Import check-in routes
const staffRoutes = require('./routes/staffRoutes'); // Import staff routes
const roomRoutes = require('./routes/roomRoutes'); // Import the room routes
const roomReservationRoutes = require('./routes/roomReservationRoutes');
const foodRoutes = require('./routes/foodRoutes'); // Import food routes
const barRoutes = require('./routes/barRoutes'); // Import the bar routes

const app = express();
const port = process.env.PORT || 3001;

// Middleware to enable CORS
app.use(cors({
    origin: 'http://localhost:3000', // Your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    credentials: true // If using credentials (e.g., cookies)
}));

// Middleware to parse JSON
app.use(express.json());

// Guest routes
app.use('/api', guestRoutes); // Routes are mounted under /api

app.use('/api', checkInRoutes); // Routes are mounted under /api

// Use the staff routes
app.use('/api', staffRoutes); // Routes are mounted under /api

app.use('/api', roomRoutes); // Routes are mounted under /api

app.use('/api', roomReservationRoutes); // Routes are mounted under /api
app.use('/api', foodRoutes); // Routes are mounted under /api
app.use('/api', barRoutes); // Mount the bar routes under /api


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
console.log("Supabase URL:", process.env.SUPABASE_URL);  // Debug line to check if URL is loaded