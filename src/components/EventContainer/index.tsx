import './style.css';

import { Button } from '../Buttons';
import {IEventContainer} from '../../utils/types';

export function Event({ 
  eventName,
  eventCreation,
  eventEnd,
  eventStart,
  eventDescription,
  completeEvent,
  deleteEvent,
  updateEvent,
  finishEvent,
} : IEventContainer){ 

  return (
    <div style={{backgroundColor: completeEvent ? 'rgb(120, 212, 101)' : ""}} className="event-container">
      <div className="event-content">
        <h2>{eventName}</h2>
        <h4>{eventDescription}</h4>
        <p>Data de Criação: {eventCreation}</p>
        <div className="dates">
          <p>Início: {eventStart.toLocaleString("pt-br")}</p>
          <p>Termina em: {eventEnd.toLocaleString("pt-br")}</p>
        </div>
      </div>
      <div className="buttons">
        <Button onClick={deleteEvent} value="-" className='delete-event'/>
        <Button onClick={updateEvent} value="✏️" className='update-event'/>
        <Button onClick={finishEvent} value="✔️" className='finish-event'/>
      </div>
    </div>
  )
}