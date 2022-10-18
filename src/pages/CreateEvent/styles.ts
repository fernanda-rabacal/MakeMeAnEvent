import styled from "styled-components";
import { ButtonProps } from "../../components/Button";

export const CreateEventForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-bottom: 3rem;
  
  h1 {
    text-align: center;
    text-transform: uppercase;
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
`

export const HoursContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SubmitButton = styled(ButtonProps)`
  margin-top: 3rem;
`