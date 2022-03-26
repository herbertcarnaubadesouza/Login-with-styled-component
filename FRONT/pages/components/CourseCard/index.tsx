import { Container } from './styles'

interface CourseCardProps {
  imageURL: string;
}

export function CourseCard({ imageURL }: CourseCardProps) {
  return (
    <Container image={imageURL} showTag>
      <h2>Um curso com um título muito grande</h2>
      <p className='tag'>TOP<span>5</span></p>
      <hr />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis aperiam doloribus saepe? Nobis, quam earum.</p>
    </Container>
  )
}
