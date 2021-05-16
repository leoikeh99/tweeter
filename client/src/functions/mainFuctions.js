const validate = ({ username, password, email }) => {
  if (username.trim() === "") {
    return { value: false, msg: "Username is required" };
  } else if (email && email.trim() === "") {
    return { value: false, msg: "Invalid email" };
  } else if (password && password.trim() === "") {
    return { value: false, msg: "Password is required" };
  } else {
    return { value: true };
  }
};

export { validate };
