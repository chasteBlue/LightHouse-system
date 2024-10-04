import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';

const localizer = momentLocalizer(moment);

const RoomReservationCalendar = () => {
  const [events, setEvents] = useState([]);

  // Function to fetch room reservations
  const fetchRoomReservations = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/getRoomReservationsAll');
      const reservations = response.data.map(reservation => ({
        id: reservation.room_reservation_id,
        title: reservation.room 
          ? `Room Reserved - Room ${reservation.room.room_number} (${reservation.guest.guest_fname} ${reservation.guest.guest_lname})`
          : 'Room Reservation',  // Handle null room gracefully
        start: new Date(reservation.room_check_in_date),
        end: new Date(reservation.room_check_out_date),
        status: reservation.reservation_status
      }));
      setEvents(reservations);
    } catch (error) {
      console.error('Error fetching room reservations:', error);
    }
  };

  useEffect(() => {
    fetchRoomReservations(); // Fetch reservations when the component is mounted
  }, []);

  // Function to apply custom event styling based on reservation status
  const eventStyleGetter = (event) => {
    let backgroundColor = '#007bff'; // Default blue for confirmed

    switch (event.status) {
      case 'CONFIRMED':
        backgroundColor = '#007bff'; // Blue for confirmed
        break;
      case 'CANCELED':
        backgroundColor = '#6c757d'; // Grey for canceled
        break;
      case 'COMPLETED':
        backgroundColor = '#17a2b8'; // Light blue for completed
        break;
      case 'NO SHOW':
        backgroundColor = '#6c757d'; // Dark grey for no show
        break;
      default:
        backgroundColor = '#007bff'; // Default blue
        break;
    }

    return {
      style: {
        backgroundColor,
        color: 'white',
        borderRadius: '5px',
        padding: '5px',
      },
    };
  };

  return (
    <div style={{ height: '500px', margin: '20px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="week"    
        style={{ height: 500 }}
        eventPropGetter={eventStyleGetter}  // Apply custom styles to events
      />
    </div>
  );
};

export default RoomReservationCalendar;
