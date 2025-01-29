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
          {userName.length < 5 && userName !== "" && "Username Invalido"}
        </p>
        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            onChange={(item) => SetEmail(item.currentTarget.value)}
            value={email}
          />
          <IoMdMail className="icon" />
        </div>
        <p className="error-msg">
          {!emailValid(email) && email !== "" && "o email é invalido"}
        </p>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            minLength={10}
            maxLength={25}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
          <FaLock className="icon" />
        </div>
        <p className="error-msg">
          {password.length < 10 && password !== "" && "senha muito curta"}
        </p>
        <div className="input-box">
          <input
            type="password"
            placeholder="Confirm Password"
            minLength={10}
            maxLength={25}
            onChange={(event) => setConfPassword(event.currentTarget.value)}
          />
          <FaLock className="icon" />
        </div>
        <p className="error-msg">
          {password !== confPassword &&
            confPassword !== "" &&
            "senha e confirmar senha precisam ser iguais"}
        </p>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" required />I agree to the terms & conditions
          </label>
        </div>
        <button type="submit" disabled={!loginIsValid}>
          Register
        </button>
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
