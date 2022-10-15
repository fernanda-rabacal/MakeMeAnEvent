import { useForm } from "react-hook-form";
import { CreateEventForm, HoursContainer, SubmitButton } from "./styles";

export function CreateEvent() {
  const { register, handleSubmit, reset } = useForm();

  return(
    <CreateEventForm className="container">
      <h1>Crie aqui seu evento</h1>
      <div>
          <label>Nome do Evento
          <input 
              className='task'
              id='name' 
              type="text" 
              placeholder='Insira o nome do evento' 
              required 
              {...register("name")}
              />
          </label>

          <HoursContainer>
          <label>Data e Hora de Início
              <input 
              type="datetime-local" 
              required
              id="start"
              {...register("start")}
              />
          </label>      
          <label>Data e Hora de conclusão
              <input 
              type="datetime-local" 
              required 
              id="end"
              {...register("end")}
              />
          </label>
          </HoursContainer>

          <label> Descrição
          <textarea 
              className='task' 
              placeholder='Descreva...' 
              required 
              id="description" 
              {...register("description")}
              />
          </label>
      </div>
      
      <SubmitButton type="submit">
          Criar Evento
      </SubmitButton> 
    </CreateEventForm>
  )
}