import { Circle } from 'phosphor-react';
import { EventsListContainer, MyEventsContainer, OptionsContainer } from './styles';
import { useState } from "react";
import { Event } from '../../components/EventContainer';

enum FilterTypes {
  START_DATE = "START_DATE",
  END_DATE = "END_DATE",
  CREATION_DATE = "CREATION_DATE",
}

export function EventsDetails(){
  const [search, setSearch] = useState("")
  const [selectedValue, setSelectedValue] = useState<string>(FilterTypes.START_DATE)

  
  return(
    <MyEventsContainer className='container'>
        <h1>Meus Eventos</h1>
          <input 
              title="Pesquisar evento"
              type="searchbar" 
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              placeholder='Pesquise um evento'
          />

          <OptionsContainer>
            <div className='dot-row'>
              <Circle size={22} color="#9e2424" weight="fill"  />
              <p>Não realizado</p>
              <Circle size={22} color="#4d63dd" weight="fill"  />
              <p>A ser realizado</p>
              <Circle size={22} color="#78d465" weight="fill"  />
              <p>Realizado</p>
            </div>

            <label>
                Organizar por:
                <select id="selectOptions" onChange={(e) => { setSelectedValue(e.target.value)}}>
                <option value={FilterTypes.START_DATE}>Data de Início</option>
                <option value={FilterTypes.END_DATE}>Data Final</option>
                <option value={FilterTypes.CREATION_DATE}>Data de Criação</option>
                </select>
            </label>
          </OptionsContainer>


          <EventsListContainer>
            
          </EventsListContainer>
      
      </MyEventsContainer>
    );
}