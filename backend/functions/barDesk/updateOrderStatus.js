const { supabase } = require('../../supabaseClient');

const updateBarOrderStatus = async (req, res) => {
  const { bar_order_id } = req.params; // Use bar_order_id instead of food_order_id
  const { new_status } = req.body; // The new status should be sent in the request body

  if (!new_status) {
    return res.status(400).json({ error: 'New status is required' });
  }

  try {
    // Update the order status in the BAR_ORDER table
    const { data, error } = await supabase
      .from('BAR_ORDER')
      .update({ b_order_status: new_status }) // Update the b_order_status field
      .eq('bar_order_id', bar_order_id); // Match the bar_order_id

    if (error) {
      console.error('Error updating order status:', error.message);
      return res.status(500).json({ error: error.message });
    }

    res.status(200).json({ message: 'Bar order status updated successfully', data });
  } catch (err) {
    console.error('Error updating order status:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { updateBarOrderStatus };
