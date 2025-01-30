import { Button } from "Components/Button";
import { Input } from "Components/Input";
import React, { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { emailValid } from "utils/email";

const Register = ({ loginLink }) => {
  const [userName, setUserName] = useState("");

  const [password, setPassword] = useState("");

  const [confPassword, setConfPassword] = useState("");

  const [email, SetEmail] = useState("");

  const loginIsValid =
    password === confPassword &&
    password.length >= 10 &&
    emailValid(email) !== false &&
    userName.length > 5;

  return (
    <div className="form-box register">
      <form action="">
        <h1>Registration</h1>
        <Input
          type={"text"}
          placeholder={"Username"}
          value={userName}
          onChange={setUserName}
          icon={<FaUser className="icon" />}
          errorMensage="Username invalido"
          hasError={userName.length < 5 && userName !== ""}
        />
        <Input
          type={email}
          placeholder={"Email"}
          value={email}
          onChange={SetEmail}
          icon={<IoMdMail className="icon" />}
          errorMensage="o email é invalido"
          hasError={!emailValid(email) && email !== ""}
        />
        <Input
          type={"password"}
          placeholder={"Password"}
          maxLength={25}
          value={password}
          onChange={setPassword}
          icon={<FaLock className="icon" />}
          errorMensage="senha muito curta"
          hasError={password.length < 10 && password !== ""}
        />
        <Input
          type={"password"}
          placeholder={"Confirm password"}
          value={confPassword}
          onChange={setConfPassword}
          icon={<FaLock className="icon" />}
          errorMensage="senha e confirmar senha precisam ser iguais"
          hasError={password !== confPassword && confPassword !== ""}
        />
        <div className="remember-forgot">
          <label>
            <input type="checkbox" required />I agree to the terms & conditions
          </label>
        </div>
        <Button label="Register" disabled={!loginIsValid} />
        <div className="register-link">
          <p>
            Already have an account?{" "}
            <a href="#" onClick={loginLink}>
              Sign up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
