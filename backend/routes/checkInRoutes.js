const express = require('express');
const { registerCheckIn } = require('../functions/registerCheckIn');
const { registerAdditionalItem } = require('../functions/frontDesk/resgisterAdditionalItem');
const { getcheckInGuest} = require ('../functions/frontDesk/getcheckInGuest')
const router = express.Router();

// POST route to register a new additional item
router.post('/registerAdditionalItem', registerAdditionalItem);
// Route for check-in registration
router.post('/registerCheckIn', registerCheckIn);

router.get('/getcheckInGuests', async (req, res) => {
    const { data, error } = await getcheckInGuests();

    if (error) {
        return res.status(400).json({ error });
    }

    res.status(200).json(data);
});
module.exports = router;
