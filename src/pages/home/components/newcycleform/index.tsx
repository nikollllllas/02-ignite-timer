import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FormContainer, TaskInput, MinutesAmountInput } from './styles'
import * as zod from 'zod'

const newCycleFormSchema = zod.object({
  task: zod.string().min(1, 'A tarefa deve ter pelo menos 1 caractere.'),
  minutesAmount: zod
    .number()
    .min(1, 'O tmepo do ciclo deve ter no mínimo 5 minutos')
    .max(60, 'O tempo do ciclo deve ter no máximo 60 minutos.')
})

type NewCycleFormData = zod.infer<typeof newCycleFormSchema>

export function NewCycleForm() {
  const { register, handleSubmit, reset, watch } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: {
      task: '',
      minutesAmount: 25
    }
  })
  return (
    <FormContainer>
      <label htmlFor='task'>Vou trabalhar em</label>
      <TaskInput
        id='task'
        list='task-suggestion'
        disabled={!!activeCycle}
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
        disabled={!!activeCycle}
        placeholder='00'
        step={1}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
