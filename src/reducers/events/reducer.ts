import { ActionTypes } from "./actions"
import { produce } from "immer"
import { Events } from "../../utils/types"

interface EventsProps {
  events: Events[]
}

export function EventReducers(state: EventsProps, action: any) {
  switch(action.type) {
    case ActionTypes.CREATE_NEW_EVENT: 
      return produce(state, draft => {
        draft.events.push(action.payload.newEvent)
      })

    case ActionTypes.UPDATE_EVENT: {
      const updatedEventIndex = state.events.findIndex(event => {
        return event.id === action.payload.updatedEvent.id
      })

      if(updatedEventIndex < 0){
        return state
      }

      return produce(state, draft => {
        draft.events[updatedEventIndex] = action.payload.updatedEvent
      })
    }

    case ActionTypes.DELETE_EVENT: {
      const eventToDeleteIndex = state.events.findIndex(event => {
        return event.id === action.payload.eventId
      })

      if(eventToDeleteIndex < 0){
        return state
      }

      return produce(state, draft => {
        draft.events.splice(eventToDeleteIndex, 1)
      })
    }

    default:
      return state
  }
}