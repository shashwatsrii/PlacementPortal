import React from 'react';
import './Login.css';
import Logo from "../../assets/Logo.png";

function Login() {
    return (
        <>
            <div className="container">
                <div className="container1">
                    <div className="leftContainer">
                        <div className="logo">
                            <img id="logo" src={Logo} alt="Logo" />
                        </div>
                        <div className="EmailHeading">
                            Email
                        </div>
                        <form action="/" method="post" id="form">
                            <div className="EmailInput">
                                <input id="EmailInput" type="email" name="email" className="login-input" placeholder="Enter Your Email" required /><b><script></script></b>
                            </div>
                            <div className="PasswordHeading">
                                Password
                            </div> 
                            <div className="PasswordInput">
                                <input id="PasswordInput" name="password" type="password" className="login-input" placeholder="Enter Your Password" required />
                            </div>
                            <div className="reset">
                                <b> Reset Password</b>
                            </div> 
                            <div className="loginButton">
                                <button id="LoginButton" className="login-input">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="container2">
                    <div className="rightContainer">
                        <div className="juit">Jaypee University Of Information Technology
                        </div>
                        <div className="approval">Approved by  UGC under Section 2f of UGC Act</div>
                    </div>

                </div>


            </div>


        </>
    )
}

export default Login;