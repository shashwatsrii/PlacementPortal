import React from 'react'
import "./CmpRegForm.css"

function CmpRegForm() {
    return (
    <>
            <div className='bodySignUpReg'>
                <div className="signup-boxReg">
                    <h1>
                        Sign Up
                    </h1>
                    <form className='formCompReg'>
                        <label><b>First Name</b></label>
                        <input type="text" placeholder="" />
                        <label><b>Last Name</b></label>
                        <input type="text" placeholder="" />
                        <label><b>Email</b></label>
                        <input type="email" placeholder="" />
                        <label><b>Password</b></label>
                        <input type="password" placeholder="" />
                        <label><b>Confirm Password</b></label>
                        <input type="password" placeholder="" />
                        <label><b>Name of your Company</b></label>
                        <input type="company" placeholder="" />
                        <label><b>Your Website</b></label>
                        <input type="websiteReg" placeholder="" />
                        <div classNameName="submitbuttonReg">
                            <input type="button" value="Submit" />
                        </div>
                    </form>
                    <p className="para-2">
                        Already have an account? <a href="login.html">Login here</a>
                    </p>
                </div>
                </div>
            </>
            )
}

            export default CmpRegForm