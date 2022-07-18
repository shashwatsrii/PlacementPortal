import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
import Logo from "../../assets/Logo.png";

function CompanyLogin() {
  return (
    <>
            <div className="container">
                <div className="container1">
                    <div className="leftContainer">
                        <div className="WelcomeText">
                           <b> Welcome to Placement Portal !</b>
                        </div>
                        <form action="/" method="post" id="form">
                            <div className="EmailInput">
                                <input id="EmailInput2" type="email" name="email" className="login-input" placeholder="Enter Your Email" required /><b><script></script></b>
                            </div>
                            {/* <div className="PasswordHeading">
                                Password
                            </div> */}
                            <div className="PasswordInput">
                                <input id="PasswordInput2" name="password" type="password" className="login-input" placeholder="Enter Your Password" required />
                            </div>
                            <div className="reset">
                                <b> Reset Password</b>
                            </div>
                            <div className="loginButton">
                                <button id="LoginButton" className="login-input">
                                <Link to='/CompanyDashboard'  className='LoginLink'> Login</Link>
                                </button>
                            </div>
                            <div className='SignUP'>
                                  <div className='SignUpBtn'>Dont have an account? <Link to='/Register' >Click here</Link> to sign up.</div>
                            </div>
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

export default CompanyLogin