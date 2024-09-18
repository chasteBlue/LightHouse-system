const { supabase } = require('../supabaseClient');
const { v4: uuidv4 } = require('uuid'); // Import UUID library

const registerBarOrder = async (req, res) => {
    const {
        staff_id,
        check_in_id,
        payment_method,
        payment_status,
        order_status,
        order_total,
        order_date,
        order_items // This will be an array of items for BAR_ORDER_LIST
    } = req.body;

    const bar_order_id = uuidv4(); // Generate a new unique UUID for bar_order_id

    try {
        // Insert into the BAR_ORDER table
        const { data: orderData, error: orderError } = await supabase
            .from('BAR_ORDER')
            .insert([
                {
                    bar_order_id,
                    staff_id,
                    check_in_id,
                    payment_method,
                    payment_status,
                    order_status,
                    order_total,
                    order_date
                }
            ]);

        if (orderError) {
            console.error('Error inserting into BAR_ORDER:', orderError.message);
            return res.status(400).json({ error: orderError.message });
        }

        // Insert related items into BAR_ORDER_LIST
        const orderListData = [];
        for (const item of order_items) {
            const bar_order_list_id = uuidv4(); // Generate a new unique UUID for bar_order_list_id

            const { drink_id, order_qty, order_subtotal } = item;

            const { data: orderListItemData, error: orderListError } = await supabase
                .from('BAR_ORDER_LIST')
                .insert([
                    {
                        bar_order_list_id,
                        drink_id,
                        bar_order_id, // Use the bar_order_id from the BAR_ORDER insert
                        order_qty,
                        order_subtotal
                    }
                ]);

            if (orderListError) {
                console.error('Error inserting into BAR_ORDER_LIST:', orderListError.message);
                return res.status(400).json({ error: orderListError.message });
            }

            orderListData.push(orderListItemData);
        }

        res.status(201).json({
            message: "Bar order and order items registered successfully!",
            orderData,
            orderListData
        });
    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { registerBarOrder };
