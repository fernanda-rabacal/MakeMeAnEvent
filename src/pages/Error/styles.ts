import styled from "styled-components";
import { ButtonProps } from "../../components/Button";

export const Page404Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7rem;

  h1 {  
    font-size: 20rem;
    margin: 0;
    color: ${({theme}) => theme.colors["base-purple-dark"]};
  }

  h4 {  
    font-size: 2rem;
    margin: 0;
  }

  p {  
    color: ${({theme}) => theme.colors["base-purple-dark"]};
    font-size: 1.8rem;
    letter-spacing: 2px;
  }

  @media (min-width: 550px) {
    h4 {
      font-size: 3rem;
    }

    p {
      font-size: 2rem;
    }
  }

  @media (min-width: 800px) {
    margin-bottom: 3rem;
    h4 {
      font-size: 4rem;
    }

    p {
      font-size: 3rem;
    }
  }

`

export const BackToHomeButton = styled(ButtonProps)`
  margin-top: 3rem;
`
