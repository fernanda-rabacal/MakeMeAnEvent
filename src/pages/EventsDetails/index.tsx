import { Circle } from 'phosphor-react';
import { EventsListContainer, MyEventsContainer, OptionsContainer } from './styles';
import { useContext, useEffect, useState } from "react";
import { Event } from '../../components/EventContainer';
import { EventContext } from '../../contexts/EventContext';

enum FilterTypes {
  START_DATE = "START_DATE",
  END_DATE = "END_DATE",
  CREATION_DATE = "CREATION_DATE",
}

export function EventsDetails(){
  const [search, setSearch] = useState("")
  const [selectedValue, setSelectedValue] = useState<string>(FilterTypes.START_DATE)

  const { events, updateEvent, deleteEvent, findEvent } = useContext(EventContext)
  
  
  function sortingEvents() {
      if(selectedValue === FilterTypes.START_DATE){
       const startDateSortedEvents = [...events].sort((a, b) => +a.start > +b.start ? -1 : 1)

       return startDateSortedEvents
      }
      if (selectedValue === FilterTypes.CREATION_DATE) {
        const creationDateSortedEvents = [...events].sort((a, b) =>  +a.creation < +b.creation ? -1 : 1) 
        return creationDateSortedEvents
      }
      if (selectedValue === FilterTypes.END_DATE) {
        const endDateSortedEvents = [...events].sort((a, b) =>  +a.end < +b.end ? -1 : 1)
        return endDateSortedEvents  
      }

      return events
    }
      
    useEffect(() => {
        sortingEvents()
        console.log(selectedValue)
    }, [events, selectedValue])

  return(
    <MyEventsContainer>
        <h1>Meus Eventos</h1>
          <input 
              title="Pesquisar evento"
              type="searchbar" 
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              placeholder='Pesquise um evento'
          />

          <OptionsContainer>
            <div className='dot-row'>
              <Circle size={22} color="#ffb622" weight="fill"  />
              <p>Não realizado</p>
              <Circle size={22} color="#DA70D6" weight="fill"  />
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
            {sortingEvents().filter((event) => findEvent(event, search)).map((event) => 
                <Event 
                  key={event.id}
                  event={event}
                  onUpdateEvent={updateEvent}
                  deleteEvent={() => deleteEvent(event.id)}
                  />
              )}
          </EventsListContainer>
      </MyEventsContainer>
    );
}