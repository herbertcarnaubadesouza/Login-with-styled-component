import React from 'react'
import { Container } from './styles'

export function AvailablePlatforms() {
  return (
    <Container>
      <div className="platform">
        <div className="platform-info">
          <img className='platform-image' src="/images/laptop.png" />
          <h3 className="platform-name">Computadores</h3>
        </div>
        <hr />
        <ul className='device-list'>
          <li>Windows</li>
          <li>MacOS</li>
          <li>Linux</li>
        </ul>
      </div>
      <div className="platform">
        <div className="platform-info">
          <img className='platform-image' src="/images/smartphone.png" />
          <h3 className="platform-name">Smartphones e Tablet</h3>
        </div>
        <hr />
        <ul className="device-list">
          <li>Android Phone &amp; Tablet</li>
          <li>iPhone &amp; iPad</li>
        </ul>
      </div>
    </Container>
  )
}
