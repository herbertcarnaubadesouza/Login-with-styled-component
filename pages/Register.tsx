import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import styled from "styled-components";
import { SocialIcon, SocialMedia } from "./components";

const Container = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const Shape1 = styled.div`
  //Padrão para os dois Shapes
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;

  top: -7rem;
  left: -3.5rem;
  //background: linear-gradient(225deg,rgb(52 0 78),#00151e);
  background: linear-gradient(180deg, #12192c 0%, rgba(196, 196, 196, 0) 100%);

  @media (min-width: 968px) {
    width: 400px;
    height: 400px;
    top: -11rem;
    left: -6.5rem;
  }
`;

const Shape2 = styled.div`
  //Padrão para os dois Shapes
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;

  bottom: -6rem;
  right: -5.5rem;
  background: linear-gradient(180deg, #12192c 0%, rgba(196, 196, 196, 0) 100%);
  transform: rotate(180deg);

  @media (min-width: 968px) {
    width: 300px;
    height: 300px;
    right: -6.5rem;
  }
`;

const Form = styled.div`
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;

  form {
    width: 290px;
  }

  img {
    display: none;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  @media (min-width: 968px) {
    grid-template-columns: 1.5fr 1fr;
    padding: 0 2rem;

    form {
      width: 400px;
    }

    img {
      display: block;
      width: 700px;
      justify-self: center;
    }
  }
`;

const FormDivOne = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 7% 93%;
  margin-bottom: 1.5rem;
  padding: 0.25rem 0;
  border-bottom: 1px solid #8590ad;
`;

const FormDivTwo = styled.div`
  //Não sei se está certo
  position: relative;
  display: grid;
  grid-template-columns: 7% 93%;
  margin-bottom: 1rem;
  padding: 0.25rem 0;
  border-bottom: 1px solid #8590ad;

  margin-bottom: 3rem;
`;

const Icon = styled.div`
  font-size: 1.4rem;
  color: #8590ad;
`;

const FormInput = styled.div`
  position: relative;

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: none;
    margin-bottom: 4rem;
    padding: 0.7rem 0.75rem;
    font-size: 1.5rem;
    color: #12192c;
  }

  input::placeholder {
    left: 0.75rem;
    top: 0.25rem;
    font-size: 1.3rem;
    color: #8590ad;
  }
`;

const SubmitForm = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 16px;
  outline: none;
  border: none;
  margin-bottom: 3rem;
  background-color: #12192c;
  color: #fff;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 15px 36px rgba(0, 0, 0.15);
  }
`;

const FormSocial = styled.div`
  text-align: center;

  span {
    display: block;
    font-size: 17px;
    margin-bottom: 1rem;
  }

  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    margin-right: 1rem;
    padding: 0%.5rem;
    background-color: #8590ad;
    color: #fff;
    font-size: 1.25rem;
    border-radius: 50%;
  }

  a:hover {
    background-color: #12192c;
    color: #fff;
  }
`;

const register = () => {
  return (
    <Container>
      <Shape1></Shape1>
      <Shape2></Shape2>

      <Form>
        <img src="images/students.png" alt="" />

        <form action="">
          <h1>Welcome</h1>

          <FormDivOne>
            <Icon>
              <FontAwesomeIcon icon={faUser} />
            </Icon>

            <FormInput>
              <input type="text" placeholder="Username" required />
            </FormInput>
          </FormDivOne>

          <FormDivOne>
            <Icon>
              <FontAwesomeIcon icon={faEnvelope} />
            </Icon>

            <FormInput>
              <input type="text" placeholder="Email" required />
            </FormInput>
          </FormDivOne>
          <FormDivTwo>
            <Icon>
              <FontAwesomeIcon icon={faLock} />
            </Icon>

            <FormInput>
              <input type="password" placeholder="Password" required />
            </FormInput>
          </FormDivTwo>

          <SubmitForm type="button" value="Login" />

          <FormSocial>
            <span>Or login with</span>

            <a href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
          </FormSocial>
        </form>
      </Form>
    </Container>
  );
};

export default register;
