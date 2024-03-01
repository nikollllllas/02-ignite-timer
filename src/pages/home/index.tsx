import { Button, CountdownContainer, FormContainer, HomeContainer, Separator } from './styles'
import { Play } from '@phosphor-icons/react'

export function Home() {
  return (
    <HomeContainer>
      <form action=''>
        <FormContainer>
          <label htmlFor='task'>Vou trabalhar em</label>
          <input id='task' />
          <label htmlFor='minutesAmount'>durante</label>
          <input id='minutesAmount' />
          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <Button type='submit'>
          <Play />
          Começar
        </Button>
      </form>
    </HomeContainer>
  )
}
