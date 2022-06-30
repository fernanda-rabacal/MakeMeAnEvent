import './style.css';

import { Button } from '../Buttons';
import {IEventContainer} from '../../utils/types';
import { useState} from 'react';

export function Event({
    name,
    completed,
    start,
    end,
    creation,
    description,
    deleteEvent,
    finishEvent,
} : IEventContainer){ 

  
  const [edit, setEdit] = useState(false);
  const [newName, setNewName] = useState<string>(name);


  const handleEdit = () => {
    setEdit(!edit);
  };

  const saveUpdates = () =>{
    console.log(newName)
    console.log(name)
    setEdit(!edit)
  } 

  return (
    <div style={{backgroundColor: completed ? 'rgb(120, 212, 101)' : ""}} className="event-container">
     {!edit ? (<>
      <div className="event-content">
        <h2>{name}</h2>
        <h4>{description}</h4>
        <p>Data de Criação: {creation.toLocaleString("pt-br")}</p>
        <div className="dates">
          <p>Início: {start.toLocaleString("pt-br")}</p>
          <p>Termina em: {end.toLocaleString("pt-br")}</p>
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
          onChange={(e) => setNewName(e.target.value)}
           />
          <h4>{description}</h4>
          <p>Data de Criação: {creation.toLocaleString("pt-br")}</p>
          <div className="dates">
            <p>Início: {start.toLocaleString("pt-br")}</p>
            <p>Termina em: {end.toLocaleString("pt-br")}</p>
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