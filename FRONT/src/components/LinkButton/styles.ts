import styled from "styled-components";

export const Button = styled.a`
  cursor: pointer;
  border-radius: 100rem; // A big number so it maintains the capsule shape
  border: none;

  color: white;
  font-weight: 600;
  letter-spacing: 1px;

  background-color: rgb(181 53 246);
  padding: 0.6rem 2rem;

  text-transform: capitalize;

  &:hover, &:focus {
    filter: brightness(0.85);
  }
`;