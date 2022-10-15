import { Button } from '../Buttons';
import { Events } from '../../utils/types';
import { useState} from 'react';
import { XCircle, CheckCircle, MinusCircle, PencilCircle, SkipBackCircle } from "phosphor-react"
import { Buttons, Dates, DatesToEdit, Description, EditEventForm, EventContainer } from './styles';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { EditEventModal } from '../EditEventModal';

const editEventFormValidationSchema = zod.object({
  newName: zod.string().min(1, "Informe o nome do evento"),
  newDateInit: zod.string(),
  newDateFinal: zod.string(),
  newDescEvent: zod.string().min(1, "Informe uma descrição do evento")
})

type EditEventFormData = zod.infer<typeof editEventFormValidationSchema>

interface EventProps {
  event: Events,
  deleteEvent: () => void,
  onUpdateEvent: (updatedEvent: Events) => void,
}

export function Event({ event, deleteEvent, onUpdateEvent } : EventProps ){ 
  const [edit, setEdit] = useState(false);
  const [background, setBackground] = useState(false)

  const { register, handleSubmit, reset } = useForm<EditEventFormData>({
    resolver: zodResolver(editEventFormValidationSchema),
    defaultValues: {
      newName: '',
      newDescEvent: '',
    }
  })
  
  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleUpdateEvent = (data: EditEventFormData) => {
    const updatedEvent: Events = {
      id: event.id,
      name: data.newName,
      start: data.newDateInit,
      end: data.newDateFinal,
      creation: event.creation,
      description: data.newDescEvent,
    }  
    
    onUpdateEvent(updatedEvent)
    handleEdit()
    reset()
  }

  
  return (
    <>
    {!edit ? (
       <EventContainer eventStatus={background}>
      <Description>
        <h2>{event.name}</h2>
        <h3>{event.description}</h3>
      </Description>

        <Dates>
          <p><strong>Criado em: </strong>{event.creation}</p>
          <p><strong>Início: </strong>{event.start}</p>
          <p><strong>Termina em: </strong>{event.end}</p>
        </Dates>

      <Buttons>
        <Button 
          onClick={deleteEvent} 
          btnValue={<XCircle size={32} color="#be1b1b" weight="fill" />} 
          className='delete-event'
          />
        <Button 
          onClick={handleEdit} 
          btnValue={<PencilCircle size={32} color="#f9fc52" weight="duotone" />} 
          className='update-event'
          />
        <Button 
          onClick={() => setBackground(prevBackground => !prevBackground)} 
          className='finish-event'
          btnValue={ background ? 
            <SkipBackCircle size={32} color="#ff7300" weight="fill" /> : 
            <CheckCircle size={32} color="#00a516" weight="fill" /> } 
          />
      </Buttons>
    </EventContainer>
    ) : (
      <EditEventModal>
        <EditEventForm onSubmit={handleSubmit(handleUpdateEvent)}>
          <h1>Editar evento - <strong>{event.name}</strong></h1>
          <div className="form-inputs">
            <label> Nome
              <input
                type="text" 
                className='task' 
                id="newName" 
                {...register("newName")}  
              />
            </label>

            <DatesToEdit>
              <label> Data de início
                <input 
                  type="datetime-local" 
                  id="newDateInit" 
                  {...register("newDateInit")} 
                />
              </label>

              <label> Data Final
                <input 
                  type="datetime-local" 
                  id="newDateFinal" 
                  {...register("newDateFinal")} 
                />
              </label>
            </DatesToEdit>
            
            <label> Descrição
              <input
                type='text' 
                className='task' 
                id="newDescEvent" 
                {...register("newDescEvent")} 
                />
            </label>

          </div>

          <Buttons>
            <Button 
              type="submit" 
              btnValue={<CheckCircle size={32} color="#00a516" weight="fill" />} 
              className='finish-event' 
              title="Salvar" 
              />
            <Button 
              onClick={handleEdit} 
              btnValue={<MinusCircle size={32} color="#f9fc52" weight="fill" />} 
              className='update-event' 
              title="Sair da edição"
              />
            <Button 
              onClick={deleteEvent} 
              btnValue={<XCircle size={32} color="#be1b1b" weight="fill" />} 
              className='delete-event' 
              title="Deletar evento"
              />
          </Buttons>
        </EditEventForm>
      </EditEventModal>
      )
    }
   </>  
  )
}