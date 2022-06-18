export interface IButton {
    className?: string,
    type?: any,
    style?: any,
    value: string,
    onClick?: () => any,
}

export interface IEventContainer {
    eventName: string,
    id: string,
    completeEvent: boolean,
    eventStart?: any,
    eventEnd?: any,
    eventCreation?: any,
    eventDescription?: string,
    deleteEvent?: () => void,
    updateEvent?: () => void,
    finishEvent?: () => void
}