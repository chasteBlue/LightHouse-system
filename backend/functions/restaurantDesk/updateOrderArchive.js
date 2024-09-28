// backend/functions/restaurantDesk/updateOrderArchive.js
const { supabase } = require('../../supabaseClient');

const updateOrderArchive = async (req, res) => {
  const { orderId } = req.params; // Get order ID from request parameters

  try {
    // Update the status of the order to 'DELETE'
    const { error } = await supabase
      .from('FOOD_ORDER')
      .update({ f_order_status: 'DELETE' }) 
      .eq('food_order_id', orderId);

    if (error) {
      console.error('Error updating order status:', error.message);
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json({ message: `Order ${orderId} archived successfully.` });
  } catch (err) {
    console.error('Error archiving order:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { updateOrderArchive };
