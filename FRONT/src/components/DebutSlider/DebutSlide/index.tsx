import React from 'react'
import { Container } from './styles'

interface DebutSlideProps {
  name: string;
  debutDate: Date;
  description: string;
}

export function DebutSlide({ name, debutDate, description }: DebutSlideProps) {
  const dateFormatter = Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
  })

  return (
    <Container>
      <div className="course">
        <div className="course-info">
          <h3>{name}</h3>
          <div className="launch-date">
            Disponível {dateFormatter.format(debutDate)}
          </div>
        </div>
        <p className="course-description">
          {description}
        </p>
        <div className="course-instructors">
          <div className="instructor">
            <img className='instructor-photo' src="https://picsum.photos/512/512" />
            <p className="instructor-name">
              José da Silva
            </p>
          </div>
          <div className="instructor">
            <img className='instructor-photo' src="https://picsum.photos/512/512" />
            <p className="instructor-name">
              José da Silva
            </p>
          </div>
          <div className="instructor">
            <img className='instructor-photo' src="https://picsum.photos/512/512" />
            <p className="instructor-name">
              José da Silva
            </p>
          </div>
        </div>
      </div>
      <div className="video-container">
        <img src="https://picsum.photos/1600/900" />
      </div>
    </Container>
  )
}
