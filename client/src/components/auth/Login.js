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

const Login = () => {
  const submit = (e) => e.preventDefault();
  return (
    <CenterWrapper>
      <LoginContainer>
        <img src={logo3} alt="" />
        <Header3 color={"grey"}>Login to Tweeter</Header3>
        <form action="" onSubmit={submit}>
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
            <LoginIcon /> LOGIN
          </Button>
        </form>
        <Small>
          Don't have an account? <StyledLink to="/register">Sign-up</StyledLink>
        </Small>
      </LoginContainer>
    </CenterWrapper>
  );
};
export default Login;
