import styled from "styled-components";

export const PageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  background: linear-gradient(225deg, #34003a, #011118);

  color: white;

  &::before {
    content: "";
    position: absolute;
    background-image: url("/images/backimg.jpg");
    height: 52vh;
    width: 100%;
    opacity: 0.2;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;