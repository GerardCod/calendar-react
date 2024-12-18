import { Navbar } from '../'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { addHours } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { localizer, getMessagesES } from '../../helpers';

const myEventsList = [
  {
    title: 'Posada del jale',
    notes: 'Hay que llevar pisto',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColors: '#fafafa',
    user: {
      _id: '123456',
      name: 'Gerardo Aguilar'
    }
  }
]

export const CalendarPage = () => {

  const eventStyleGetter = (event, start, end, isSelected) => {
    console.log({event, start, end, isSelected}); 

    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }
    
    return {
      style
    }
  }

  return (
    <>
      <Navbar />
      <Calendar
        culture='es'
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={ getMessagesES() }
        eventPropGetter={eventStyleGetter}
      />

    </>
  )
}
