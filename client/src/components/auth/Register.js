import React, { useState } from "react";
import {
  CenterWrapper,
  LoginContainer,
  Label,
  Input,
  Button,
  Header3,
  StyledLink,
  Small,
  Alert,
  Text,
  Loader,
} from "../StyledComponents";
import { RiLoginBoxLine as LoginIcon, RiLoader3Fill } from "react-icons/ri";
import { FaRegUserCircle, FaEnvelope, FaLock, FaTimes } from "react-icons/fa";
import { connect } from "react-redux";
import { authUser, clearAlert } from "../../actions/authActions";
import logo3 from "../../images/logo3.svg";

const Register = ({ auth: { loader, alert }, authUser, clearAlert }) => {
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const submit = (e) => {
    e.preventDefault();
    authUser("register", data);
  };
  return (
    <CenterWrapper>
      <LoginContainer>
        <img src={logo3} alt="" />
        <Header3 color={"grey"}>SignUp to Tweeter</Header3>
        <div style={{ marginBottom: "5px" }}></div>
        {alert && alert.type === "error" && (
          <Alert>
            <Text>{alert.msg}</Text>
            <FaTimes onClick={clearAlert} />
          </Alert>
        )}
        <div style={{ marginBottom: "5px" }}></div>
        <form action="" onSubmit={submit}>
          <Label>Username</Label>
          <Input>
            <input
              type="text"
              required
              minLength={3}
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
              name="username"
            />
            <FaRegUserCircle />
          </Input>
          <br />
          <Label>Email</Label>
          <Input>
            <input
              type="email"
              required
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              name="email"
            />
            <FaEnvelope />
          </Input>
          <br />
          <Label>Password</Label>
          <Input>
            <input
              type="password"
              required
              minLength={6}
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              name="password"
            />
            <FaLock />
          </Input>
          <br />
          <Button fullWidth>
            {loader ? (
              <Loader>
                <RiLoader3Fill />
              </Loader>
            ) : (
              <LoginIcon />
            )}{" "}
            SIGN UP
          </Button>
        </form>
        <Small>
          Already have an account? <StyledLink to="/login">Sign-in</StyledLink>
        </Small>
      </LoginContainer>
    </CenterWrapper>
  );
};

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, { authUser, clearAlert })(Register);
