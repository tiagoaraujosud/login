import React from "react";
import {FaUser, FaLock} from 'react-icons/fa';

const Login = () => {
    return (
        <div className="container">
            <form>
                <h1>Login Page</h1>
                <div>
                    <input type="email" placeholder="E-mail" />
                    <FaUser />
                </div>
                <div>
                    <input type="password" placeholder="Password" />
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