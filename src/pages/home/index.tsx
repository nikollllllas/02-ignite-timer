import { useContext } from 'react'

import { HandPalm, Play } from '@phosphor-icons/react'
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton
} from './styles'
import { NewCycleForm } from './components/newcycleform'
import { Countdown } from './components/countdown'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { CyclesContext } from '../../context/cyclescontext'

const newCycleFormSchema = zod.object({
  task: zod.string().min(1, 'A tarefa deve ter pelo menos 1 caractere.'),
  minutesAmount: zod
    .number()
    .min(1, 'O tmepo do ciclo deve ter no mínimo 5 minutos')
    .max(60, 'O tempo do ciclo deve ter no máximo 60 minutos.')
})

type NewCycleFormData = Zod.infer<typeof newCycleFormSchema>

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })

  const { handleSubmit, reset , watch } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)

    reset()
  }

  const task = watch('task')
  const isSubmitButtonDisabled = !task

  return (
    <HomeContainer>
      <form
        onSubmit={handleSubmit(handleCreateNewCycle)}
        action=''>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />

        {activeCycle ? (
          <StopCountdownButton
            onClick={interruptCurrentCycle}
            type='button'>
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton
            disabled={isSubmitButtonDisabled}
            type='submit'>
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
