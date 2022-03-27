import Link, { LinkProps } from 'next/link';
import React from 'react'

import { Button } from './styles'

interface ButtonProps extends LinkProps {
  children: string;
}

export function LinkButton({ children, ...rest }: ButtonProps) {
  return (
    <Link {...rest}>
      <Button>{children}</Button>
    </Link>
  )
}
