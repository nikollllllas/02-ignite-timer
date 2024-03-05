import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Play } from '@phosphor-icons/react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput
} from './styles'

const newCycleFormSchema = zod.object({
  task: zod.string().min(1, 'A tarefa deve ter pelo menos 1 caractere.'),
  minutesAmount: zod
    .number()
    .min(5, 'O tmepo do ciclo deve ter no mínimo 5 minutos')
    .max(60, 'O tempo do ciclo deve ter no máximo 60 minutos.')
})

type NewCycleFormData = zod.infer<typeof newCycleFormSchema>

export function Home() {
  const { register, handleSubmit, reset, watch } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: {
      task: '',
      minutesAmount: 25
    }
  })

  function handleCreateNewCicle(data: NewCycleFormData) {
    console.log(data)
    reset()
  }

  const task = watch('task')
  const isSubmitButtonDisabled = !task

  return (
    <HomeContainer>
      <form
        onSubmit={handleSubmit(handleCreateNewCicle)}
        action=''>
        <FormContainer>
          <label htmlFor='task'>Vou trabalhar em</label>
          <TaskInput
            id='task'
            list='task-suggestion'
            placeholder='Dê um nome para o seu projeto.'
            {...register('task')}
          />

          <datalist id='task-suggestion'>
            <option value='Projeto 1' />
            <option value='Projeto 2' />
            <option value='Projeto 3' />
          </datalist>

          <label htmlFor='minutesAmount'>durante</label>
          <MinutesAmountInput
            id='minutesAmount'
            type='number'
            placeholder='00'
            step={5}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton
          disabled={isSubmitButtonDisabled}
          type='submit'>
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
