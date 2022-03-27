import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  padding: 1rem 3rem;
  padding-bottom: 3.5rem;

  nav.siteLinks {
    margin-bottom: 2rem;

    ul {
      list-style: none;
      
      display: flex;
      justify-content: center;
      gap: 4rem;
      
      padding: 0;
      margin: 0;

      li {
        font-size: 1.5rem;
        line-height: 1;
        a {
          &:after {
            content: "+";
            margin-left: 1rem;
            line-height: 1;
          }

          &:hover, &:focus {
            cursor: pointer;
            filter: brightness(0.7);
          }
        }

      }
    }
  }

  nav.social {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    a {
      display: grid;
      place-content: center;

      width: 2.5rem;
      aspect-ratio: 1 / 1;

      border-radius: 50%;
      border: 2px solid white;

      font-size: 1.2rem;

      &:hover, &:focus {
        filter: brightness(0.7);
      }

      span {
        display: none;
      }
    }
  }

  p {
    font-size: 0.9rem;
  }
`;
