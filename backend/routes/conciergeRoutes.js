const express = require('express');
const { registerConcierge } = require('../functions/registerConcierge'); // Import the registerConcierge function
const { getConcierges } = require('../functions/getConcierges'); // Import the getConcierge function
const { updateConcierge } = require ('../functions/update/updateConcierge')
const router = express.Router();


router.post('/registerConcierge', registerConcierge);


router.get('/getConcierge', getConcierges);

// PUT request to update a food item
router.put('/updateConcierge/:concierge_id', updateConcierge);

module.exports = router;
