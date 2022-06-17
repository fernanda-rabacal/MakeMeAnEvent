import './style.css';
import { useState} from "react"; 
import {Nav} from '../components/Nav';
import {Button } from '../components/Button';
import {Event} from '../components/Event'


export function App(){
  const [nameEvent, setNameEvent] = useState<string>("")
  const [dateInit, setDateInit] = useState<any>(null)
  const [dateFinal, setDateFinal] = useState<any>(null)
  const [descEvent, setDescEvent] = useState<string>("")
  const [events, setEvents] = useState<any>([])


   const handleSubmit = (e: any) =>{
    e.preventDefault()
    const newEvent = {
      id: new Date().getTime(),
      name: nameEvent,
      inicio: dateInit,
      final: dateFinal,
      descricao: descEvent,
      completed: false
    }
    setEvents([...events, newEvent])
  }
  

  function deleteEvent(id: any){
    const updatedEvents = [...events].filter((event) => event.id !== id)  
    
    setEvents(updatedEvents)
  }

 
  return (
    <div>
      <Nav/>
      <div className='app-container'>

      <div className="App">
      <form className='form-tarefas' onSubmit={handleSubmit}>
        <h1>Crie aqui seu Evento</h1>
        <div>
          <label>Nome do Evento
          <input className='task' type="text" placeholder='Insira o nome do evento' required onChange={(e) => setNameEvent(e.target.value)} />
          </label>

          <div className="hours">
          <label>Data e Hora de Início
        <input type="datetime-local" required onChange={(e) => setDateInit(e.target.valueAsDate)} />
        </label>
        
        <label>Data e Hora de conclusão
        <input type="datetime-local" required onChange={(e) => setDateFinal(e.target.valueAsDate)}  />
        </label>
          </div>

          <label>
          Descrição
        <textarea className='task' id="task-description" placeholder='Descreva...' required onChange={(e) => setDescEvent(e.target.value)} />
        </label>
          </div>
        <Button className="submit-btn" type="submit" aria-label="Adicionar um evento" value="Criar Evento"/>
			</form>
      <div>
      </div>
      </div>
      <div  className="my-events">
        <h1>Meus Eventos</h1>
        <div className='dot-row'>
        <div className='subtitle'>
        <div className='dot red'></div>
        <p>Não realizado</p>
        <div className='dot blue'></div>
        <p>A ser realizado</p>
        <div className='dot green'></div>
        <p>Realizado</p>
        </div>
        <label>
        <input type="search" placeholder='Pesquisar...'/>
        </label>
        </div>
        {events.map((ev: any) => <Event
        key={ev.id} id={ev.name.toString()}
      nome={ev.name} inicio={ev.inicio}
      final={ev.final} descricao={ev.descricao} delete={() => deleteEvent(ev.id)} complete={ev.completed}
      />)}

      </div>
      </div>
      </div>
  );
}