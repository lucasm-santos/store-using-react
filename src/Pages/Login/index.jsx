import { Button } from "Components/Button";
import { Input } from "Components/Input";
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
        <Input
          type={"text"}
          placeholder={"Username"}
          value={userName}
          onChange={setUserName}
          icon={<FaUser className="icon" />}
          errorMensage={"Username invalido"}
          hasError={submited && userName.length < 5}
        />
        <Input
          type={"password"}
          placeholder={"Password"}
          value={password}
          onChange={setPassword}
          icon={<FaLock className="icon" />}
          errorMensage={"senha invalida"}
          hasError={submited && password.length < 10}
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
