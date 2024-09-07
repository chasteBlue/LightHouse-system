// backend/index.js
const express = require('express');
const guestRoutes = require('./routes/guestRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Guest routes
app.use('/api', guestRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
