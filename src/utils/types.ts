export interface IButton {
    className?: string,
    type?: any,
    style?: any,
    value: string,
    onClick?: () => void,
}

export interface IEventContainer {
    eventName: string,
    completeEvent: boolean,
    eventStart?: any,
    eventEnd?: any,
    eventCreation?: any,
    eventDescription?: string,
    deleteEvent?: () => void,
    updateEvent?: () => void,
    finishEvent?: () => void
}

