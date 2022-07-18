import React from 'react';
import { Link } from 'react-router-dom';
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
                        <div className="IfCompany">
                            <Link className='IfCompany' to="/cmpLogin">
                            Click here if you are a Company !
                            </Link>
                        </div>
                        <div>
                            <b>Student Login</b>
                        </div>
                        {/* <div className="EmailHeading">
                            Email
                        </div> */}
                        <form action="/" method="post" id="form">
                            <div className="EmailInput">
                                <input id="EmailInput" type="text" name="rollno" className="login-input" placeholder="Enter Your Roll Number" required /><b><script></script></b>
                            </div>
                            {/* <div className="PasswordHeading">
                                Password
                            </div> */}
                            <div className="PasswordInput">
                                <input id="PasswordInput" name="password" type="password" className="login-input" placeholder="Enter Your Password" required />
                            </div>
                            {/* <div className="reset">
                                <b> Reset Password</b>
                            </div> */}
                            <div className="loginButton">
                                <button id="LoginButton" className="login-input">
                                   <Link to='/StudentDashboard' className='LoginLink' > Login</Link>
                                </button>
                            </div>
                            {/* <div className='SignUP'>
                                  <div className="DontHave"> Dont have an account? </div>
                                  <a href="../ComponentsStdDash/StdDash.js" className="Click"> Click Here </a>
                                  <div className="DontHave"> to sign up </div>
                            </div> */}
                        </form>
                    </div>
                </div>

                <div className="container2">
                    <div className="rightContainer">
                    <div className="logoJUIT">
                            <a href="https://www.juit.ac.in/" ><img className="logoJUIT" id="logo" src={Logo} alt="Logo" /></a>
                        </div>
                        <div className="juit"><a className='juit1' href="https://www.juit.ac.in/" >Jaypee University Of Information Technology</a>
                        </div>
                        <div className="approval">Approved by  UGC under Section 2f of UGC Act</div>
                    </div>

                </div>


            </div>


        </>
    )
}

export default Login;