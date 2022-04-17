import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  border-radius: 100rem; // A big number so it maintains the capsule shape
  border: none;

  color: white;
  font-weight: 600;
  letter-spacing: 1px;

  background-color: rgb(181 53 246);
  padding: 0.6rem 2rem;

  text-transform: capitalize;

  transition: filter 0.2s ease;

  &:hover, &:focus {
    filter: brightness(0.8);
  }
`;