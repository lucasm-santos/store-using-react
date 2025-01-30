import React, { useState } from "react";
import Login from "../Login";
import Register from "../Register";
import "./LoginRegister.css";

const LoginRegister = () => {
  const [action, setAction] = useState("");

  return (
    <div className={`wrapper${action}`}>
      <Login registerLink={() => setAction(" active ")} />
      <Register loginLink={() => setAction("")} />
    </div>
  );
};
export default LoginRegister;
