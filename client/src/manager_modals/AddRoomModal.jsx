import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './modals_m.css';

const AddRoomModal = ({ isOpen, toggleModal }) => {
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
                    <p className="modal-card-title">Add New Room</p>
                    <button className="delete" aria-label="close" onClick={toggleModal}></button>
                </header>
                <section className="modal-card-body">
                    <div className="columns">
                        {/* First Column - Adjusted to span 8 out of 12 columns */}
                        <div className="column is-16">
                        <div className="columns is-multiline">
                            {/* Room Number */}
                            <div className="column is-6">
                            <div className="field">
                                <label className="label">Room Number</label>
                                <div className="control">
                                <input className="input" type="text" placeholder="Enter room number" />
                                </div>
                            </div>
                            </div>

                            {/* Room Type */}
                            <div className="column is-6">
                            <div className="field">
                                <label className="label">Room Type</label>
                                <div className="control">
                                <input className="input" type="text" placeholder="Enter room type" />
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
                                        height: "128px",
                                    }}
                                    />
                                </figure>
                                </div>
                            )}
                            <div className="field">
                                <label className="label">Photo Main</label>
                                <div className="control">
                                <input className="input" type="file" accept="image/*" onChange={handlePhotoChange} />
                                </div>
                            </div>
                            </div>

                            {/* Photo URL 1 */}
                            <div className="column is-6">
                            <div className="field">
                                <label className="label">Photo URL 1</label>
                                <div className="control">
                                <input className="input" type="text" placeholder="Enter URL" />
                                </div>
                            </div>
                            </div>

                            {/* Photo URL 2 */}
                            <div className="column is-6">
                            <div className="field">
                                <label className="label">Photo URL 2</label>
                                <div className="control">
                                <input className="input" type="text" placeholder="Enter URL" />
                                </div>
                            </div>
                            </div>

                            {/* Photo URL 3 */}
                            <div className="column is-6">
                            <div className="field">
                                <label className="label">Photo URL 3</label>
                                <div className="control">
                                <input className="input" type="text" placeholder="Enter URL" />
                                </div>
                            </div>
                            </div>

                            <div className="column is-12">
                                <hr style={{ border: '1px solid grey' }} />
                            </div>


                            

                            {/* Room Description */}
                            <div className="column is-6">
                            <div className="field">
                                <label className="label">Room Description</label>
                                <div className="control">
                                <textarea className="textarea" placeholder="Enter room description"></textarea>
                                </div>
                            </div>
                            </div>

                            {/* Room Breakfast Availability */}
                            <div className="column is-6">
                            <div className="field">
                                <label className="label">Room Breakfast Availability</label>
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

                            {/* Room PAX Maximum */}
                            <div className="column is-6">
                            <div className="field">
                                <label className="label">Room PAX Maximum</label>
                                <div className="control">
                                <input className="input" type="number" min="1" />
                                </div>
                            </div>
                            </div>

                            {/* Room PAX Minimum */}
                            <div className="column is-6">
                            <div className="field">
                                <label className="label">Room PAX Minimum</label>
                                <div className="control">
                                <input className="input" type="number" min="1" />
                                </div>
                            </div>
                            </div>

                            {/* Room Rate */}
                            <div className="column is-6">
                            <div className="field">
                                <label className="label">Room Rate</label>
                                <div className="control">
                                <input className="input" type="text" placeholder="Enter room rate" />
                                </div>
                            </div>
                            </div>

                            {/* Room Discount */}
                            <div className="column is-6">
                            <div className="field">
                                <label className="label">Room Discount</label>
                                <div className="control">
                                <input className="input" type="text" placeholder="Enter discount" />
                                </div>
                            </div>
                            </div>

                            {/* Room Final Rate */}
                            <div className="column is-6">
                            <div className="field">
                                <label className="label">Room Final Rate</label>
                                <div className="control">
                                <input className="input" type="number" />
                                </div>
                            </div>
                            </div>

                            {/* Status */}
                            <div className="column is-6">
                            <div className="field">
                                <label className="label">Status</label>
                                <div className="control">
                                <div className="select is-fullwidth">
                                    <select>
                                    <option>ACTIVE</option>
                                    <option>INACTIVE</option>
                                    </select>
                                </div>
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

export default AddRoomModal;
