const { supabase } = require('../supabaseClient'); // Import Supabase client
const { v4: uuidv4 } = require('uuid'); // Import UUID library

const registerFoodOrder = async (req, res) => {
    const {
        staff_id,
        check_in_id,
        order_status,
        order_total,
        order_date,
        payment_status,
        order_items // This will be an array of items to be added to FOOD_ORDER_LIST
    } = req.body;

    const food_order_id = uuidv4(); // Generate a new unique UUID for food_order_id

    try {
        // Insert into the FOOD_ORDER table
        const { data: orderData, error: orderError } = await supabase
            .from('FOOD_ORDER')
            .insert([
                {
                    food_order_id,
                    staff_id,
                    check_in_id,
                    order_status,
                    order_total,
                    order_date,
                    payment_status
                }
            ]);

        if (orderError) {
            console.error('Error inserting into FOOD_ORDER:', orderError.message);
            return res.status(400).json({ error: orderError.message });
        }

        // If the order was inserted successfully, proceed to insert items into FOOD_ORDER_LIST
        const orderListData = [];
        for (const item of order_items) {
            const food_order_list_id = uuidv4(); // Generate a new unique UUID for food_order_list_id

            const { food_id, order_qty, order_subtotal } = item;

            const { data: orderListItemData, error: orderListError } = await supabase
                .from('FOOD_ORDER_LIST')
                .insert([
                    {
                        food_order_list_id,
                        food_id,
                        food_order_id, // Use the food_order_id generated from the FOOD_ORDER insert
                        order_qty,
                        order_subtotal
                    }
                ]);

            if (orderListError) {
                console.error('Error inserting into FOOD_ORDER_LIST:', orderListError.message);
                return res.status(400).json({ error: orderListError.message });
            }

            orderListData.push(orderListItemData);
        }

        res.status(201).json({
            message: "Food order and order items registered successfully!",
            orderData,
            orderListData
        });
    } catch (err) {
        console.error('Registration error:', err); // Log any other errors
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { registerFoodOrder };
