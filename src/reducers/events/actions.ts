import { Events } from "../../utils/types"

export enum ActionTypes {
  CREATE_NEW_EVENT = "CREATE_NEW_EVENT",
  UPDATE_EVENT = "UPDATE_EVENT",
  DELETE_EVENT = "DELETE_EVENT"
}

export function createNewEventAction(newEvent: Events) {
  return {
    type: ActionTypes.CREATE_NEW_EVENT,
    payload: {
      newEvent
    }
  }
}

export function updateEventAction(updatedEvent: Events) {
  return {
    type: ActionTypes.UPDATE_EVENT,
    payload: {
      updatedEvent
    }
  }
}

export function deleteEventAction(eventId: string) {
  return {
    type: ActionTypes.DELETE_EVENT,
    payload: {
      eventId
    }
  }
}