import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './modals_m.css';
import ErrorMsg from '../messages/errorMsg';
import SuccessMsg from '../messages/successMsg';

const EditRoomPhotos = ({ isOpen, toggleModal, roomId }) => {
    const [photoDetails, setPhotoDetails] = useState([{ room_slot: '', room_photo_url: '' }]);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    // Handle the removal of a photo field
    const removePhotoField = (index) => {
        const newPhotoDetails = [...photoDetails];
        newPhotoDetails.splice(index, 1);
        setPhotoDetails(newPhotoDetails);
    };

    // Handle input change for photo details
    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const newPhotoDetails = [...photoDetails];
        newPhotoDetails[index][name] = value;
        setPhotoDetails(newPhotoDetails);
    };

    // Handle individual update of a photo
    const handleUpdatePhoto = (index) => {
        // Perform your update logic here
        setSuccess(`Photo ${index + 1} updated successfully!`);
        setTimeout(() => setSuccess(''), 3000);
    };

    // Handle individual archive of a photo
    const handleArchivePhoto = (index) => {
        // Perform your archive logic here
        setSuccess(`Photo ${index + 1} archived successfully!`);
        setTimeout(() => setSuccess(''), 3000);
    };

    // Handle modal close
    const handleClose = () => {
        setPhotoDetails([{ room_slot: '', room_photo_url: '' }]);
        setError('');
        setSuccess('');
        toggleModal();
    };

    // Handle form submission for all changes
    const handleSubmit = () => {
        // Perform your save all changes logic here
        setSuccess('All changes saved successfully!');
        setTimeout(() => {
            setSuccess('');
            handleClose(); // Close the modal after a short delay
        }, 2000);
    };

    return (
        <div className={`modal ${isOpen ? 'is-active' : ''}`}>
            <div className="modal-background" onClick={handleClose}></div>
            <div className="modal-card custom-modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Edit Room Photos</p>
                    <button className="delete" aria-label="close" onClick={handleClose}></button>
                </header>
                <section className="modal-card-body">
                    {error && <ErrorMsg message={error} />}
                    {success && <SuccessMsg message={success} />}
                    {photoDetails.map((photo, index) => (
                        <div className="columns" key={index}>
                            <div className="column is-5">
                                <div className="field">
                                    <label className="label">Room Slot</label>
                                    <div className="control">
                                        <div className="select is-fullwidth">
                                            <select
                                                name="room_slot"
                                                value={photo.room_slot}
                                                onChange={(e) => handleInputChange(index, e)}
                                            >
                                                <option value="">Select Room Slot</option>
                                                <option value="main">Main</option>
                                                <option value="extra">Extra</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-5">
                                <div className="field">
                                    <label className="label">Room Photo URL</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            name="room_photo_url"
                                            placeholder="Enter room photo URL"
                                            value={photo.room_photo_url}
                                            onChange={(e) => handleInputChange(index, e)}
                                        />
                                    </div>
                                    {photo.room_photo_url && (
                                        <figure className="image is-128x128 mt-2">
                                            <img src={photo.room_photo_url} alt="Room" />
                                        </figure>
                                    )}
                                </div>
                            </div>
                            <div className="column is-2 is-flex is-align-items-center">
                                <button
                                    className="button is-info is-small mr-1"
                                    onClick={() => handleUpdatePhoto(index)}
                                >
                                    Update
                                </button>
                                <button
                                    className="button is-warning is-small"
                                    onClick={() => handleArchivePhoto(index)}
                                >
                                    Archive
                                </button>
                            </div>
                        </div>
                    ))}
                </section>

                <footer className="modal-card-foot is-flex is-justify-content-flex-end is-align-items-center">
                    <button className="button is-blue mr-2" onClick={handleSubmit}>
                        Save All Changes
                    </button>
                    <button className="button is-red" onClick={handleClose}>
                        Cancel
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default EditRoomPhotos;
