import styled from "styled-components";
import { ButtonProps } from "../../components/Button";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 9rem;
  
  h1 {
    font-size: 5rem;
    padding-inline: 3rem;
    text-align: center;
    margin-block: 7rem;
  }

  @media (min-width: 550px) {
    margin-block: 5rem;
    h1 {
      font-size: 5.5rem;
      max-width: 450px;
    }
  }
  
  @media (min-width: 800px) {
    margin-block: 0;
    h1 {
      font-size: 8rem;
      max-width: 700px;
    }
  }
`

export const CreateEventButton = styled(ButtonProps)`
  @media(min-width: 550px) {
    font-size: 2rem;
  }
`