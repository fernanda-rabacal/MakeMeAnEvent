import styled from "styled-components";

export const ButtonProps = styled.button`
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  background-color: ${({theme}) => theme.colors["base-purple-dark"]};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.6rem;
  transition: 0.4s;
  border: 2px solid transparent;

  &:hover {
    background: transparent;
    border: 2px solid ${({theme}) => theme.colors["base-purple-dark"]};
  }
`