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
        title: `Room Reserved - Room ${reservation.room_number}`,
        start: new Date(reservation.room_check_in_date),
        end: new Date(reservation.room_check_out_date),
      }));
      setEvents(reservations);
    } catch (error) {
      console.error('Error fetching room reservations:', error);
    }
  };

  useEffect(() => {
    fetchRoomReservations(); // Fetch reservations when the component is mounted
  }, []);

  return (
    <div style={{ height: '500px', margin: '20px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="week"    
        style={{ height: 500 }}
      />
    </div>
  );
};

export default RoomReservationCalendar;
