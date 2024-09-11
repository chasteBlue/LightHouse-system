import React from 'react';
import 'bulma/css/bulma.min.css';
import './components_r.css';
import {IoThumbsUpOutline, IoTrashBinOutline } from 'react-icons/io5';

const IncomingOrderRestaurant = () => {
    const orders = [
        {
          barOrderID: '001',
          staffID: '101',
          guestName: 'Lea Raros',
          date: '2024-08-01',
          paymentMethod: 'ROOM',
          totalCost: '2,000',
          status: 'Completed',
          foodItems: [
            { name: 'Pizza Margherita', quantity: 2 },
            { name: 'Burger', quantity: 1 },
          ],
          notes: 'Extra cheese on pizza',
        },
        {
          barOrderID: '002',
          staffID: '101',
          guestName: 'Lea Raros',
          date: '2024-08-01',
          paymentMethod: 'ROOM',
          totalCost: '2,000',
          status: 'Canceled',
          foodItems: [
            { name: 'Pasta Carbonara', quantity: 3 },
            { name: 'Salad', quantity: 1 },
          ],
          notes: 'No olives in salad',
        },
        {
          barOrderID: '003',
          staffID: '101',
          guestName: 'Lea Raros',
          date: '2024-08-01',
          paymentMethod: 'ROOM',
          totalCost: '2,000',
          status: 'Canceled',
          foodItems: [
            { name: 'Steak', quantity: 1 },
            { name: 'Wine', quantity: 2 },
          ],
          notes: 'Medium rare steak',
        },
      ];
      

  return (
    <section className="section-p1">
      <div className='container-white-space'>
        <h1 className="subtitle">
          <strong>Incoming Orders</strong>
        </h1>

        <div className="columns is-multiline is-mobile is-vcentered">
          {orders.map((order, index) => (
            <div className="column is-4-desktop is-6-tablet is-12-mobile" key={index}>
              <div className="box" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', position: 'relative' }}>
                <div className='card-circle-order' >
                  {index + 1}
                </div>

                <div className='card-content'>
                    <p>
                        <strong>Bar Order ID:</strong> {order.barOrderID}
                    </p>
                    <p>
                        <strong>Staff ID:</strong> {order.staffID}
                    </p>
                    <p>
                        <strong>Guest Name:</strong> {order.guestName}
                    </p>
                    <p>
                        <strong>Date:</strong> {order.date}
                    </p>
                    <p>
                        <strong>Payment Method:</strong> {order.paymentMethod}
                    </p>
                    <p>
                        <strong>Total Cost:</strong> {order.totalCost}
                    </p>

                    {/* Table with Food and Quantity */}
                    <div>
                        <table className="table is-fullwidth is-striped is-hoverable">
                        <thead>
                            <tr>
                            <th className="has-text-centered">Food Item</th>
                            <th className="has-text-centered">Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.foodItems.map((item, index) => (
                            <tr key={index}>
                                <td className="has-text-centered">{item.name}</td>
                                <td className="has-text-centered">{item.quantity}</td>
                            </tr>
                            ))}
                        </tbody>
                        </table>

                        {/* Notes Section */}
                        <div style={{ marginTop: '1rem' }}>
                        <label className="label"><strong>Notes:</strong></label>
                        <textarea
                            value={order.notes}
                            placeholder="Enter any additional notes here..."
                            className="textarea"
                            readOnly
                            style={{ width: '100%', minHeight: '100px' }}
                        />
                        </div>
                    </div>
                </div>


                <div className="card-footer justify-content-between">
                  <button className="button is-medium is-primary card-footer-item" style={{padding: '0.5rem', margin:'0.5rem'}}>
                    <IoThumbsUpOutline style={{ marginRight: '0.5rem' }} />
                    Done
                  </button>
                  <button className="button is-medium is-danger card-footer-item" style={{padding: '0.5rem', margin:'0.5rem'}}>
                    <IoTrashBinOutline style={{ marginRight: '0.5rem' }} />
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncomingOrderRestaurant;
