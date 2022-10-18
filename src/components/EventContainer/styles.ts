import styled from "styled-components";


interface EventContainerProps {
  eventStatus: boolean
}


export const EventContainer = styled.div<EventContainerProps>`
  width: 100%;
  max-width: 30rem;
  height: 25rem;
  box-sizing: border-box;
  background: ${({theme}) => theme.colors["base-purple"]};
  padding: 2rem;
  margin: 1rem;
  border-radius: 10px;
  font-size: 1.2rem;

`

export const EditEventForm = styled.form`
  width: 40rem;
  height: 40rem;
  box-sizing: border-box;
  background: ${({theme}) => theme.colors["base-purple-dark"]};
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  padding: 3rem;
  
  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 2rem;
  }

  label {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 1.5rem;
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  input {
    height: 3rem;
    padding-left: 1rem;
    margin-top: 1.3rem;
  }
  
  input, textarea {
    border-radius: 5px;
  }

  @media(min-width: 800px) {
    width: 50rem;
    height: 50rem;
    justify-content: space-between;

    h1 {
      font-size: 2.4rem;
    }
  }
`

export const Description = styled.div``

export const Dates = styled.div``

export const DatesToEdit = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  @media(min-width: 800px) {
    justify-self: flex-end;
  }
`

