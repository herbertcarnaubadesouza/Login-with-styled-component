import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 400px;

  padding-inline: 16rem;

  .about {
    position: relative;
    
    .title {
      text-transform: uppercase;
      letter-spacing: 0.25rem;

      margin-bottom: 1.5rem;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        &::before {
          content: "●";
          font-weight: bold;
          display: inline-block;
          width: 1em;
          margin-right: 0.5em;
        }
      }
    }
  }
`;