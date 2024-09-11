import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import '../App.css';
import '../manager_components/components_m.css';
import { IoAdd , IoSearchCircle} from 'react-icons/io5';



const TableMainRestaurant = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
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
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
  return (
    <section className='section-p1'>
        <div className="columns" style={{minHeight:"100vh"}}>
            <div className="column is-3">
                <div className="column">
                    <div className='columns is-vcentered tablet-column-layout'>
                        <div className='column'>
                            <h1 className='subtitle'>
                                <strong>Tables</strong>
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="column is-hidden-tablet-only custom-hide-tablet is-fullwidth" style={{ padding: '0', margin: '0' }}>
                    <div className="field has-addons is-flex is-flex-direction-row is-fullwidth-mobile">
                        <div className="control is-expanded is-fullwidth">
                            <input className="input is-fullwidth-mobile" type="text" style={{ margin: '0' }} placeholder="Search..."/>
                        </div>
                        <div className="control is-fullwidth">
                            <button className="button is-blue is-fullwidth-mobile" style={{ height: '100%' }} >
                                <IoSearchCircle className="is-white" />
                            </button>
                        </div>
                    </div>
                </div>

                <div style={{ marginBottom: "5px" }}>
                <div className="staff-space">
                    <div className="columns is-vcentered is-mobile" style={{ paddingLeft: "5px" }}>
                    <div className="column is-flex is-align-items-center">
                        <h3 style={{ marginRight: "8px" }}>Table 1</h3>
                        <div className="status-circle"></div>
                    </div>
                    </div>
                </div>
                </div>


                <div style={{ marginBottom: "5px" }}>
                <div className="staff-space">
                    <div className="columns is-vcentered is-mobile" style={{ paddingLeft: "5px" }}>
                    <div className="column is-flex is-align-items-center">
                        <h3 style={{ marginRight: "8px" }}>Table 2</h3>
                        <div className="status-circle"></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="column" style={{backgroundColor:"white"}}>
                <main className="section-p1">
                    <div className="columns">
                        <h1 className="subtitle">
                            <strong>Tables</strong>
                        </h1>
                    </div>

                    <div>
                        <div className="columns is-vcentered">
                            {/* First Column */}
                            <div className="column">
                                <div className="staff-space">
                                    <h3 className='subtitle'>Table ID : </h3>
                                        <div className="field">
                                            <label className="label">Table Name</label>
                                            <div className="control">
                                                <input className="input" type="text" placeholder="Enter first name" />
                                            </div>
                                        </div>
                                        <div className='columns is-multiline'>
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

                                        </div>      
                                </div> 

                                    <div className="columns">
                                    <div className="column is-12 is-left">
                                        <button className="button is-blue">Save Changes</button>
                                    </div>
                                </div>      
                                </div>
                        </div>
                        {/* Separator Line */}
                        <hr />

                        <div className="columns">
                            <div className="column">
                                <div className="columns">
                                    <h1 className="subtitle">
                                        <strong>Archive Data</strong>
                                    </h1>
                                </div>
                                <div className="columns is-multiline is-mobile">
                                    <div className="column">
                                        <p>To ensure data integrity and maintain a clear historical record, all user accounts that are no longer active shall be archived. Archiving an account involves securely storing all associated data, including user information and transaction history, in a read-only format. Archiving does not delete the account or its data but instead preserves it in its current state, safeguarding the integrity of the information while freeing up active account management resources.</p>
                                    </div>
                                    <div className="column is-12 is-left">
                                        <button className="button is-red">Archive</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Separator Line */}
                        <hr />


                    </div>
                </main>
            </div> 
        </div>
    </section>
  );
};

export default TableMainRestaurant;
