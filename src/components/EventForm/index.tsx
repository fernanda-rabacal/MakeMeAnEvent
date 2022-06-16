import React, {FC, useState, ChangeEvent} from "react";
import {Button } from '../Button';
import './style.css'

export const EventForm: FC = () =>{
  
  const [nameEvent, setNameEvent] = useState<string>("")
  const [descEvent, setDescEvent] = useState<string>("")
  const [event, setEvent] = useState([])
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{
    setNameEvent(event.target.value)
  }
  
  return(
    <div className="App">
      <form className='form-tarefas'>
        <h1>Crie aqui seu Evento</h1>
        <div>
          <label>Nome do Evento
          <input className='task' type="text" placeholder='Insira o nome do evento' required onChange={handleChange} />
          </label>

          <div className="hours">
          <label>Data e Hora de Início
        <div>
        <input type="date" required />
        <input type="time" />
        </div>  
        </label>
        
        <label>Data e Hora de conclusão
        <div>
        <input type="date" required />
        <input type="time" />
        </div>  
        </label>
          </div>

          <label>
          Descrição
        <textarea className='task' id="task-description" placeholder='Descreva...' />
        </label>
          </div>
        <Button className="submit-btn" type="submit" aria-label="Adicionar um evento" value="Criar Evento" />
			</form>
      </div>
  )
}

