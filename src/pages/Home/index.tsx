import './style.css';
import {useState, useEffect} from "react"; 
import {Nav} from '../../components/Nav';
import {Button } from '../../components/Buttons';
import {Event} from '../../components/EventContainer'


export function Home(){
  const [nameEvent, setNameEvent] = useState<string>("")
  const [dateInit, setDateInit] = useState<any>(null)
  const [dateFinal, setDateFinal] = useState<any>(null)
  const [descEvent, setDescEvent] = useState<string>("")
  const [events, setEvents] = useState<any>([])
  const [search, setSearch] = useState<string>("")
  const [selectedValue, setSelectedValue] = useState<string>("Data de Início")
 
  useEffect(() => console.log("..."), [])

  const now = new Date()
  
   const handleSubmit = (e: any) =>{
    e.preventDefault()
    const newEvent = {
      id: new Date().getTime(),
      name: nameEvent,
      start: dateInit,
      end: dateFinal,
      creation: new Date().toLocaleString("pt-br"),
      description: descEvent,
      completed: false
    }
    setEvents([...events, newEvent])
  }
  

  function deleteEvent(id: any){
    const updatedEvents = [...events].filter((event) => event.id !== id)  
    
    setEvents(updatedEvents)
  }


  function findEvent(event: any){
    if(search === ''){
      return event
    } else if (event.name.toLowerCase().indexOf(search) !== -1){
      return event
    }
  }
  
  const order = (e: any) =>{
    setSelectedValue(e.target.value)
    selectedValue === "Data de Início"? orderByStart() :
    selectedValue === "Data de Criação" ? orderByCreation() : orderByEnd()  

  }

  const orderByStart = () => {
    events.sort((a: any, b: any) => +a.start < +b.start ? -1 : 1)}

  const orderByEnd = () => {
    events.sort((a: any, b: any) =>  +a.end > +b.end ? -1 : 1)}

  const orderByCreation = () => {
    events.sort((a: any, b: any) =>  +a.creation < +b.creation ? -1 : 1)} 

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
                  <input type="datetime-local" required onChange={(e: any) => 
                  e.target.valueAsDate < now ?
                      window.alert("Data precisa ser no futuro") : setDateInit(e.target.valueAsDate)
                    } />
                </label>
              
                <label>Data e Hora de conclusão
                  <input type="datetime-local" required onChange={(e: any) =>
                  +e.target.valueAsDate < +dateInit ?
                    window.alert("Data precisa ser no futuro") : setDateFinal(e.target.valueAsDate)
                   } 
                  />
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
            <div className='dot red'></div>
            <p>Não realizado</p>
            <div className='dot blue'></div>
            <p>A ser realizado</p>
            <div className='dot green'></div>
            <p>Realizado</p>
          </div>

          <div className='options'>
            <label>
              Organizar por:
              <select 
              id="selectOptions"
              onChange={(e) => { 
                order(e)
                }}>
                <option value='Data de Início'>Data de Início</option>
                <option value='Data Final'>Data Final</option>
                <option value='Data de Criação'>Data de Criação</option>
              </select>
            </label>

            <input type="searchbar" 
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder='Pesquisar...'/>
          </div>
          
          {events.filter((event: any) => findEvent(event)).map((event: any) => 
          <Event 
          key={event.id}
          eventName={event.name} 
          eventStart={event.start}
          eventEnd={event.end} 
          eventCreation={event.creation}
          eventDescription={event.description}
          deleteEvent={() => deleteEvent(event.id)}
          completeEvent={event.completed}
          finishEvent={() => {
            event.completed === false? event.completed = true : event.completed = false
            console.log(event.completed, event.name)
          }}
      />)}

        </div>
        </div>
      </div>
  );
}
