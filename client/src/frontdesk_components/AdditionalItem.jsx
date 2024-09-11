import React , { useState } from 'react';
import 'bulma/css/bulma.min.css';
import '../App.css';
import { Link } from 'react-router-dom';
import AddAdditionalItemModal from '../frontdesk_modals/AddAdditionalItemModal';
import EditAdditionalItemModal from '../frontdesk_modals/EditAdditionalItemModal';
import { IoPencilOutline, IoPeopleCircleOutline, IoSearchCircle, IoSparklesOutline, IoCloseSharp, IoAdd } from 'react-icons/io5';


const AdditionalItem = () => {
    
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const toggleAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };
  const toggleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };
    return (
        <section className='section-p1'>
            <header>
                <div style={{backgroundColor:'white', borderRadius:'10px 10px'}}>
                    <div className='column is-multiline is-mobile'  >
                        <h1 className='subtitle'>
                            <strong>Additional Item</strong>
                        </h1>
                        <div className='column is-narrow' style={{padding:'0'}} >
                            <button className='button is-blue' onClick={ toggleAddModal}>
                                <IoAdd style={{ marginRight: '5px' }} /> Add
                            </button>
                        </div>
                    </div>
                    <div className="container section-p1 ">
                        <div className="column is-hidden-tablet-only custom-hide-tablet is-fullwidth" style={{ padding: '0', margin: '0' }}>
                            <div className="field has-addons is-flex is-flex-direction-row is-fullwidth-mobile">
                                <div className="control is-expanded is-fullwidth">
                                    <input className="input is-fullwidth-mobile" type="date" style={{ margin: '0' }} placeholder="Search..."/>
                                </div>
                                <div className="control is-fullwidth">
                                    <button className="button is-blue is-fullwidth-mobile" style={{ height: '100%' }} >
                                        <IoSearchCircle className="is-white" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <h1 className='subtitle'> Filter (Status) </h1>
                        
                        <div className="columns is-multiline is-mobile">
                            <div className="column is-6">
                                <div className="button is-blue box has-text-centered">
                                        <span>
                                            <IoPeopleCircleOutline  size={60} className="is-violet" />
                                        </span>
                                    <p className="is-size-5 has-text-weight-semibold mt-2">Borrowed</p>
                                </div>
                            </div>

                            <div className="column is-6">
                                <div className="button is-dark-blue box has-text-centered">
                                        <span>
                                            <IoSparklesOutline size={60} className="is-violet" />
                                        </span>
                                    <p className="is-size-5 has-text-weight-semibold mt-2">Returned</p>
                                </div>
                            </div>
                        </div>

                    </div>
            </div>
            </header>
            <section className='section-p1'>
                <div style={{backgroundColor:'white', borderRadius:'10px 10px'}}>
                    <div className="table-container">
                        <table className="table is-striped is-hoverable is-fullwidth">
                            <thead >
                            <tr >
                                <th className="has-text-left is-table-blue">Item Number</th>
                                <th className="has-text-left is-table-blue">Room Number</th>
                                <th className="has-text-left is-table-blue">Item Name</th>
                                <th className="has-text-left is-table-blue">Borrowed Date</th>
                                <th className="has-text-left is-table-blue">Returned Date</th>
                                <th className="has-text-left is-table-blue">Status</th>
                                <th className="has-text-center is-table-blue" colSpan="2">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* First Tuple */}
                            <tr className="has-text-left">
                                <td>001</td>
                                <td>101</td>
                                <td>Hair Dryer</td>
                                <td>2024-08-01</td>
                                <td>2024-08-03</td>
                                <td>Returned</td>
                                <td className="has-text-center is-flex is-justify-content-space-between" colSpan="2">
                                    <button className="button is-small is-blue" onClick={toggleEditModal}><IoPencilOutline style={{margin:'0 0.5rem'}} />Edit</button>
                                    <button className="button is-small is-red"><IoCloseSharp style={{margin:'0 0.5rem'}} />Archive</button>
                                </td>
                                
                            </tr>

                            {/* Second Tuple */}
                            <tr className="has-text-left">
                                <td>002</td>
                                <td>102</td>
                                <td>Iron</td>
                                <td>2024-08-02</td>
                                <td>2024-08-04</td>
                                <td>Not Returned</td>
                                <td className="has-text-center is-flex is-justify-content-space-between" colSpan="2">
                                    <button className="button is-small is-blue"><IoPencilOutline style={{margin:'0 0.5rem'}}/>Edit</button>
                                    <button className="button is-small is-red"><IoCloseSharp style={{margin:'0 0.5rem'}} />Archive</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <AddAdditionalItemModal isOpen={isAddModalOpen}  toggleModal={toggleAddModal}/>
            <EditAdditionalItemModal isOpen={isEditModalOpen} toggleModal={toggleEditModal} />
        </section>
    );
};

export default AdditionalItem;
