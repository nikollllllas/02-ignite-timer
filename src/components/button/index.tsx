import { ButtonContainer, ButtonVariant } from './button.style'

interface ButtonProps {
  variant?: ButtonVariant
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return(
    <ButtonContainer variant={variant}>
      Oi
    </ButtonContainer>
  )
}