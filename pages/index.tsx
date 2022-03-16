import { faFacebookF, faGoogle, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import styled from "styled-components";

const ImgBox = styled.div`
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
    background: linear-gradient(225deg, #e91e63, #03a9f4);
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
  }
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;

  @media (max-width: 820px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

`;

const FormBox = styled.div`
  width: 50%;

  h2 {
    color: #607d8b;
    font-weight: 600;
    font-size: 1.5rem;
    text-transform: uppercase;
    margin-bottom: 20px;
    border-bottom: 4px solid #ff4584;
    display: inline-block;
    letter-spacing: 1px;
  }

  h3 {
    color: #607d8b;
    text-align: center;
    margin: 80px 0 10px;
    font-weight: 500;
  }

  @media (max-width: 820px) {
    width: 100%;
    padding: 40px;
    background: rgb(255 255 255/0.9);
    margin: 30px;
    border-radius: 10px;

    h3{
      color: #607d8b;
      text-align: center;
      margin: 30px 0 10px;
      font-weight: 500;
    }
  }

  @media (max-width: 500px){
    padding: 20px;
    border-radius: 10px;
  }


`;

const InputBox = styled.div`
  margin-bottom: 20px;

  span {
    font-size: 16px;
    margin-bottom: 5px;
    display: inline-block;
    color: #607db8;
    font-weight: 300;
    font-size: 16px;
    letter-spacing: 1px;
  }

  input {
    width: 100%;
    padding: 10px 20px;
    outline: none;
    font-weight: 400;
    border: 1px solid #607db8;
    font-size: 16px;
    letter-spacing: 1px;
    color: #607db8;
    background: transparent;
    border-radius: 30px;
  }

  input[type="submit"] {
    background: #ff4584;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 500;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background: #f53677;
  }

  p {
    color: #607db8;
  }

  p a {
    color: #ff4584;
  }
`;

const Remember = styled.div`
  margin-bottom: 10px;
  color: #607d8b;
  font-weight: 400;
  font-size: 14px;
`;

const Body = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  height: 50px;
  width: 50px;
  border: 1px solid #607d8b;
  margin: 0 0.45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #607d8b;
  font-size: 1.4rem;
  border-radius: 50%;
  transition: 0.3;

  &:hover {
    color: #ff4584;
    border-color: #ff4584;
  }
`;

const LoginAndRegister: NextPage = () => {
  return (
    <Body>
      <ImgBox>
        <img src="images/backImg.png" alt="" />
      </ImgBox>

      <ContentBox>
        <FormBox>
          <h2>Login</h2>
          <form>
            <InputBox>
              <span>Username</span>
              <input type="text" name="" />
            </InputBox>
            <InputBox>
              <span>Password</span>
              <input type="password" name="" />
            </InputBox>
            <Remember>
              <label>
                <input type="checkbox" name="" />
                Remember me
              </label>
            </Remember>
            <InputBox>
              <input type="submit" value="Sign In" name="" />
            </InputBox>
            <InputBox>
              <p>
                Don't have an account? <a href="#">Sign up</a>
              </p>
            </InputBox>
          </form>
          <h3>Login with social media</h3>
          <SocialMedia>
            <SocialIcon>
              <FontAwesomeIcon icon={faFacebookF} />
            </SocialIcon>
            <SocialIcon>
              <FontAwesomeIcon icon={faGoogle} />
            </SocialIcon>
          </SocialMedia>
        </FormBox>
      </ContentBox>
    </Body>
  );
};

export default LoginAndRegister;
