import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './components_r.css';
import { Link } from 'react-router-dom';
import {  TextField } from '@mui/material';


const ProceedRestaurant = () => {
  const initialFoodItems = [
    { id: 1, name: 'Pizza Margherita', price: 8.0, image: 'https://via.placeholder.com/150', quantity: 1 },
    { id: 2, name: 'Burger', price: 5.5, image: 'https://via.placeholder.com/150', quantity: 1 },
    { id: 3, name: 'Pasta Carbonara', price: 7.25, image: 'https://via.placeholder.com/150', quantity: 1 },
  ];
  
  const [foodOrders] = useState(initialFoodItems);

  const total = foodOrders.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const numberOfItems = foodOrders.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <section className="section-p1">
      <div className='container-white-space'>
        <h1 className="subtitle">
          <strong>Print Order</strong>
        </h1>

        <div className="columns">
          <div className="column is-6">
            <div className="field">
              <label className="label">Charged To</label>
              <div className="control">
                <input className="input" type="text" placeholder="Charged to" />
              </div>
            </div>

            <div className="field">
              <label className="label">Payment Method</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select>
                    <option>Select payment method</option>
                    <option>Cash</option>
                    <option>Room</option>
                    <option>Card</option>
                    <option>E-wallet</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Right Container: Room Number, Guest Name */}
          <div className="column is-6">
            <div className="field">
              <label className="label">Room Number</label>
              <div className="control">
                <input className="input" type="text" placeholder="Room number" />
              </div>
            </div>

            <div className="field">
              <label className="label">Guest Name</label>
              <div className="control">
                <input className="input" type="text" placeholder="Guest name" />
              </div>
            </div>
          </div>
        </div>

        <div className='container-blue-space'>
        <h1 className="subtitle">
          <strong>Total Order</strong>
        </h1>
        
        <div className='columns'>
          <div className='column is-8'>
            <div className="table-container">
              <table className="table is-fullwidth is-striped is-hoverable">
                <thead>
                  <tr>
                    <th className="has-text-centered">Image</th>
                    <th className="has-text-centered">Food Name</th>
                    <th className="has-text-centered">Quantity</th>
                    <th className="has-text-centered">Subtotal</th>
                 
                  </tr>
                </thead>

                <tbody>
                  {foodOrders.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <figure className="image is-64x64">
                          <img src={item.image} alt={item.name} />
                        </figure>
                      </td>
                      <td>{item.name}</td>
                      <td style={{ verticalAlign: 'middle', textAlign: 'center' }}>
                       
                      <TextField type="number"  value={item.quantity}
                            InputProps={{
                                readOnly: true,
                                style: { textAlign: 'center', width: '60px' }}} />
                       
                      </td>
                      <td>${(item.price * item.quantity).toFixed(2)}</td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Link to="/restaurant_order">
                <button className="button is-blue"> Back
                </button>
                </Link>
          </div>

            <div className='column is-4'>
                <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p className='title is-6'>Number of Items: {numberOfItems}</p>
                    <p className='title is-6'>Total: ${total.toFixed(2)}</p>
                </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                    <textarea
                    placeholder="Enter your notes here..."
                    className='textarea'
                    style={{ width: '100%', minHeight: '100px' }}
                    />
                </div>
                <Link to="/restaurant_incoming_orders/proceed_order">
                <button className="button is-dark-blue is-fullwidth"> Print and Confirm Order
                </button>
                </Link>
            </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ProceedRestaurant;
