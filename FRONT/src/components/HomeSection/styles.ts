import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 3rem;
`

interface TitleProps {
  centered: Boolean
}

export const Title = styled.h2<TitleProps>`
  text-transform: capitalize;
  margin-inline: ${({ centered }) => centered ? 'auto' : 0};
  font-weight: 500;
`