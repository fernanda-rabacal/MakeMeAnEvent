import './style.css';
import {Nav} from '../../components/Nav';
import {Button} from '../../components/Buttons'
import { useNavigate } from "react-router-dom"

export function Page404(){

    const navigate = useNavigate()

    const changeRouteHome = () => navigate(`/home`)

    return(
        <div>
            <Nav />
            <div className="err-404" >
                <h1 >404</h1>
                <h4 className="error-title">Página não encontrada</h4>
                <p>OOPS! Parece que esta página não existe...  </p>
                <Button 
                value="Voltar para a página inicial" 
                onClick={changeRouteHome} 
                className="backToHome-btn"
                />
            </div>
        </div>
    );
}