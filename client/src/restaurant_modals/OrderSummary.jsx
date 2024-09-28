import React from 'react';
import 'bulma/css/bulma.min.css';
import '../manager_modals/modals_m.css';
import { IoArrowUndo, IoPrintOutline } from 'react-icons/io5';

const OrderSummary = ({ isOpen, toggleModal, order }) => {
  if (!order) return null; // Return null if no order is selected

  const { foodItems = [], guest_fname, guest_lname, room_number, f_order_date, f_notes, STAFF } = order;
  const numberOfItems = foodItems.length;
  const total = foodItems.reduce((sum, item) => sum + item.f_order_subtotal, 0);

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
              {/* First Column for Order Details */}
              <div className="column is-6">
                <div className="field">
                  <label className="label">Order ID</label>
                  <p>{order.food_order_id}</p>
                </div>
                <div className="field">
                  <label className="label">Charged To</label>
                  <p>{`${guest_fname} ${guest_lname}`}</p>
                </div>
                <div className="field">
                  <label className="label">Order Date</label>
                  <p>{new Date(f_order_date).toLocaleDateString()}</p>
                </div>
              </div>

              {/* Second Column for Additional Details */}
              <div className="column is-6">
                <div className="field">
                  <label className="label">Order Status</label>
                  <p>{order.f_order_status}</p>
                </div>
                <div className="field">
                  <label className="label">Room Number</label>
                  <p>{room_number || 'N/A'}</p>
                </div>
                <div className="field">
                  <label className="label">Staff Username</label>
                  <p>{STAFF?.staff_id || 'N/A'} : {STAFF?.staff_username || 'Unknown'}</p>
                </div>
              </div>

              {/* Table Container for Food Items */}
              <div className="column is-12">
                <hr style={{ border: '1px solid grey' }} />
                <div className="container-blue-space">
                  <h1 className="subtitle">
                    <strong>Total Order</strong>
                  </h1>
                  <div className="columns">
                    <div className="column is-8">
                      <div className="table-container">
                        <table className="table is-fullwidth is-striped is-hoverable">
                          <thead>
                            <tr>
                              <th className="has-text-centered">Food Name</th>
                              <th className="has-text-centered">Quantity</th>
                              <th className="has-text-centered">Subtotal</th>
                            </tr>
                          </thead>
                          <tbody>
                            {foodItems.map((item, index) => (
                              <tr key={index}>
                                <td>{item.food_name}</td>
                                <td className="has-text-centered">{item.f_order_qty}</td>
                                <td>₱{item.f_order_subtotal.toFixed(2)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Summary and Notes */}
                    <div className="column is-4">
                      <div style={{ marginBottom: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <p className="title is-6">Number of Items: {numberOfItems}</p>
                          <p className="title is-6">Total: ₱{total.toFixed(2)}</p>
                        </div>
                      </div>

                      <div style={{ marginBottom: '1rem' }}>
                        <label className="label"><strong>Notes:</strong></label>
                        <textarea
                          placeholder="No additional notes."
                          className="textarea"
                          value={f_notes || ''}
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
