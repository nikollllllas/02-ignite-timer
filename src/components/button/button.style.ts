import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'sucess'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  sucess: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 10rem;
  height: 4rem;

  ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }}
`
