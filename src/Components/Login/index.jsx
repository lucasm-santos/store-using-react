import React, { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";

const Login = ({ registerLink }) => {
  const [userName, setUserName] = useState("");

  const [password, setPassword] = useState("");

  const [submited, setSubmited] = useState(false);

  return (
    <div className="form-box login">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSubmited(true);
        }}
        action=""
      >
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            onChange={(item) => setUserName(item.currentTarget.value)}
            value={userName}
          />
          <FaUser className="icon" />
        </div>
        <p className="error-msg">
          {submited && userName.length < 5 && "Username invalido"}
        </p>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.currentTarget.value)}
            value={password}
          />
          <FaLock className="icon" />
        </div>
        <p className="error-msg">
          {submited && password.length < 10 && "senha incorreta"}
        </p>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember-me
          </label>
          <a href="#">Forgot passowrd?</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>
            Don't have an account? <a onClick={registerLink}>Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Login;
