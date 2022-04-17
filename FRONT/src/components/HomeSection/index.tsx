import React, { ReactChild } from 'react'
import { BaseProps } from '../../interfaces/BaseProps';
import { Container, Title } from './styles'

interface HomeSectionProps extends BaseProps {
  children: ReactChild | ReactChild[];
  title: string;
  centerTitle?: Boolean;
}

export function HomeSection({ children, className, title, centerTitle = false }: HomeSectionProps) {
  return (
    <Container className={className}>
      <Title centered={centerTitle}>{ title }</Title>
      { children }
    </Container>
  )
}
