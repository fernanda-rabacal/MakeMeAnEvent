import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 2rem;
  font-weight: 700;

  h1, a {
    color: ${({theme}) => theme.colors.black}
  }

  h1 {
    font-size: 1.6rem;
  }

  a {
    font-size: 1.2rem;
    padding-inline: 0.5rem;
    transition: 0.4s;
  }

  a:hover, a:active {
    color: ${({theme}) => theme.colors["base-purple-dark"]}
  }

  a:not(a:nth-child(1)) {
    border-left: 2px solid ${({theme}) => theme.colors["base-purple-dark"]};
  }

  @media(min-width: 550px) {
    h1 {
      font-size: 1.8rem;
    }

    a {
      font-size: 1.6rem;
    }
  }

  @media (min-width: 800px) {
    h1 {
      font-size: 2.2rem;
    }
    a {
      font-size: 2rem;
      padding-inline: 1rem;
    }
  }
`