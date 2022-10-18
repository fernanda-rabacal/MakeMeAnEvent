import { format } from "date-fns";
import { createContext, ReactNode, useReducer } from "react";
import { createNewEventAction } from "../reducers/events/actions";
import { EventReducers } from "../reducers/events/reducer";
import { Events } from "../utils/types";

interface EventContextType {
  events: Events[]
  createNewEvent: (data: CreateEventData) => boolean
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

  const [eventsState, dispatch] = useReducer(EventReducers, {
    events: []
  })

  function validateDates(dateInitFormatted: Date, dateFinalFormatted: Date, creationDate: Date) {
    if(!dateFinalFormatted || !dateInitFormatted){
      return window.alert("você precisa colocar uma data válida")
    }

    if(+dateInitFormatted > +dateFinalFormatted){
      return alert("Data de início não pode ser maior que data final")
    }

    if(+dateInitFormatted < +creationDate || +dateFinalFormatted < +creationDate){
      return alert("Data precisa ser no futuro")
    }

    return true
  } 

  function createNewEvent(data: CreateEventData) {
    const startDate = new Date(data.start)
    const endDate = new Date(data.end)
    const creationDate = new Date()
    const datesSucessfullyValidated = validateDates(startDate, endDate, creationDate)
    
    if(datesSucessfullyValidated) {
      const newEvent: Events = {
        id: String(new Date().getTime()),
        name: data.name,
        description: data.description,
        creation: format(creationDate, "dd/MM/YYYY ',' HH:mm"),
        start: format(startDate, "dd/MM/YYYY ',' HH:mm"),
        end: format(endDate, "dd/MM/YYYY ',' HH:mm")
    }
    dispatch(createNewEventAction(newEvent))
    alert("Evento criado com sucesso!")
  }

  return true
}

const { events } = eventsState;

  return(
    <EventContext.Provider 
      value={{
        events,
        createNewEvent
        }}>
      {children}
    </EventContext.Provider>
  )
}