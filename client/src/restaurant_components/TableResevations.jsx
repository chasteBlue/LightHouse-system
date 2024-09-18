import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import '../App.css';
import '../manager_components/components_m.css';
import { IoSearchCircle, IoPeople, IoRestaurant } from 'react-icons/io5';

const TablReservations = () => {
    const [activeAccordion, setActiveAccordion] = useState(null); // State to manage which accordion is open
    const [selectedDate, setSelectedDate] = useState(''); // State to manage the selected date
    const [tableStatuses, setTableStatuses] = useState({}); // State to manage table statuses
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
    const [selectedGuest, setSelectedGuest] = useState(null); // State to manage the selected guest for status change
    const [newStatus, setNewStatus] = useState(''); // State to store the new status before saving

    // Example data for time slots with multiple guests
    const timeSlots = [
        {
            time: '10:00 AM',
            guests: [
                { name: 'John Doe', people: 4, tableName: 'Table A', status: 'Completed' },
                { name: 'Jane Doe', people: 2, tableName: 'Table B', status: 'Pending' }
            ]
        },
        {
            time: '11:00 AM',
            guests: [
                { name: 'Alice Johnson', people: 3, tableName: 'Table C', status: 'Canceled' }
            ]
        },
        {
            time: '12:00 PM',
            guests: [
                { name: 'Michael Brown', people: 5, tableName: 'Table D', status: 'Completed' },
                { name: 'Sarah Connor', people: 3, tableName: 'Table E', status: 'No Show' }
            ]
        },
        {
            time: '1:00 PM',
            guests: [
                { name: 'David Wilson', people: 6, tableName: 'Table F', status: 'Pending' }
            ]
        },
        {
            time: '2:00 PM',
            guests: [
                { name: 'Paul Garcia', people: 8, tableName: 'Table G', status: 'Completed' },
                { name: 'Sophia Lee', people: 2, tableName: 'Table H', status: 'Canceled' }
            ]
        },
    ];

    
    const tables = [
        { id: 1, chairs: 4, name: 'Table A' },
        { id: 2, chairs: 4, name: 'Table B' },
        { id: 3, chairs: 4, name: 'Table C' },
        { id: 4, chairs: 6, name: 'Table D' },
        { id: 5, chairs: 8, name: 'Table E' },
        { id: 6, chairs: 6, name: 'Table F' },
        { id: 7, chairs: 4, name: 'Table G' },
        { id: 8, chairs: 4, name: 'Table H' },
        { id: 9, chairs: 4, name: 'Table I' },
    ];

    const handleAccordionClick = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index); // Toggle accordion state

        if (activeAccordion !== index) {
            // Update table statuses based on the selected time slot
            const newStatuses = {};
            timeSlots[index].guests.forEach((guest) => {
                newStatuses[guest.tableName] = guest.status;
            });
            setTableStatuses(newStatuses);
        } else {
            setTableStatuses({}); // Reset table statuses when accordion is closed
        }
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value); // Update the selected date state
    };

    const getTableColor = (status) => {
        switch (status) {
            case 'Completed':
                return 'has-background-success-light';
            case 'Pending':
                return 'has-background-warning-light';
            case 'Canceled':
                return 'has-background-danger-light';
            case 'No Show':
                return 'has-background-grey-light';
            default:
                return 'has-background-light';
        }
    };

    const getChairClasses = (chairs) => {
        switch (chairs) {
            case 4:
                return ['top-left-chair', 'top-right-chair', 'bottom-left-chair', 'bottom-right-chair'];
            case 6:
                return ['top-left-chair', 'top-middle-chair', 'top-right-chair', 'bottom-left-chair', 'bottom-middle-chair', 'bottom-right-chair'];
            case 8:
                return ['top-left-chair', 'top-center-left-chair', 'top-center-right-chair', 'top-right-chair', 'bottom-left-chair', 'bottom-center-left-chair', 'bottom-center-right-chair', 'bottom-right-chair'];
            default:
                return [];
        }
    };

    const openModal = (guest) => {
        setSelectedGuest(guest);
        setNewStatus(guest.status); // Set the initial status to the current status
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedGuest(null);
        setNewStatus('');
    };

    const handleStatusSelect = (status) => {
        setNewStatus(status); // Set the new status
    };

    const saveStatusChange = () => {
        if (selectedGuest) {
            // Update the status of the selected guest
            selectedGuest.status = newStatus;
            setTableStatuses((prevStatuses) => ({
                ...prevStatuses,
                [selectedGuest.tableName]: newStatus
            }));
        }
        closeModal();
    };

    return (
        <section className='section-p1'>
            <div className="columns" style={{ minHeight: "100vh" }}>
                <div className="column is-3">
                    <div className="column">
                        <div className='columns is-vcentered tablet-column-layout'>
                            <div className='column'>
                                <h1 className='subtitle'>
                                    <strong>Table Reservations</strong>
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="column is-hidden-tablet-only custom-hide-tablet is-fullwidth" style={{ padding: '0', margin: '0' }}>
                        <div className="field has-addons is-flex is-flex-direction-row is-fullwidth-mobile">
                            <div className="control is-expanded is-fullwidth">
                                <input className="input is-fullwidth-mobile" type="text" style={{ margin: '0' }} placeholder="Search..." />
                            </div>
                            <div className="control is-fullwidth">
                                <button className="button is-blue is-fullwidth-mobile" style={{ height: '100%' }}>
                                    <IoSearchCircle className="is-white" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Date Input for Selecting Date */}
                    <div className="field mt-4">
                        <label className="label">Select Date</label>
                        <div className="control">
                            <input
                                type="date"
                                className="input"
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </div>
                    </div>

                    {/* Display Time Slots if Date is Selected */}
                    {selectedDate && (
                        <>
                            <div>
                                <h3 className="mt-4">Time Slots for {selectedDate}</h3>
                            </div>

                            {/* Accordion for Time Slots */}
                            <div className="container mt-2">
                                {timeSlots.map((slot, index) => (
                                    <div key={index} className="box" style={{ padding: "1rem", margin: "0.5rem" }}>
                                        {/* Time Slot as Accordion Header */}
                                        <div
                                            className="accordion-header"
                                            onClick={() => handleAccordionClick(index)}
                                            style={{ padding: '2px', fontWeight: 'bold', cursor: 'pointer' }}
                                        >
                                            {slot.time}
                                        </div>

                                        {/* Accordion Content for Multiple Guests */}
                                        {activeAccordion === index && (
                                            <div className="accordion-content mt-3">
                                                {slot.guests.map((guest, guestIndex) => (
                                                    <div key={guestIndex} className="box is-flex is-justify-content-space-between is-align-items-center">
                                                        <div>
                                                            <p><IoPeople /> {guest.name} - {guest.people} people</p>
                                                            <p><IoRestaurant /> Table: {guest.tableName}</p>
                                                        </div>
                                                        <div>
                                                            <button
                                                                className={`button is-small ${guest.status === 'Completed' ? 'is-success' : guest.status === 'Canceled' ? 'is-danger' : guest.status === 'Pending' ? 'is-warning' : 'is-dark'}`}
                                                                onClick={() => openModal(guest)}
                                                            >
                                                                {guest.status}
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Table Visualization */}
                <div className="column" style={{ backgroundColor: "white" }}>
                    <main className="section-p1">
                        <div className='event-padding-style event-color-table' style={{backgroundColor:"#007"}}>
                            <p className='subtitle has-text-white'> Restaurant Tables (3rd Floor - Open Area)</p>
                            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                                <div className="columns is-multiline section-p1">
                                    {tables.map((table, index) => {
                                        const chairClasses = getChairClasses(table.chairs);
                                        const tableStatus = tableStatuses[table.name] || 'Available';

                                        return (
                                            <div className="column is-one-third" key={table.id}>
                                                <p className="title is-6 has-text-centered"></p>
                                                <div className={`table-container ${getTableColor(tableStatus)}`}>
                                                    <div className="table-circle">
                                                        <div className="column has-text-centered is-circle">
                                                            <div style={{ padding: "0.5rem", backgroundColor: "white", borderRadius: "1rem", boxShadow: "3px 3px black" }}>
                                                                Table {table.id}
                                                                <p>({table.chairs} Chairs)</p>
                                                                <p>{tableStatus}</p>
                                                            </div>
                                                        </div>
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
                    </main>
                </div>
            </div>

            {/* Modal for Changing Status */}
            {isModalOpen && (
                <div className={`modal ${isModalOpen ? 'is-active' : ''}`}>
                    <div className="modal-background" onClick={closeModal}></div>
                    <div className="modal-content">
                        <div className="box">
                            <h3 className="title is-4">Change Status for {selectedGuest?.name}</h3>
                            <div className="buttons">
                                <button className={`button ${newStatus === 'Completed' ? 'is-success' : ''}`} onClick={() => handleStatusSelect('Completed')}>Completed</button>
                                <button className={`button ${newStatus === 'Pending' ? 'is-warning' : ''}`} onClick={() => handleStatusSelect('Pending')}>Pending</button>
                                <button className={`button ${newStatus === 'Canceled' ? 'is-danger' : ''}`} onClick={() => handleStatusSelect('Canceled')}>Canceled</button>
                                <button className={`button ${newStatus === 'No Show' ? 'is-dark' : ''}`} onClick={() => handleStatusSelect('No Show')}>No Show</button>
                            </div>
                            <div className="buttons mt-4 is-right">
                                <button className="button is-blue" onClick={saveStatusChange}>Save Changes</button>
                                <button className="button is-inverted-blue" onClick={closeModal}>Cancel</button>
                            </div>
                        </div>
                    </div>
                    <button className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
                </div>
            )}
        </section>
    );
};

export default TablReservations;
