import styled from "styled-components";

export const MyEventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  align-items: center;
  margin-inline: 5rem;
  margin-block: 3rem;
  font-size: 1.4rem;
  min-height: 73vh;

  >input {
    width: 100%;
    max-width: 40rem;
    height: 3.5rem;
    border-radius: 6px;
    padding-left: 1rem;
    margin-block: 2rem;
  }

  @media (min-width: 800px) {
    >input {
      max-width: 55rem;
      margin-block: 3rem;
    }
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

  @media (min-width: 800px) {
    align-self: flex-start;
    flex-direction: row;
    gap: 3rem;
  }
`

export const EventsListContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media(min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }

  @media(min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media(min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`