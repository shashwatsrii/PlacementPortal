import React, { Component } from "react";
import {Route , Switch} from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/ComponentsLoginPage/Login.js"
import RegistrationForm from "./Pages/CmpRegForm/CmpRegForm"
import StdDashboard from "./Pages/ComponentsStdDash/StdDash"
import StudentForm from "./Pages/StdRegForm/StdRegForm"
import AddJob from "./Pages/AddJob/AddJob"
import JobDescription from "./Pages/JobDescription/JobDescription"
import CmpDashboard from "./Pages/ComponentsCmpDash/CmpDash"
import Error from "./Pages/Error";
import CompanyLogin from "./Pages/ComponentsLoginPage/CompanyLogin";
import JobFeed from "./Pages/ComponentsStdDash/JobFeed";
import SubmittedSucess from "./Pages/AddJob/FormSubmitted";
import Profile from "./Pages/ProfilePage/Profile";
import Landing from "./Pages/LandingPage/Landing";



class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <>
              
                {/* <p className="App-intro">;{this.state.apiResponse}</p> */}
                <Switch>
                    <Route exact path="/" component = {Landing} />
                    <Route exact path="/Login" component = {LoginPage} />
                    <Route exact path="/Profile" component = {Profile} />
                    <Route exact path="/cmpLogin" component = {CompanyLogin} />
                    <Route exact path="/Register" component = {RegistrationForm} />
                    <Route exact path="/StudentDashboard" component = {StdDashboard} />
                    <Route exact path="/StudentDashboard/JobDescription" component = {JobDescription} />
                    <Route exact path="/StudentDashboard/JobApplication" component = {StudentForm} />
                    <Route exact path="/StudentDashboard/JobFeed" component = {JobFeed} />
                    <Route exact path="/CompanyDashboard" component = {CmpDashboard} />
                    <Route exact path="/CompanyDashboard/AddJob" component = {AddJob} />
                    <Route exact path="/CompanyDashboard/AddJob/Success" component = {SubmittedSucess} />
                    <Route component = {Error} />
                </Switch>
                <p className="App-intro">;{this.state.apiResponse}</p>
            
            </>            
        );
    }
}

export default App;