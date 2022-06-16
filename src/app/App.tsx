import React, {FC} from "react";
import './style.css';
import {Nav} from '../components/Nav';
import {EventForm} from '../components/EventForm'
const App: FC = () => {
  
  return (
    <div>
      <Nav/>
      <div className='app-container'>

      <EventForm />
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
      </div>
      </div>
      </div>
  );
}

export default App