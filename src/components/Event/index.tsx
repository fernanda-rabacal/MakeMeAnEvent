import './style.css'
import {Button} from '../Button'

interface Props{
  nome: string,
  id: string,
  complete: boolean,
  inicio?: any,
  final?: any,
  descricao?: string,
  delete?: () => void,
  update?: () => void,
  finish?: () => void
}


export function Event(props: Props){
  
  const day = new Date().getDay()
  const month = new Date().getMonth()
  const year = new Date().getFullYear()
  const hour = new Date().getHours()
  const min = new Date().getMinutes()

  /* function verifyCompletedEvent(){

    const container: any = document.getElementById(props.id)
    
    if(props.complete){
      props.complete = false
      container.style.backgroundColor = "gray"
    } else{
      container.style.backgroundColor = "green"
    }
  }
 */

  
  return(
    <div id={props.id.toString()} className="event-container">
      <div className="event-content">
      <h2>{props.nome}</h2>
      <h4>{props.descricao}</h4>
      <p>Data de Criação: {day}/{month}/{year}, às {hour}:{min}</p>
      <div className="dates">
      <p>Início: {props.inicio.getDay()}/{props.inicio.getMonth()}/{props.final.getFullYear()}, às {props.inicio.getHours()}:{props.inicio.getMinutes()}</p>
      <p>Termina em: {props.final.getDay()}/{props.final.getMonth()}/{props.final.getFullYear()}, às {props.final.getHours()}:{props.final.getMinutes()}</p>
      </div>
      </div>
      <div className="buttons">
      <Button onClick={props.delete} value="-" className='delete-event'/>
      <Button onClick={props.update} value="✏️" className='update-event'/>
      <Button  value="✔️" className='finish-event'/>
      </div>
    </div>
  )
}