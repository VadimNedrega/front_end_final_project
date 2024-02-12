import React from "react";
import "./LoginForm.css"
import {FaUser, FaLock} from "react-icons/fa";
import {HomeButton} from "../../components";
import {Header} from "../../components";
import {Footer} from "../../components";
import {ROUTE} from '../../router';

export function LoginForm() {
    const buttonName = "Login";

    return (
        <div>
            <Header/>
            <div className="wrapper-container">
                <div className="wrapper">
                    <form action="">
                        <h1>Login</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Username" required/>
                            <FaUser className="icon"/>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required/>
                            <FaLock className="icon"/>
                        </div>

                        <div className="remember-forgot">
                            <label><input type="checkbox"/>Remember me </label>
                            <a href="#"> Forgot password?</a>
                        </div>

                        <button type="submit">
                            <HomeButton buttonName={buttonName}/>
                        </button>

                        <div className="register-link">
                            <p>Don't have an account? <a href={ROUTE.REGISTRATION}>Register</a></p>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}