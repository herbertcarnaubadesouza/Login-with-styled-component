import React, { ReactChild } from 'react'
import { Container } from './styles'

interface HomeContainerProps {
  children?: ReactChild;
}

export function HomeContainer({ children }: HomeContainerProps) {
  return (
    <Container>{children}</Container>
  )
}
