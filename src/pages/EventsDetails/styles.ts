import styled from "styled-components";

export const MyEventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;

  >input {
    height: 3rem;
    border-radius: 6px;
    padding-left: 1rem;
    margin-block: 2rem;
  }
`

export const OptionsContainer = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  gap: .6rem;

  > div, label {
    align-items: center;
    display: flex;
    gap: .6rem;
    font-size: 1.4rem;
    font-weight: 700;
  }
  
  select {
    font-weight: 700;
    font-size: 1.4rem;
  }
`

export const EventsListContainer = styled.div``