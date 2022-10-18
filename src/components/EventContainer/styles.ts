import styled from "styled-components";


interface EventContainerProps {
  eventStatus: boolean
}


export const EventContainer = styled.div<EventContainerProps>`
  width: 20rem;
  height: 20rem;
  background: ${({theme}) => theme.colors["base-purple-dark"]};
`

export const EditEventForm = styled.div``

export const Description = styled.div``

export const Dates = styled.div``

export const DatesToEdit = styled.div``

export const Buttons = styled.div``

