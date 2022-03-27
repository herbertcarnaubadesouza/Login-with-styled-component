import Link from 'next/link'
import { GrFacebookOption, GrInstagram, GrTwitter } from 'react-icons/gr'
import { Container } from './styles'

export function Footer() {
  return (
    <Container>
      <nav className="siteLinks">
        <ul>
          <li>
            <Link href="#">Contato</Link>
          </li>
          <li>
            <Link href="#">Sobre</Link>
          </li>
          <li>
            <Link href="#">Dúvidas</Link>
          </li>
        </ul>
      </nav>

      <nav className="social">
        <Link href="">
          <a>
            <span>Instagram</span>
            <GrInstagram />
          </a>
        </Link>
        <Link href="">
          <a>
            <span>Facebook</span>
            <GrFacebookOption />
          </a>
        </Link>
        <Link href="">
          <a>
            <span>Twitter</span>
            <GrTwitter />
          </a>
        </Link>
      </nav>

      <p>© Copyright 2022 NOME DO SITE</p>
    </Container>
  )
}
