import React from 'react';
import 'bulma/css/bulma.min.css';
import './modals_m.css';

const AddConciergeModal = ({ isOpen, toggleModal }) => {
    return (
        <div className={`modal ${isOpen ? 'is-active' : ''}`}>
            <div className="modal-background" onClick={toggleModal}></div>
            <div className="modal-card custom-modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Add New Concierge</p>
                    <button className="delete" aria-label="close" onClick={toggleModal}></button>
                </header>
                <section className="modal-card-body">
                    <div className="columns">
                        {/* First Column - Adjusted to span 8 out of 12 columns */}
                        <div className="column is-16">
                        <div className="columns is-multiline">
                        
                            <div className="column is-6">
                                <div className="field">
                                <label className="label">Concierge Name</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder="Enter concierge name" />
                                    </div>
                                </div>
                            </div>

                            <div className="column is-6">
                                <div className="field">
                                <label className="label">Concierge Supplier</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder="Enter concierge supplier" />
                                    </div>
                                </div>
                            </div>

                            <div className="column is-6">
                                <div className="field">
                                <label className="label">Concierge Supplier Contact Number</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder="Enter concierge contact no." />
                                    </div>
                                </div>
                            </div>

                            <div className="column is-12">
                                <hr style={{ border: '1px solid grey' }} />
                            </div>

                                <div className="column is-6">
                                    <div className="field">
                                        <label className="label">Concierge Description</label>
                                        <div className="control">
                                            <textarea className="textarea" placeholder="Enter room description"></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="column is-6">
                                    <label className="label">Concierge Time (Start - End)</label>
                                        <div className="columns">
                                            <div className="column is-6">
                                                <input className="input" type="time" placeholder="Start Time" />
                                            </div>
                                            <div className="column is-6">
                                                <input className="input" type="time" placeholder="End Time" />
                                            </div>
                                        </div>
                                </div>
                                
                                <div className="column is-6">
                                    <div className="field">
                                        <label className="label">Concierge Final Price</label>
                                        <div className="control">
                                            <input className="input" type="number" placeholder="Enter final price" />
                                        </div>
                                    </div>
                                </div>

                                <div className="column is-6">
                                    <div className="field">
                                        <label className="label">Concierge Duration</label>
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

export default AddConciergeModal;
