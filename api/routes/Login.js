import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Logo from "../../assets/Logo.png";


function Login() {
    const [username,setusername]=useState("");
    const [password,setPassword]=useState("");

    const [loading,setloading]=useState(""); 
    
    // const navigate = useNavigate();
    // useEffect(() => {
        // if (localStorage.getItem('user-info')){
            // navigate.push("/add")
        // }

    // },[])
    async function login()
    {
        setloading(true)
        console.warn("data",username,password)
        let item={username,password}
        let result= await fetch('https://juit-webkiosk-api.herokuapp.com/v1.0/login',{
            method: 'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem('user-info',JSON.stringify(result))
        
        if(result.success === true)
        {
            localStorage.setItem('user-info',JSON.stringify(item));
            // navigate.push("/add")
            console.log(result)
        }
        else{
            setloading(false);
            return;
        }
    }
    return (
        <>
                        {loading ?
            <>
            loading   
        
            </>
        :
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
                                <input id="EmailInput" type="text" name="rollno" className="login-input" placeholder="Enter Your Roll Number" onChange={(e)=>setusername(e.target.value)} /><b><script></script></b>
                            </div>
                            {/* <div className="PasswordHeading">
                                Password
                            </div> */}
                            <div className="PasswordInput">
                                <input id="PasswordInput" name="password" type="password" className="login-input" placeholder="Enter Your Password" onChange={(e)=>setPassword(e.target.value)} />
                            </div>
                            {/* <div className="reset">
                                <b> Reset Password</b>
                            </div> */}
                            <div className="loginButton">
                                <button onClick={login}id="LoginButton" className="login-input">
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
}
       </>
    )
}

export default Login;