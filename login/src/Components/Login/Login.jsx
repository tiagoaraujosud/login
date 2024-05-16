import React from "react";
import {FaUser, FaLock} from 'react-icons/fa';

import { useState } from "react";

import "./Login.css";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Login Page</h1>
                <div>
                    <input type="email" placeholder="E-mail" onChange={(e) => setUsername(e.target.value)}/>
                    <FaUser />
                </div>
                <div>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    <FaLock />
                </div>

                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Remember me
                    </label>
                    <a href="#"> Forgot password</a>
                </div>
                <button>Enter</button>
                <div className="signup-link">
                    <p>Don't have an account? <a href="#">Sign up</a></p>
                </div>
            </form>
        </div>
    )
}

export default Login;