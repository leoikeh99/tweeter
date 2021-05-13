import React, { useEffect, useState } from "react";
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
} from "../styled_components/components";
import { RiLoginBoxLine as LoginIcon, RiLoader3Fill } from "react-icons/ri";
import { FaEnvelope, FaLock, FaTimes } from "react-icons/fa";
import { connect } from "react-redux";
import { authUser, clearAlert } from "../../actions/authActions";
import logo3 from "../../images/logo3.svg";

const Login = ({
  auth: { loader, alert, token },
  authUser,
  clearAlert,
  history,
}) => {
  const [data, setData] = useState({ email: "", password: "" });
  const submit = (e) => {
    e.preventDefault();
    authUser("login", data);
  };

  useEffect(() => {
    if (token) {
      history.push("/");
    }
  }, [token, history]);

  return (
    <CenterWrapper>
      <LoginContainer>
        <img src={logo3} alt="" />
        <Header3 color={"text4"}>Login to Tweeter</Header3>
        <div style={{ marginBottom: "5px" }}></div>
        {alert && alert.type === "error" && (
          <Alert>
            <Text>{alert.msg}</Text>
            <FaTimes onClick={clearAlert} />
          </Alert>
        )}
        <div style={{ marginBottom: "5px" }}></div>
        <form action="" onSubmit={submit}>
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
            )}
            LOGIN
          </Button>
        </form>
        <Small>
          Don't have an account? <StyledLink to="/register">Sign-up</StyledLink>
        </Small>
      </LoginContainer>
    </CenterWrapper>
  );
};

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, { authUser, clearAlert })(Login);
