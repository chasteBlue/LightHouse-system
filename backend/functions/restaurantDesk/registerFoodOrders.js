const { supabase } = require('../../supabaseClient');

const registerFoodOrder = async (req, res) => {
  const {
    staff_id,
    check_in_id,
    f_payment_method,
    f_order_total,
    f_notes, // Add the new field here
    foodItems 
  } = req.body;

  if (!staff_id || !f_payment_method || !f_order_total || !foodItems.length) {
    return res.status(400).json({ error: "Missing required fields or empty order." });
  }

  try {
    // Set check_in_id to null if the payment method is CASH, CARD, or E_WALLET
    const checkInIdToSave = ['CASH', 'CARD', 'E_WALLET'].includes(f_payment_method) ? null : check_in_id;

    // Insert into FOOD_ORDER table
    const { data: foodOrder, error: foodOrderError } = await supabase
      .from('FOOD_ORDER')
      .insert([{
        staff_id,
        check_in_id: checkInIdToSave, // Use the adjusted check_in_id value
        f_payment_method,
        f_order_status: 'ONGOING',
        f_order_total,
        f_order_date: new Date(),
        f_notes // Include the new field in the database insert
      }])
      .select('food_order_id')
      .single();

    if (foodOrderError) {
      console.error('Error creating food order:', foodOrderError);
      return res.status(500).json({ error: 'Error creating food order.' });
    }

    const { food_order_id } = foodOrder;

    // Insert into FOOD_ORDER_LIST table
    const foodOrderList = foodItems.map(item => ({
      food_id: item.food_id,
      food_order_id,
      f_order_qty: item.quantity,
      f_order_subtotal: item.quantity * item.food_price
    }));

    const { data: foodOrderListData, error: foodOrderListError } = await supabase
      .from('FOOD_ORDER_LIST')
      .insert(foodOrderList);

    if (foodOrderListError) {
      console.error('Error creating food order list:', foodOrderListError);
      return res.status(500).json({ error: 'Error creating food order list.' });
    }

    res.status(201).json({ message: "Food order created successfully!", foodOrder, foodOrderListData });
  } catch (err) {
    console.error('Error registering food order:', err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { registerFoodOrder };
