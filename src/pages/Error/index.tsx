import { NavLink } from "react-router-dom"
import { BackToHomeButton, Page404Container } from './styles';

export function ErrorPage(){
    return(
        <Page404Container>
            <h1 >404</h1>
            <h4 className="error-title">Página não encontrada</h4>
            <p>OOPS! Parece que esta página não existe...  </p>
            <NavLink to="/home" title="Home">
                <BackToHomeButton>
                    Voltar para a página inicial
                </BackToHomeButton>
            </NavLink>
        </ Page404Container >
    );
}