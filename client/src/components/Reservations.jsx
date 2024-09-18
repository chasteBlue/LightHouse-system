import React ,{ useState } from 'react';
import 'bulma/css/bulma.min.css';
import './pages.css';
import '../App.css';
import Breadcrumbs from '../layouts/Breadcrumbs';
import ReservationsAccordion from './ReservationsAccordion';
import ReservationsRoom from './ReservationsRoom';
import ReservationsTable from './ReservationsTable';
import ReservationsEvent from './ReservationsEvent';

const Reservations = () => {
    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: 'Reservations' },
    ];

    // State to manage which reservation detail is active
    const [activeSection, setActiveSection] = useState(null);

    // Function to render the right side details based on the active section
    // Function to render the right side details based on the active section
    const renderActiveSection = () => {
        switch (activeSection) {
            case 'room':
                return <ReservationsRoom />;
            case 'table':
                return <ReservationsTable />;
            case 'event':
                return <ReservationsEvent />; // Correct this part
            default:
                return <p>Select a reservation type to view the details.</p>;
        }
    };


    return (
        <section className="section-m1">
            <div className="contact-hero-image">
                <div className="text-content-title">
                    <h1 className="title">Reservations</h1>
                    <h3 className="subtitle">Manage your reservations.</h3>
                </div>
            </div>

            <div>
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            <div className='m-2'>

            <div className="columns">
                {/* Sidebar Accordion */}
                <div className="column is-one-quarter">
                    <ReservationsAccordion
                        style={{color:"#0077B7"}}
                        title="Room Reservation"
                        onClick={() => setActiveSection('room')}
                    />
                    <ReservationsAccordion
                        title="Table Reservation"
                        onClick={() => setActiveSection('table')}
                    />
                    <ReservationsAccordion
                        title="Event Reservation"
                        onClick={() => setActiveSection('event')}
                    />
                </div>

                {/* Details or other content based on the active section */}
                <div className="column" >
                    <div className="box" style={{backgroundColor:"#0077B7"}}>
                        {renderActiveSection()}
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Reservations;