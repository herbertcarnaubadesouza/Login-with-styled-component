import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }

  .course {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .course-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h3 {
        max-width: 30ch;
        text-transform: capitalize;
        font-size: 1.5rem;
        font-weight: 600;
        text-align: left;
      }

      .launch-date {
        max-width: fit-content;
        padding: 0.125rem 0.5rem;

        background-image: linear-gradient(90deg, #FA2BAA, #7714A8);
        text-transform: uppercase;
        font-size: 0.9rem;
        font-weight: 700;
        letter-spacing: 2px;
      }
    }

    .course-description {
      text-align: left;
      font-weight: 300;
      line-height: 1.8;
    }

    .course-instructors {
      display: flex;
      gap: 1rem;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;

      .instructor {
        .instructor-photo {
          width: 5rem;
          aspect-ratio: 1 / 1;
          border-radius: 100%;
          margin-bottom: 0.5rem;
        }
        .instructor-name {
          text-transform: uppercase;
        }
      }
    }
  }

  .video-container {

  }
`