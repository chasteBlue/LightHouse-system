import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './pages.css';
import '../App.css';
import banner from '../images/guest_home/1.png';

function Restaurant_Second() {
    const [selectedTable, setSelectedTable] = useState(null);

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

                <div className="container event-bg-style" style={{ margin: '2% 0' }}>
                    <div className='columns is-vcentered'>
                        <div style={{padding:'2% 0', margin:'1% 0 1% 1%', backgroundColor:'black', width:'60%'}}>
                            <p className='subtitle' style={{color:'white'}}>Restaurant (3rd Floor - Inside)</p>
                            <div style={{padding:'30%', margin:'2%', backgroundColor:'green'}}>
                            <p className='subtitle' style={{color:'white'}}>Restaurant Tables (3rd Floor - Inside)</p>
                           
                            </div>
                            <div style={{ padding:'5% 0', justifyContent:'space-between', display:"flex", flexDirection:'row'}}>
                                <div style={{padding:'2%',width:'60%', backgroundColor:'violet'}}>
                                    <p className='subtitle' style={{color:'white'}}>Restaurant Reception Desk</p>
                            
                                </div>
                                <div style={{padding:'2%',width:'20%', backgroundColor:'violet'}}>
                                    <p className='subtitle' style={{color:'white'}}>Entrance</p>
                            
                                </div>
                            </div>

                        </div>
                        <div style={{ padding: '2%', backgroundColor: 'blue' }}>
                            <p className='subtitle' style={{color:'white'}}> Restaurant Tables (3rd Floor - Open Area)</p>
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
                        <button className="button is-blue search-reservation" type="submit">
                          SELECT FOR BOOKING DATE
                        </button>
                      </div>
                    
                </div>
            </div>
        </section>
    );
}

export default Restaurant_Second;
