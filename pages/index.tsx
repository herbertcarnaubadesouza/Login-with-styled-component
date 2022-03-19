import {
  faFacebookF,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import {
  Body,
  ContentBox,
  FormBox,
  ImgBox,
  InputBox,
  Remember,
  SocialIcon,
  SocialMedia,
} from "./components";

const LoginAndRegister: NextPage = () => {
  return (
    <Body>
      <ImgBox>
        <img src="images/backImg.jpg" alt="" />
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
