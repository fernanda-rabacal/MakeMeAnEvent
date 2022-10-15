import { FooterContainer } from "./styles";

export function Footer() {
  const currentYear =  new Date().getFullYear();

  return(
    <FooterContainer>
      @ {currentYear} por MakeMeAnEvent. Todos os direitos reservados
    </FooterContainer>
  )
}