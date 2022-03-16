import styled from "styled-components";

export const ImgBox = styled.div`
  position: relative;
  width: 50%;
  height: 100%;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; 
    //teste
    background: linear-gradient(225deg,#340012,#002130);
    z-index: 1;
    mix-blend-mode: screen;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 820px) {
    position: absolute;  
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    &:before{      
      background: linear-gradient(225deg,#830000,#002130);
    }
  }
`;

export const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //background: linear-gradient(90deg,#fa1660,#ff6e00);
  //ajuste
  background: linear-gradient(225deg,#420017,#011924);
  width: 50%;
  height: 100%;

  @media (max-width: 820px) {
    display: flex;
    background: none;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;

export const FormBox = styled.div`
  width: 70%;

  h2 {
    color: whitesmoke;
    font-weight: 600;
    font-size: 1.5rem;
    text-transform: uppercase;
    margin-bottom: 20px;
    border-bottom: 4px solid #fc3c36;
    display: inline-block;
    letter-spacing: 1px;
  }

  h3 {
    color: whitesmoke;
    text-align: center;
    margin: 80px 0 10px;
    font-weight: 500;
  }

  @media (max-width: 820px) {
    width: 100%;
    padding: 40px;
    background: rgb(0 0 0/0.9);
    margin: 30px;
    border-radius: 10px;

    h3 {
      color: whitesmoke;
      text-align: center;
      margin: 30px 0 10px;
      font-weight: 500;
    }
  }

  @media (max-width: 500px) {
    padding: 20px;
    border-radius: 10px;
  }
`;

export const InputBox = styled.div`
  margin-bottom: 20px;

  span {
    font-size: 16px;
    margin-bottom: 5px;
    display: inline-block;
    color: whitesmoke;
    font-weight: 300;
    font-size: 16px;
    letter-spacing: 1px;
  }

  input {
    width: 100%;
    padding: 10px 20px;
    outline: none;
    font-weight: 400;
    border: 1px solid #fc3c36;
    font-size: 16px;
    letter-spacing: 1px;
    color: whitesmoke;
    background: transparent;
    border-radius: 30px;
  }

  input[type="submit"] {
    background: #fc3c36;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 500;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background: #dd332e;
  }

  p {
    color: whitesmoke;
    
  }

  p a {
    color: #fc3c36;
    text-decoration: underline;
  }
`;

export const Remember = styled.div`
  margin-bottom: 10px;
  color: whitesmoke;
  font-weight: 400;
  font-size: 14px;
`;

export const Body = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const SocialIcon = styled.a`
  height: 50px;
  width: 50px;
  border: 1px solid whitesmoke;
  margin: 0 0.45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: whitesmoke;
  font-size: 1.4rem;
  border-radius: 50%;
  transition: 0.3;

  &:hover {
    color: #fc3c36;
    border-color: #fc3c36;
  }
`;