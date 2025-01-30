import { Button } from "Components/Button";
import { ErrorMsg } from "Components/ErrorMsg";
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
        <ErrorMsg
          mensage={"Username invalido"}
          isVisible={submited && userName.length < 5}
        />
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.currentTarget.value)}
            value={password}
          />
          <FaLock className="icon" />
        </div>
        <ErrorMsg
          mensage={"senha incorreta"}
          isVisible={submited && password.length < 10}
        />
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember-me
          </label>
          <a href="#">Forgot passowrd?</a>
        </div>
        <Button label="Login" />
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
