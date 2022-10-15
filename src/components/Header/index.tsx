import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'

export function Header(){
  return(
      <HeaderContainer>
        <h1 aria-label='Logo do site'>MakeMeAnEvent</h1>
        <nav>
          <NavLink to="/home">
            Início
          </NavLink>
          <NavLink to="/about">
            Sobre
          </NavLink>
          <NavLink to="/create-event">
            Criar Evento
          </NavLink>
          <NavLink to="/my-events">
            Meus Eventos
          </NavLink>
        </nav>
      </HeaderContainer>
  )
}