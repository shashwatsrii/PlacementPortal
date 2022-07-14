import React from 'react';
import './Login.css';
import Logo from "../../assets/Logo.png";

function Login() {
    return (
        <>
            <div className="container">
                <div className="container1">
                    <div className="leftContainer">
                        <div className="WelcomeText">
                           <b> Welcome to Placement Portal !</b>
                        </div>
                        <select className='DropDownStdCmp' name="DropDownStdCmp" id="DropDown">
                            <option value="volvo">Student</option>
                            <option value="saab">Company</option>
                        </select>
                        {/* <div className="EmailHeading">
                            Email
                        </div> */}
                        <form action="/" method="post" id="form">
                            <div className="EmailInput">
                                <input id="EmailInput" type="email" name="email" className="login-input" placeholder="Enter Your Email" required /><b><script></script></b>
                            </div>
                            {/* <div className="PasswordHeading">
                                Password
                            </div> */}
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
                            <div className='SignUP'>
                                  <div className="DontHave"> Dont have an account? </div>
                                  <a href="../ComponentsStdDash/StdDash.js" className="Click"> Click Here </a>
                                  <div className="DontHave"> to sign up </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="container2">
                    <div className="rightContainer">
                    <div className="logoJUIT">
                            <img className="logoJUIT" id="logo" src={Logo} alt="Logo" />
                        </div>
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