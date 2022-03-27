import React, { ReactChild } from 'react'
import { Container } from './styles'

interface HomeContentProps {
  children?: ReactChild;
}

export function HomeContent({ children }: HomeContentProps) {
  return (
    <Container>{children}</Container>
  )
}
