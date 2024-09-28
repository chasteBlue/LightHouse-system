const { supabase } = require('../../supabaseClient');

const updateOrderStatus = async (req, res) => {
  const { food_order_id } = req.params;
  const { new_status } = req.body; // The new status should be sent in the request body

  if (!new_status) {
    return res.status(400).json({ error: 'New status is required' });
  }

  try {
    // Update the order status in the database
    const { data, error } = await supabase
      .from('FOOD_ORDER')
      .update({ f_order_status: new_status })
      .eq('food_order_id', food_order_id);

    if (error) {
      console.error('Error updating order status:', error.message);
      return res.status(500).json({ error: error.message });
    }

    res.status(200).json({ message: 'Order status updated successfully', data });
  } catch (err) {
    console.error('Error updating order status:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { updateOrderStatus };
