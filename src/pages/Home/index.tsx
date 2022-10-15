import { NavLink } from 'react-router-dom';
import { CreateEventButton, HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <h1>
      CRIE MOMENTOS QUE DURAM A VIDA TODA
      </h1> 

      <NavLink to="/create-event">
        <CreateEventButton>
          Crie o seu Evento
        </CreateEventButton>
      </NavLink>
    </HomeContainer>
  );
}
