import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import './pages.css';
import '../App.css';
import bar from '../images/guest_home/restaurant.jpg';
import AddTableReservation from '../guest_modals/AddTableReservation';
import Breadcrumbs from '../layouts/Breadcrumbs';
import axios from 'axios';

function Restaurant_Second() {
  const [selectedTable, setSelectedTable] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tables, setTables] = useState([]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/getTable');
        setTables(response.data);
      } catch (error) {
        console.error('Error fetching tables:', error);
      }
    };

    fetchTables();
  }, []);

  const getChairClasses = (seat_quantity) => {
    switch (seat_quantity) {
      case 4:
        return ['top-left-chair', 'top-right-chair', 'bottom-left-chair', 'bottom-right-chair'];
      case 6:
        return ['top-left-chair', 'top-middle-chair', 'top-right-chair', 'bottom-left-chair', 'bottom-middle-chair', 'bottom-right-chair'];
      case 8:
        return [
          'top-left-chair', 'top-center-left-chair', 'top-center-right-chair', 'top-right-chair',
          'bottom-left-chair', 'bottom-center-left-chair', 'bottom-center-right-chair', 'bottom-right-chair'
        ];
      default:
        return [];
    }
  };

  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Restaurant Date Reservation', link: '/restaurant_filtering' },
    { label: 'Restaurant Booking' }
  ];

  return (
    <section className='section-m1'>
      <div>
        {/* Hero Section */}
        <div className="hero-body" style={{ backgroundImage: `url(${bar})`, margin: '2%' }}>
          <div className="container has-text-centered" style={{ padding: '5%' }}>
            <h1 className="title has-text-white">Restaurant Table Reservation</h1>
          </div>
        </div>

        {/* Breadcrumb Section */}
        <div>
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Table Reservation Section */}
        <div className="container event-bg-style" style={{ marginBottom: '3%' }}>
          <p className='subtitle has-text-white'>LightHouse Point Hotel (Captain Galley's) - 3rd Floor</p>
          <div className='columns is-vcentered is-multiline event-padding-style'>

            <div className='event-padding-style event-color-table column is-full-mobile is-half-tablet is-half-desktop'>
              <p className='subtitle has-text-white'> Restaurant Tables (3rd Floor - Open Area)</p>
              <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div className="columns is-multiline section-p1">
                  {tables.map((table) => {
                    const chairClasses = getChairClasses(table.seat_quantity);

                    return (
                      <div className="column is-full-mobile is-one-third-tablet is-one-quarter-desktop" key={table.table_id}>
                        <div className="table-container">
                          <div className="table-circle">
                            <button
                              className={`button is-blue is-above-button ${selectedTable === table.table_id ? 'is-selected' : ''}`}
                              onClick={() => setSelectedTable(table.table_id)}
                              style={{ fontSize: '0.8rem', padding: '10px' }} // Smaller font and padding for smaller screens
                            >
                              <div className="column has-text-centered is-circle">
                                <p className="is-5"><strong>{table.table_name}</strong></p>
                                <p>({table.seat_quantity} Seats)</p>
                                <p>Status: {table.table_status === 'AVAILABLE' ? 'Available' : 'Reserved'}</p>
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

          {/* Reservation Button */}
          <div className="buttons is-centered">
            <button className="button is-blue search-reservation" type="submit" onClick={toggleModal} disabled={!selectedTable}>
              PROCEED TO RESERVATION
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Table Reservation */}
      <AddTableReservation isOpen={isModalOpen} toggleModal={toggleModal} selectedTable={selectedTable} />

      {/* Custom CSS for Responsive Design */}
      <style jsx>{`
        /* Smaller font sizes for mobile */
        @media (max-width: 768px) {
          .table-circle .button {
            font-size: 0.7rem;
            padding: 8px;
          }
          .table-container {
            transform: scale(0.9); /* Scale down the table container */
          }
        }

        /* Further scaling for very small screens */
        @media (max-width: 480px) {
          .table-container {
            transform: scale(0.8); /* Scale down the table container even more */
          }
          .table-circle .button {
            font-size: 0.6rem; /* Reduce button font size */
            padding: 5px; /* Reduce padding */
          }
        }
      `}</style>

    </section>
  );
}

export default Restaurant_Second;
