export interface IButton {
    className?: string,
    type?: any,
    style?: any,
    value: string,
    onClick?: () => void,
}

export interface IEventContainer {
    id?: number,
    name: string,
    completed: boolean,
    start: Date,
    end: Date,
    creation: Date,
    description: string,
    deleteEvent?: () => void,
    updateEvent?: () => void,
    finishEvent?: () => void
}