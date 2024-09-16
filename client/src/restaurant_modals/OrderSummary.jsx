import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import '../manager_modals/modals_m.css';
import {  TextField } from '@mui/material';
import { IoArrowUndo, IoPrintOutline } from 'react-icons/io5';


const OrderSummary = ({ isOpen, toggleModal }) => {
  const [foodOrders] = useState([
    { id: 1, name: 'Pizza Margherita', price: 8.0, image: 'https://via.placeholder.com/150', quantity: 1 },
    { id: 2, name: 'Burger', price: 5.5, image: 'https://via.placeholder.com/150', quantity: 1 },
    { id: 3, name: 'Pasta Carbonara', price: 7.25, image: 'https://via.placeholder.com/150', quantity: 1 },
  ]);
  const [numberOfItems] = useState(foodOrders.length);
  const [total] = useState(foodOrders.reduce((sum, item) => sum + item.price * item.quantity, 0));
  return (
    <section className="section-p1">
      {/* Modal for Order Summary */}
      <div className={`modal ${isOpen ? 'is-active' : ''}`}>
        <div className="modal-background" onClick={toggleModal}></div>
        <div className="modal-card custom-modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Order Summary</p>
            <button className="delete" aria-label="close" onClick={toggleModal}></button>
          </header>
          <section className="modal-card-body">
            <div className="columns is-multiline">
              {/* Two Columns for Inputs */}
              <div className="column is-6">
                <div className="field">
                  <div className="control">
                  <label className="label">Order ID</label>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <label className="label">Charged To</label>
                  </div>
                </div>
              </div>

              <div className="column is-6">
                <div className="field">
                  <div className="control">
                    <label className="label">Order Status</label>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                  <label className="label">Room Number</label>
                  </div>
                </div>
              </div>

              {/* Table Container */}
              <div className="column is-12">
                <hr style={{ border: '1px solid grey' }} />
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
                                  <TextField
                                    type="number"
                                    value={item.quantity}
                                    InputProps={{
                                      readOnly: true,
                                      style: { textAlign: 'center', width: '60px' }
                                    }}
                                  />
                                </td>
                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
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
                          readOnly
                          style={{ width: '100%', minHeight: '100px' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot is-flex is-justify-content-flex-end is-align-items-center">
            <button className="button is-blue mr-2" onClick={toggleModal}>
              <IoArrowUndo style={{ marginRight: '0.5rem' }} />
              Back
            </button>
            <button className="button is-primary">
              <IoPrintOutline style={{ marginRight: '0.5rem' }} />
              Print
            </button>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;

