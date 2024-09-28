const { supabase } = require('../../supabaseClient');

// Function to get the list of food items with the number of orders
const getCountFoodOrderList = async (req, res) => {
  try {
    console.log('Fetching food items with order count...');

    // Fetch all food items including the food_photo
    const { data: foodItems, error: foodItemError } = await supabase
      .from('FOOD_ITEM')
      .select('food_id, food_name, food_photo'); // Include food_photo here

    if (foodItemError) {
      console.error('Error retrieving food items:', foodItemError.message);
      return res.status(400).json({ error: foodItemError.message });
    }

    // For each food item, count the number of orders in the FOOD_ORDER_LIST table
    const foodOrderList = await Promise.all(
      foodItems.map(async (foodItem) => {
        const { count, error } = await supabase
          .from('FOOD_ORDER_LIST')
          .select('food_id', { count: 'exact', head: true })
          .eq('food_id', foodItem.food_id);

        if (error) {
          console.error(`Error retrieving order count for food_id ${foodItem.food_id}:`, error.message);
          return null;
        }

        return {
          food_id: foodItem.food_id,
          food_name: foodItem.food_name,
          food_photo: foodItem.food_photo, // Add the photo here
          order_count: count,
        };
      })
    );

    // Filter out any null results
    const resultList = foodOrderList
      .filter(item => item !== null) // Remove null items
      .sort((a, b) => b.order_count - a.order_count) // Sort by order count (largest to smallest)
      .slice(0, 10); // Get top 10 items

    // Log the result to see the data structure
    console.log('Top 10 Food Order List:', resultList);

    // Send the response with the food order list and counts
    res.status(200).json(resultList);
  } catch (err) {
    console.error('Error fetching food order list:', err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getCountFoodOrderList };
