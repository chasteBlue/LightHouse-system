import React from 'react';
import 'bulma/css/bulma.min.css';
import './modals_m.css';

const AddLaundryModal = ({ isOpen, toggleModal }) => {
   
    return (
        <div className={`modal ${isOpen ? 'is-active' : ''}`}>
            <div className="modal-background" onClick={toggleModal}></div>
            <div className="modal-card custom-modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Add New Laundry</p>
                    <button className="delete" aria-label="close" onClick={toggleModal}></button>
                </header>
                <section className="modal-card-body">
                    <div className="columns">
                        {/* First Column - Adjusted to span 8 out of 12 columns */}
                        <div className="column is-12">
                        <div className="columns is-multiline">
                        
                            <div className="column is-12">
                                <div className="field">
                                <label className="label">Laundry Item Name</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder="Enter laundry item name" />
                                    </div>
                                </div>
                            </div>
                                
                            <div className="column is-12">
                                <div className="field">
                                    <label className="label">Laundry Item Price</label>
                                    <div className="control">
                                        <input className="input" type="number" placeholder="Enter final price" />
                                    </div>
                                </div>
                            </div>
                                
                        </div>
                        </div>

                        {/* Separator Line */}
                        <hr />
                    </div>
                </section>


                <footer className="modal-card-foot is-flex is-justify-content-flex-end is-align-items-center">
                    <button className="button is-blue mr-2">Save</button>
                    <button className="button is-red" onClick={toggleModal}>Cancel</button>
                </footer>

            </div>
        </div>
    );
};

export default AddLaundryModal;
