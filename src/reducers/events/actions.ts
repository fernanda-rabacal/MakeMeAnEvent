import { Event } from "./reducer"

export enum ActionTypes {
  CREATE_NEW_EVENT = "CREATE_NEW_EVENT",
  UPDATE_EVENT = "UPDATE_EVENT",
  DELETE_EVENT = "DELETE_EVENT"
}

export function createNewEventAction(newEvent: Event) {
  return {
    type: ActionTypes.CREATE_NEW_EVENT,
    payload: {
      newEvent
    }
  }
}

export function updateEventAction(updatedEvent: Event) {
  return {
    type: ActionTypes.UPDATE_EVENT,
    payload: {
      updatedEvent
    }
  }
}

export function deleteEventAction() {
  return {
    type: ActionTypes.DELETE_EVENT,
  }
}