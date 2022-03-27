import React from 'react'
import { LinkButton } from '../LinkButton'
import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <h1>LOGO</h1>
      <LinkButton href="#">entrar</LinkButton>
    </Container>
  )
}
