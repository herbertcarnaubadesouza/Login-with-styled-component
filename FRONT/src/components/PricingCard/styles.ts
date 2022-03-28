import styled  from 'styled-components'

export const Container = styled.div`
  width: 300px;
  aspect-ratio: 3 / 4;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  padding: 2rem 1.5rem;
  color: white;
  border-radius: 0.5rem;
  /* background-image: linear-gradient(225deg,rgb(65, 0, 99), #001721) */
  /* background-image: linear-gradient(225deg, rgb(52 0 78), #00151e); */
  background-image: linear-gradient(225deg, #7714A8, #00151e);
  box-shadow: 4px 4px 1rem 0.2rem rgb(100 100 100 / 0.4);

  h3, p, ul {
    margin: 0;
  }

  .pricing-description {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    line-height: 1;
    letter-spacing: 1px;

    h3 {
      text-transform: uppercase;
      font-size: 1.25rem;
      font-weight: 300;
    }

    p {
      font-weight: 600;
      font-size: 2rem;
    }
  }


  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 0.9rem;

      &::before {
        content: "✓";
        color: rgb(181 53 246);
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
        margin-right: 0.25em;
      }
    }
  }
`;
