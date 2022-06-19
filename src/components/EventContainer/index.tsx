import './style.css';

import { Button } from '../Buttons';
import {IEventContainer} from '../../utils/types';
import { useState } from 'react';

export function Event({ 
  eventName,
  eventCreation,
  eventEnd,
  eventStart,
  eventDescription,
  completeEvent,
  deleteEvent,
  finishEvent,
} : IEventContainer){ 

  
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState<string>(eventName);


  const handleEdit = () => {
    setEdit(!edit);
  };

  const saveUpdates = () =>{
    console.log(name)
    eventName = name
    console.log(eventName)
    setEdit(!edit)
  } 

  return (
    <div style={{backgroundColor: completeEvent ? 'rgb(120, 212, 101)' : ""}} className="event-container">
     {!edit ? (<>
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
        <Button onClick={handleEdit} value="✏️" className='update-event'/>
        <Button onClick={finishEvent} value="✔️" className='finish-event'/>
      </div>
      </>) :(
        <>
        <div className="event-content">
          <input type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
           />
          <h4>{eventDescription}</h4>
          <p>Data de Criação: {eventCreation}</p>
          <div className="dates">
            <p>Início: {eventStart.toLocaleString("pt-br")}</p>
            <p>Termina em: {eventEnd.toLocaleString("pt-br")}</p>
          </div>
        </div>
        <div className="buttons">
          <Button onClick={deleteEvent} value="-" className='delete-event'/>
          <Button onClick={handleEdit} value="❌" className='update-event'/>
          <Button type="submit" onClick={saveUpdates} value="Salvar" />
        </div>
        </>
      )
      
    }
    </div>
  )
}