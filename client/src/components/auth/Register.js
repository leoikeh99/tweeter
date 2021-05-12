import React from "react";
import {
  CenterWrapper,
  LoginContainer,
  Label,
  Input,
  Button,
  Header3,
  StyledLink,
  Small,
} from "../StyledComponents";
import { RiLoginBoxLine as LoginIcon } from "react-icons/ri";
import { FaRegUserCircle, FaEnvelope, FaLock } from "react-icons/fa";
import logo3 from "../../images/logo3.svg";

const Register = () => {
  const submit = (e) => e.preventDefault();
  return (
    <CenterWrapper>
      <LoginContainer>
        <img src={logo3} alt="" />
        <Header3 color={"grey"}>SignUp to Tweeter</Header3>
        <form action="" onSubmit={submit}>
          <br />
          <Label>Username</Label>
          <Input>
            <input type="text" required minLength={3} />
            <FaRegUserCircle />
          </Input>
          <br />
          <Label>Email</Label>
          <Input>
            <input type="email" required />
            <FaEnvelope />
          </Input>
          <br />
          <Label>Password</Label>
          <Input>
            <input type="password" required minLength={6} />
            <FaLock />
          </Input>
          <br />
          <Button fullWidth>
            <LoginIcon /> SIGN UP
          </Button>
        </form>
        <Small>
          Already have an account? <StyledLink to="/login">Sign-in</StyledLink>
        </Small>
      </LoginContainer>
    </CenterWrapper>
  );
};

export default Register;
