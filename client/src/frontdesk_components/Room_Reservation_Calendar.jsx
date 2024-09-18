import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const RoomReservationCalendar = () => {
  //year/month/date/hour/minutes
  const [events, setEvents] = useState([
    {
      id: 0,
      title: 'Room Reserved - Room 101',
      start: new Date(2024, 8, 1, 9, 0), 
      end: new Date(2024, 8, 3, 12, 0),  
    },
    {
      id: 1,
      title: 'Room Reserved - Room 202',
      start: new Date(2024, 8, 2, 14, 0), 
      end: new Date(2024, 8, 8, 17, 0),  
    },
  ]);

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
