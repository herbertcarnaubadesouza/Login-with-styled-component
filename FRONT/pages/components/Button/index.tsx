import React from 'react'

import { Button as StyledButton } from './styles'

interface ButtonProps {
  children: string
}

export function Button({ children }: ButtonProps) {
  return (
    <StyledButton>{children}</StyledButton>
  )
}
