import React, { useState } from 'react';
import "./LoginRegister.css";
import { FaUser, FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const LoginRegister = () => {

    const [action, setAction] = useState('');

    const [userName, setUserName] = useState('');

    const [password, setPassword] = useState('');

    const [confPassword, setConfPassword] = useState('');

    const [submited, setSubmited] = useState(false);

    const passwordValid = password == confPassword && password.length >= 10;

    const registerLink = () => {
        setAction(' active ')
    };

    const loginLink = () => {
        setAction('')
    };

    return (
        <div className={`wrapper${action}`}>
            <div className="form-box login">
                <form onSubmit={(event) => {
                    event.preventDefault()
                    setSubmited(true)
                }} action="">
                    <h1>Login</h1>
                    <label className="input-box">
                        <input type="text" placeholder="Username" onChange={(item) => setUserName(item.currentTarget.value)} value={userName} />
                        <FaUser className="icon" />
                    </label>
                    <p>{submited && userName.length < 5 && 'ajeita ae'}</p>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                        <FaLock className="icon" />
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember-me</label>
                        <a href="#">Forgot passowrd?</a>
                    </div>
                    <button type="submit">Login</button>
                    <div className="register-link">
                        <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a></p>
                    </div>
                </form>
            </div>
            <div className="form-box register">
                <form action="">
                    <h1>Registration</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                        <FaUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder="Email" required />
                        <IoMdMail className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required minLength={10} maxLength={25} onChange={(event) => setPassword(event.currentTarget.value)} />
                        <FaLock className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Confirm Password" minLength={10} maxLength={25} onChange={(event) => setConfPassword(event.currentTarget.value)} />
                        <FaLock className="icon" />
                    </div>
                    {password != confPassword && 'ta igual nn prc'}
                    <div className="remember-forgot">
                        <label><input type="checkbox" required />I agree to the terms & conditions</label>
                    </div>
                    <button type="submit" disabled={!passwordValid}>Register</button>
                    <div className="register-link">
                        <p>Already have an account? <a href="#" onClick={loginLink}>Sign up</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default LoginRegister