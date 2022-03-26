import styled from "styled-components";

interface ContainerProps {
  image: string;
  showTag?: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;

  padding: 1rem 2rem;
  min-height: 200px;
  max-width: 500px;
  /* aspect-ratio: 16 / 9; */

  color: white;
  border-radius: 0.5rem;
  box-shadow: 8px 8px 8px rgb(0 0 0 / 0.4);

  background-image: linear-gradient(rgb(0 0 0 / 0.2), rgb(0 0 0 / 0.2)),
                    linear-gradient(rgb(181 53 246 / 0.2), rgb(181 53 246 / 0.6)),
                    ${({ image }) => `url("${image}")`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .tag {
    display: ${({ showTag }) => showTag ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    position: absolute;
    inset: 0 0 auto auto;
    margin-right: 2rem;

    height: 4rem;
    width: 3.75rem;
    background-color: #FA2BAA;
    
    font-weight: 600;
    font-size: 0.8rem;
    text-transform: uppercase;

    border-radius: 0 0 8px 8px;

    span {
      font-size: 1.2rem;
      line-height: 1;
    }
  }

  h2, p {
    margin: 0;
  }

  h2 {
    text-transform: capitalize;
    max-width: ${({ showTag }) => showTag ? 'calc(100% - 3.75rem - 4px)' : '100%'};
  }

  hr {
    border: solid 1px rgb(255 255 255 / 0.4);
    width: 100%;
    height: 1px;
  }
`;

Container.defaultProps = {
  showTag: false,
}
