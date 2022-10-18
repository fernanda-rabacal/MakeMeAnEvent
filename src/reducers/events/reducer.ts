import { ActionTypes } from "./actions"
import { produce } from "immer"

export interface Event {
  id: string
  name: string
  description: string
  start: string
  end: string
  creation: string
}

interface Events {
  events: Event[]
}

export function EventReducers(state: Events, action: any) {
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

    default:
      return state
  }
}