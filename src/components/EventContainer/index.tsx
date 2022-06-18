import './style.css';

import { Button } from '../Buttons';

import {IEventContainer} from '../../utils/types';

export function Event({ 
  id,
  eventName,
  eventEnd,
  eventStart,
  eventDescription,
  completeEvent,
  deleteEvent,
  updateEvent,
  finishEvent,
} : IEventContainer){  

  const now = new Date().toLocaleString()

  /* function verifyCompletedEvent(){
    const container: any = document.getElementById(props.id)
    
    if(props.complete){
      props.complete = false
      container.style.backgroundColor = "gray"
    } else{
      container.style.backgroundColor = "green"
    }
  }
 */

  return (
    <div id={id} className="event-container">
      <div className="event-content">
        <h2>{eventName}</h2>
        <h4>{eventDescription}</h4>
        <p>Data de Criação: {now}</p>
        <div className="dates">
          <p>Início: {eventStart.toLocaleString()}</p>
          <p>Termina em: {eventEnd.toLocaleString()}</p>
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