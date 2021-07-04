import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Alert, Text } from "../styled_components/components";
import { FaTimes } from "react-icons/fa";
import { connect } from "react-redux";
import { authUser, clearAlert } from "../../actions/authActions";
import logo3 from "../../images/logo3.svg";

const Register = ({
  auth: { loader, alert, token },
  authUser,
  clearAlert,
  history,
}) => {
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const submit = (e) => {
    e.preventDefault();
    authUser("register", data);
  };

  useEffect(() => {
    if (token) {
      history.push("/");
    }
  }, [token, history]);

  return (
    <div className="h-screen w-full flex items-center justify-center flex-col">
      <img src={logo3} alt="" />
      <h1 className="font-poppins font-semibold text-2xl mb-5">
        Sign Up to Tweeter
      </h1>
      <div className="p-5  sm:border-2 border-primary rounded w-11/12 sm:w-96">
        <div style={{ marginBottom: "5px" }}></div>
        {alert && alert.type === "error" && (
          <Alert>
            <Text>{alert.msg}</Text>
            <FaTimes onClick={clearAlert} />
          </Alert>
        )}
        <div style={{ marginBottom: "5px" }}></div>
        <form action="" onSubmit={submit}>
          <label className="font-poppins text-gray1 font-semibold">
            Username
          </label>
          <div className="px-3 border-2 border-gray4 rounded flex items-center justify-between focus-within:border-primary mb-3">
            <input
              className="h-11 w-11/12"
              type="text"
              required
              minLength={3}
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
              name="username"
            />
            <i class="fas fa-user-circle text-gray4 text-xl"></i>
          </div>
          <label className="font-poppins text-gray1 font-semibold">Email</label>
          <div className="px-3 border-2 border-gray4 rounded flex items-center justify-between focus-within:border-primary mb-3">
            <input
              className="h-11 w-11/12"
              type="email"
              required
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              name="email"
            />
            <i class="fas fa-envelope text-gray4 text-xl"></i>
          </div>
          <label className="font-poppins text-gray1 font-semibold">
            Password
          </label>
          <div className="px-3 border-2 border-gray4 rounded flex items-center justify-between focus-within:border-primary mb-3">
            <input
              className="h-11 w-11/12"
              type="password"
              required
              minLength={6}
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              name="password"
            />
            <i class="fas fa-lock text-gray4 text-xl"></i>
          </div>
          <button className="w-full py-2.5 flex items-center justify-center gap-2 bg-primary text-white rounded">
            {!loader ? (
              <i class="fas fa-sign-in-alt"></i>
            ) : (
              <i class="fas fa-circle-notch animate-spin"></i>
            )}
            Sign Up
          </button>
        </form>
        <small className="block mt-2">
          Don't have an account?{" "}
          <Link to="/login" className="text-primary">
            Login
          </Link>
        </small>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, { authUser, clearAlert })(Register);
