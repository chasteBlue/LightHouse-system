import React from 'react';
import 'bulma/css/bulma.min.css';
import './modals_m.css';

const AddFoodPackageModal = ({ isOpen, toggleModal }) => {
    return (
        <div className={`modal ${isOpen ? 'is-active' : ''}`}>
            <div className="modal-background" onClick={toggleModal}></div>
            <div className="modal-card custom-modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Add New Food Package</p>
                    <button className="delete" aria-label="close" onClick={toggleModal}></button>
                </header>
                <section className="modal-card-body">
                    <div className="columns">
                        {/* First Column - Adjusted to span 8 out of 12 columns */}
                        <div className="column is-16">
                        <div className="columns is-multiline">
                        
                            <div className="column is-6">
                                <div className="field">
                                <label className="label">Food Package Name</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder="Enter first name" />
                                    </div>
                                </div>  
                            </div>

                            <div className="column is-6">
                                <div className="field">
                                        <label className="label">Event Food Main Limit</label>
                                        <div className="control">
                                            <input className="input" type="number" placeholder="Enter limit" min='1' />
                                        </div>
                                    </div>
                                </div>

                                <div className="column is-6">
                                    <div className="field">
                                        <label className="label">Event Food Pasta Limit</label>
                                        <div className="control">
                                            <input className="input" type="number" placeholder="Enter limit" min="1" />
                                        </div>
                                    </div>
                                </div>

                                <div className="column is-6">
                                    <div className="field">
                                        <label className="label">Event Rice Limit</label>
                                        <div className="control">
                                            <input className="input" type="number" placeholder="Enter limit" min="1" />
                                        </div>
                                    </div>
                                </div>

                                <div className="column is-6">
                                    <div className="field">
                                        <label className="label">Event Dessert Limit</label>
                                        <div className="control">
                                            <input className="input" type="number" placeholder="Enter limit" min="1" />
                                        </div>
                                    </div>
                                </div>

                                <div className="column is-6">
                                    <div className="field">
                                        <label className="label">Event Drinks Limit</label>
                                        <div className="control">
                                            <input className="input" type="number" placeholder="Enter limit" min="1" />
                                        </div>
                                    </div>
                                </div>

                                <div className="column is-6">
                                    <div className="field">
                                        <label className="label">Food Package Price</label>
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

export default AddFoodPackageModal;
