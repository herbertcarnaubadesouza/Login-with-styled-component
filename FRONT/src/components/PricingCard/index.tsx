import React from 'react'
import { Button } from '../Button'

import { Container } from './styles'

interface PricingCardProps {
  plan: string;
  price: number;
}

export function PricingCard({ plan, price }: PricingCardProps) {
  const formmatedPrice = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);

  return (
    <Container>
      <div className="pricing-description">
        <h3>{plan}</h3>
        <p>{formmatedPrice}</p>
      </div>
      <ul>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem ipsum dolor sit.</li>
      </ul>
      <Button>tornar membro</Button>
    </Container>
  )
}
