import axios from "axios";
import { Button } from "Components/Button";
import { CheckBox } from "Components/CheckBox";
import { Input } from "Components/Input";
import { Link } from "Components/Link";
import React, { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = ({ registerLink }) => {
  const [username, setUserName] = useState("");

  const navigate = useNavigate()

  const [password, setPassword] = useState("");

  const [submited, setSubmited] = useState(false);

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:3000/api/auth/login', {username, password})
      console.log(username, password)
      if(response.status === 200){
        localStorage.setItem('token', response.data.token);
        navigate('/')
      }
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="form-box login">
      <form action=""
        onSubmit={handleSubmitLogin}
      >
        <h1>Login</h1>
        <Input
          type={"text"}
          placeholder={"Username"}
          value={username}
          onChange={setUserName}
          icon={<FaUser className="icon" />}
          errorMensage={"Username invalido"}
          hasError={submited && username.length < 5}
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
        <Button label="Login"/>
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
