import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './pages.css';
import '../App.css';
import banner from '../images/guest_home/1.png';
import AddTableReservation from '../guest_modals/AddTableReservation';

function Restaurant_Second() {
    const [selectedTable, setSelectedTable] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const tables = [
        { id: 1, chairs: 4 },
        { id: 2, chairs: 4 },
        { id: 3, chairs: 4 },
        { id: 4, chairs: 6 },
        { id: 5, chairs: 8 },
        { id: 6, chairs: 6 },
        { id: 7, chairs: 4 },
        { id: 8, chairs: 4 },
        { id: 9, chairs: 4 },
    ];

    const getChairClasses = (chairs) => {
        switch (chairs) {
            case 4:
                return ['top-left-chair', 'top-right-chair', 'bottom-left-chair', 'bottom-right-chair'];
            case 6:
                return ['top-left-chair', 'top-middle-chair', 'top-right-chair', 'bottom-left-chair', 'bottom-middle-chair',  'bottom-right-chair'];
            case 8:
                return ['top-left-chair', 'top-center-left-chair', 'top-center-right-chair', 'top-right-chair', 'bottom-left-chair', 'bottom-center-left-chair', 'bottom-center-right-chair', 'bottom-right-chair'];
            default:
                return [];
        }
    };

    return (
        <section className='section-m1'>
            <div>
                <div className="hero-body" style={{ backgroundImage: `url(${banner})`, margin: '2%' }}>
                    <div className="container has-text-centered" style={{ padding: '5%' }}>
                        <h1 className="title has-text-white">Restaurant Table Reservation</h1>
                    </div>
                </div>

                <div className="container event-bg-style" style={{marginBottom:'3%'}}>
                <p className='subtitle has-text-white'>LightHouse Point Hotel (Captain Galley's) - 3rd Floor</p>
                    <div className='columns is-vcentered event-padding-style'>
                        <div className='event-inside-style'>
                        <p className="subtitle has-text-white event-padding-style" >Restaurant (Inside)</p>
                            <div className='event-inside-inside-style'>
                            <p className='subtitle has-text-white'>Restaurant Tables (Inside)</p>
                            </div>
                            <div className='event-justify-style is-flex is-justify-content-space-between'>
                                <div className='event-padding-style event-color-table'>
                                    <p className='subtitle has-text-white'>Restaurant Reception Desk</p>
                            
                                </div>
                                <div className='event-padding-style event-color-table'>
                                    <p className='subtitle has-text-white'>Entrance</p>
                            
                                </div>
                            </div>
                        </div>
                        <div className='event-padding-style event-color-table' >
                            <p className='subtitle has-text-white'> Restaurant Tables (3rd Floor - Open Area)</p>
                            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                                <div className="columns is-multiline section-p1">
                                    {tables.map((table, index) => {
                                        const chairClasses = getChairClasses(table.chairs);

                                        return (
                                            <div className="column is-one-third" key={table.id}>
                                                <p className="title is-6 has-text-centered"></p>
                                                <div className="table-container">
                                                    <div className="table-circle">
                                                        <button
                                                            className={`button is-blue is-above-button ${selectedTable === index ? 'is-selected' : ''}`}
                                                            onClick={() => setSelectedTable(index)}
                                                        >
                                                            <div className="column has-text-centered is-circle"> 
                                                                Table {table.id} 
                                                                <p>({table.chairs} Chairs)</p>
                                                                <p>Available</p>
                                                            </div>
                                                        </button>
                                                    </div>
                                                    <div className="chairs-wrapper">
                                                        {chairClasses.map((chairClass, i) => (
                                                            <div key={i} className={`chair ${chairClass}`} />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buttons is-centered">
                        <button className="button is-blue search-reservation" type="submit" onClick={toggleModal}>
                          PROCEED TO RESERVATION
                        </button>
                      </div>
                    
                </div>
            </div>
            <AddTableReservation isOpen={isModalOpen} toggleModal={toggleModal} />

        </section>
    );
}

export default Restaurant_Second;
