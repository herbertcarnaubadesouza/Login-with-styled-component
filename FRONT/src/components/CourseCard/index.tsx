import { Container } from './styles'

interface CourseCardProps {
  imageURL: string;
  title: string;
  description: string;
  tag?: {
    label?: string;
    emphasis: string;
  };
}

export function CourseCard({ imageURL, title, description, tag }: CourseCardProps) {
  return (
    <Container image={imageURL} showTag={tag !== undefined}>
      <h2>{title}</h2>
      {tag && <p className='tag'>{tag?.label}<span>{tag?.emphasis}</span></p>}
      <hr />
      <p>{description}</p>
    </Container>
  )
}
