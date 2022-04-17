import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 4rem;

  .platform {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    
    .platform-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      .platform-image {
        max-width: 10rem;
      }

      .platform-name {
        font-size: 1.2rem;
        font-weight: 600;
      }
    }

    hr {
      border: none;
      width: 7rem;
      height: 3px;
      background-color: rgb(181 53 246);
    }

    .device-list {
      list-style: none;
      margin: 0;
      padding: 0;
      text-align: center;

      li {
        font-size: 1rem;
        font-weight: 300;
      }
    }
  }
`
