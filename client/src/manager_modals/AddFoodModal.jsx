import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './modals_m.css';

const AddFoodModal = ({ isOpen, toggleModal }) => {
    const [guestPhoto, setGuestPhoto] = useState(null);

    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setGuestPhoto(reader.result);
        };
        reader.readAsDataURL(file);
        }
    };
    return (
        <div className={`modal ${isOpen ? 'is-active' : ''}`}>
            <div className="modal-background" onClick={toggleModal}></div>
            <div className="modal-card custom-modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Add New Food</p>
                    <button className="delete" aria-label="close" onClick={toggleModal}></button>
                </header>
                <section className="modal-card-body">
                    <div className="columns">
                        {/* First Column - Adjusted to span 8 out of 12 columns */}
                        <div className="column is-16">
                        <div className="columns is-multiline">
                        
                            <div className="column is-6">
                                <div className="field">
                                <label className="label">Food Name</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder="Enter first name" />
                                    </div>
                                </div>
                            </div>

                     
                            <div className="column is-6">
                                <div className="field">
                                <label className="label">Food Category</label>
                                    <div className="control">
                                            <div className="select is-fullwidth">
                                                <select>
                                                    <option>AVAILABLE</option>
                                                     <option>NOT AVAILABLE</option>
                                                </select>
                                            </div>
                                         </div>
                                    </div>
                            </div>

                            <div className="column is-6">
                                <div className="field">
                                <label className="label">Event Category</label>
                                    <div className="control">
                                            <div className="select is-fullwidth">
                                                <select>
                                                    <option>AVAILABLE</option>
                                                     <option>NOT AVAILABLE</option>
                                                </select>
                                            </div>
                                         </div>
                                    </div>
                            </div>

                            {/* Guest Photo */}
                            <div className="column is-6">
                                {guestPhoto && (
                                    <div className="field">
                                       
                                        <figure className="image is-128x128">
                                        <img 
                                            src={guestPhoto} 
                                            alt="Guest Preview"
                                            style={{
                                            width: "128px",
                                            height: "128px"
                                            }}
                                        />
                                        </figure>
                                        </div>
                                    )}
                                    <div className='field'>
                                        <label className="label">Food Photo</label>
                                        <div className="control">
                                            <input className="input" type="file" accept="image/*" onChange={handlePhotoChange} />
                                        </div>
                                </div>
                            </div>

                            <div className="column is-12">
                                <hr style={{ border: '1px solid grey' }} />
                            </div>

                                <div className="column is-6">
                                    <div className="field">
                                        <label className="label">Food Description</label>
                                        <div className="control">
                                            <textarea className="textarea" placeholder="Enter room description"></textarea>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="column is-6">
                                    <div className="field">
                                        <label className="label">Food Final Price</label>
                                        <div className="control">
                                            <input className="input" type="number" placeholder="Enter final price" />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="column is-6">
                                    <div className="field">
                                        <label className="label">Food Price</label>
                                        <div className="control">
                                            <input className="input" type="text" placeholder="Enter price" />
                                        </div>
                                    </div>
                                </div>

                                <div className="column is-6">
                                    <div className="field">
                                    <label className="label">Food Discount Percentage</label>
                                        <div className="control">
                                            <input className="input"  type="number"  step="0.01"   min="0"  max="100" placeholder="Enter discount percentage (e.g., 20 for 20%)" />
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

export default AddFoodModal;
