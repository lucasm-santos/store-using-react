import { Button } from "Components/Button";
import { CheckBox } from "Components/CheckBox";
import { Input } from "Components/Input";
import { Link } from "Components/Link";
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
          <CheckBox label={"Remember-me"} />
          <a href="#">Forgot passowrd?</a>
        </div>
        <Button label="Login" />
        <Link
          mensage={"Don't have an account?"}
          link={"Register"}
          linkAction={registerLink}
        />
      </form>
    </div>
  );
};
export default Login;
