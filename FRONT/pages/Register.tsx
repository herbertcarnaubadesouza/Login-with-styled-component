import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Body,
  ContentBox,
  FormBox,
  ImgBox,
  InputBox,
  Remember,
  SocialIcon,
  SocialMedia,
} from "./components/register";

const register = () => {
  return (
    <Body>
     
      <ContentBox>
        <FormBox>
          <h2>Sign Up</h2>

          <form>
            <InputBox>
              <span>Email</span>
              <input type="text" name="" />
            </InputBox>
            <InputBox>
              <span>Username</span>
              <input type="text" name="" />
            </InputBox>
            <InputBox>
              <span>Password</span>
              <input type="password" name="" />
            </InputBox>

            <InputBox>
              <input type="submit" value="Sign Up" name="" />
            </InputBox>
            <InputBox>
              <p>
                Already have an account? <a href="#">Sign in</a>
              </p>
            </InputBox>
          </form>
          <h3>Sign Up with </h3>
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

      <ImgBox>
        <img src="images/register.jpg" alt="" />
      </ImgBox>
    </Body>
  );
};

export default register;
