import axios from "axios";
import { Button } from "Components/Button";
import { CheckBox } from "Components/CheckBox";
import { Input } from "Components/Input";
import { Link } from "Components/Link";
import React, { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { emailValid } from "utils/email";

const Register = ({ loginLink }) => {


  const [username, setUserName] = useState("");

  const [password, setPassword] = useState("");

  const [confPassword, setConfPassword] = useState("");

  const [email, SetEmail] = useState("");


  const loginIsValid =
    password === confPassword &&
    password.length >= 10 &&
    emailValid(email) !== false &&
    username.length >= 5;


  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:3000/api/auth/register', {username, password, email})
      if(response.status === 201){
        loginLink = true
      }
    }catch(err){
      console.log(err)
    }
    
  }

  return (
    <div className="form-box register">
      <form action=""
      onSubmit={handleSubmit}>
        <h1>Registration</h1>
        <Input
          type={"text"}
          placeholder={"Username"}
          value={username}
          onChange={setUserName}
          icon={<FaUser className="icon" />}
          errorMensage="Username invalido"
          hasError={username.length < 5 && username !== ""}
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
          <CheckBox label={"I agree to the terms & conditions"} />
        </div>
        <Button label="Register" disabled={!loginIsValid} onClick={handleSubmit && loginLink}/>
        <Link
          mensage={"Already have an account?"}
          link={"Sign up"}
          linkAction={loginLink}
        />
      </form>
    </div>
  );
};

export default Register;
