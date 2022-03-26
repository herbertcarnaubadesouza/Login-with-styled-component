import styled from "styled-components";

export const ImgBox = styled.div`
  position: relative;
  width: 50%;
  height: 100%;

 
  &:before {
    content: "";
    position: absolute;
    //top: 0;
    //right: 0;
    width: 100%;
    height: 100%; 
    //teste
    background: linear-gradient(225deg,#27002c,#011118);
    z-index: 1;
    mix-blend-mode: screen;
  }

  img {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 820px) {
    position: absolute;  
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    &:before{      
      background: linear-gradient(225deg,#34003a,#011118);
    }
  }
`;

export const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //background: linear-gradient(90deg,#fa1660,#ff6e00);
  //ajuste
  background: linear-gradient(225deg,rgb(52 0 78),#00151e);
  width: 50%;
  height: 100%;

  @media (max-width: 820px) {
    display: flex;
    background: none;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 2;
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
    border-bottom: 4px solid rgb(181, 53, 246);;
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

    h2{
        display: flex;    
        justify-content: center;
        text-align: center;
        margin-left: 25%;
        margin-right: 25%;
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
    border: 1px solid rgb(181, 53, 246);;
    font-size: 16px;
    letter-spacing: 1px;
    color: whitesmoke;
    background: transparent;
    border-radius: 30px;
  }

  input[type="submit"] {
    background: rgb(181, 53, 246);;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 500;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background: #950a95;
  }

  p {
    color: whitesmoke;
    
  }

  p a {
    color: rgb(181, 53, 246);;
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
    color: rgb(181, 53, 246);;
    border-color: rgb(181, 53, 246);;
  }
`;