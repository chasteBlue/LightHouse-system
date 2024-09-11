import React from 'react';
import 'bulma/css/bulma.min.css';


const AddAdditionalItemModal = ({ isOpen, toggleModal }) => {
    return (
        <div className={`modal ${isOpen ? 'is-active' : ''}`}>
            <div className="modal-background" onClick={toggleModal}></div>
            <div className="modal-card custom-modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Add Additional Item</p>
                    <button className="delete" aria-label="close" onClick={toggleModal}></button>
                </header>
                <section className="modal-card-body">
                    <div className="columns">

                        <div className="column is-12">
                            <div className="columns is-multiline">
                                    <div className="column is-6">
                                        <div className="field">
                                            <label className="label">Room Number</label>
                                            <div className="control">
                                                <input className="input" type="text" placeholder="Enter first name" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="column is-6">
                                        <div className="field">
                                            <label className="label">Item Name</label>
                                            <div className="control">
                                                <input className="input" type="text" placeholder="Enter last name" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="column is-6">
                                        <div className="field">
                                            <label className="label">Borrowed Date and Time</label>
                                            <div className="control">
                                                <input className="input" type="datetime-local"  placeholder="Select date and time" />
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
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

export default AddAdditionalItemModal;
