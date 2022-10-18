import { useForm } from "react-hook-form";
import { CreateEventForm, HoursContainer, SubmitButton } from "./styles";
import * as zod from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"; 
import { useEvent } from "../../hooks/useEvent";
import { useContext } from "react";
import { EventContext } from "../../contexts/EventContext";

const newEventFormValidationSchema = zod.object({
  name: zod.string().min(1, "Informe o nome do evento"),
  start: zod.string(),
  end: zod.string(),
  description: zod.string().min(1),
})

type NewEventFormData = zod.infer<typeof newEventFormValidationSchema>

export function CreateEvent() {
  const { createNewEvent } = useContext(EventContext)
  const { register, handleSubmit, reset } = useForm<NewEventFormData>({
    resolver: zodResolver(newEventFormValidationSchema),
    defaultValues: {
      name: '',
      description: '',
    }
  });

  function handleCreateNewEvent(data: NewEventFormData) {
    const eventWasSucessfullyCreated = createNewEvent(data)
    
    
    if (eventWasSucessfullyCreated){
      reset()
    }
    
  }

  return(
    <CreateEventForm 
      className="container"
      onSubmit={handleSubmit(handleCreateNewEvent)}
      >
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
          <label>Data de conclusão
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