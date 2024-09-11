import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import '../App.css';
import './components_r.css';
import { IoPencilOutline,  IoSearchCircle,  IoCloseSharp, IoTrashBinOutline, IoReaderOutline } from 'react-icons/io5';
import OrderSummary from '../restaurant_modals/OrderSummary';



const AllOrdersRestaurant = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen); // Toggle modal visibility
    };
      
  
  return (
    <section className='section-p1'>
        <header>
            <div style={{backgroundColor:'white', borderRadius:'10px 10px'}}>
                    <div className='column is-multiline is-mobile'  >
                        <h1 className='subtitle'>
                            <strong>All Orders</strong>
                        </h1>
                        
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
                                    <div className="button is-dark-blue box has-text-centered">
                                            <span>
                                                <IoReaderOutline size={30} className="is-violet" />
                                            </span>
                                        <p className="is-size-5 has-text-weight-semibold mt-2">Completed</p>
                                    </div>
                                </div>

                                <div className="column is-6">
                                    <div className="button is-red box has-text-centered">
                                            <span>
                                                <IoTrashBinOutline size={30} className="is-violet" />
                                            </span>
                                        <p className="is-size-5 has-text-weight-semibold mt-2">Canceled</p>
                                    </div>
                                </div>
                            </div>

                    </div>
            </div>
            </header>
            <section className='section-p1'>
                <div className='container-white-space'>
                    <div className="table-container">
                        <table className="table is-striped is-hoverable is-fullwidth">
                            <thead >
                            <tr >
                                <th className="has-text-left is-table-blue">Bar Order ID</th>
                                <th className="has-text-left is-table-blue">Staff_ID</th>
                                <th className="has-text-left is-table-blue">Guest Name</th>{/* First Name and Last Name */}
                                <th className="has-text-left is-table-blue">Date</th>
                                <th className="has-text-left is-table-blue">Payment Method</th>
                                <th className="has-text-left is-table-blue">Total Cost</th>
                                <th className="has-text-left is-table-blue">Status</th>
                                <th className="has-text-center is-table-blue" colSpan="2">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* First Tuple */}
                            <tr className="has-text-left">
                                <td>001</td>
                                <td>101</td>
                                <td>Lea Raros</td>
                                <td>2024-08-01</td>
                                <td>ROOM</td>
                                <td>2,000</td>
                                <td>Completed</td>
                                <td className="has-text-center is-justify-content-space-between"colSpan="2">
                                    <button className="button is-small is-blue" style={{ margin: '0.5rem' }} onClick={toggleModal}>
                                        <IoPencilOutline style={{ marginRight: '0.5rem' }} />
                                        Details
                                    </button>
                                    <button className="button is-small is-red" style={{ margin: '0.5rem' }}>
                                        <IoCloseSharp style={{ marginRight: '0.5rem' }} />
                                        Archive
                                    </button>
                                </td>

                                
                            </tr>

                            {/* Second Tuple */}
                            <tr className="has-text-left">
                                <td>002</td>
                                <td>101</td>
                                <td>Lea Raros</td>
                                <td>2024-08-01</td>
                                <td>ROOM</td>
                                <td>2,000</td>
                                <td>Canceled</td>
                                <td className="has-text-center is-justify-content-space-between"colSpan="2">
                                    <button className="button is-small is-blue" style={{ margin: '0.5rem' }} onClick={toggleModal}>
                                        <IoPencilOutline style={{ marginRight: '0.5rem' }} />
                                        Details
                                    </button>
                                    <button className="button is-small is-red" style={{ margin: '0.5rem' }}>
                                        <IoCloseSharp style={{ marginRight: '0.5rem' }} />
                                        Archive
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <OrderSummary isOpen={isModalOpen} toggleModal={toggleModal} />
    </section>
  );
};

export default AllOrdersRestaurant ;
