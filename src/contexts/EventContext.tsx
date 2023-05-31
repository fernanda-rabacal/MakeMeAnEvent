import { format } from "date-fns";
import { createContext, ReactNode, useEffect, useReducer } from "react";
import { createNewEventAction, deleteEventAction, updateEventAction } from "../reducers/events/actions";
import { EventReducers } from "../reducers/events/reducer";
import { Events } from "../utils/types";

interface EventContextType {
  events: Events[]
  createNewEvent: (data: CreateEventData) => boolean
  findEvent: (event: Events, search: string) => void
  updateEvent: (updatedEvent: Events) => void
  deleteEvent: (eventId: string) => void
}

interface EventContextProviderProps {
  children: ReactNode;
}

interface CreateEventData {
  name: string,
  start: string,
  end: string,
  description: string,
}

export const EventContext = createContext({} as EventContextType);

export function EventContextProvider({ children } : EventContextProviderProps) {
  const storageStateAsJSON = localStorage.getItem('@make-me-an-event:events-1.0.0')

  const [eventsState, dispatch] = useReducer(EventReducers, {
    events: storageStateAsJSON ? JSON.parse(storageStateAsJSON).events : []
  })

  const { events } = eventsState;

  useEffect(() => {
    const stateJSON = JSON.stringify(eventsState)

    localStorage.setItem('@make-me-an-event:events-1.0.0', stateJSON)
  }, [eventsState])

  function validateDates(dateInitFormatted: Date, dateFinalFormatted: Date, creationDate: Date) {
    if(!dateFinalFormatted || !dateInitFormatted){
      alert("você precisa colocar uma data válida")
    } else if(+dateInitFormatted > +dateFinalFormatted){
      alert("Data de início não pode ser maior que data final")
    } else if(+dateInitFormatted < +creationDate || +dateFinalFormatted < +creationDate){
      alert("Data precisa ser no futuro")
    } else {
      return true
    }
  } 

  function createNewEvent(data: CreateEventData) {
    const startDate = new Date(data.start)
    const endDate = new Date(data.end)
    const creationDate = new Date()
    const datesSucessfullyValidated = validateDates(startDate, endDate, creationDate)
    
    if(!datesSucessfullyValidated) {
      return false
    }

    const newEvent: Events = {
      id: String(new Date().getTime()),
      name: data.name,
      description: data.description,
      creation: creationDate,
      start: startDate,
      end: endDate
  }

  dispatch(createNewEventAction(newEvent))
  alert("Evento criado com sucesso!")
  
  return true
}

function updateEvent(updatedEvent: Events) {
  const datesSucessfullyValidated = validateDates(updatedEvent.start, updatedEvent.end, updatedEvent.creation)

  if(datesSucessfullyValidated) {
    dispatch(updateEventAction(updatedEvent))
  }
}

function findEvent(event: Events, search: string){
  if(search === ''){
    return event
  } else if (event.name.toLowerCase().indexOf(search) !== -1){
    return event
  }
}

function deleteEvent(eventId: string) {
  dispatch(deleteEventAction(eventId))
}

  return(
    <EventContext.Provider 
      value={{
        events,
        createNewEvent,
        findEvent,
        updateEvent,
        deleteEvent
        }}>
      {children}
    </EventContext.Provider>
  )
}