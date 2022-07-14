import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./Pages/ComponentsLoginPage/Login.js"
import StdDashboard from "./Pages/ComponentsStdDash/StdDash"
import StudentForm from "./Pages/StdRegForm/StdRegForm"
import AddJob from "./Pages/AddJob/AddJob"
import JobDescription from "./Pages/JobDescription/JobDescription"


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
                {/* <LoginPage/> */}
                {/* <StdDashboard/> */}
                {/* <p className="App-intro">;{this.state.apiResponse}</p> */}
                {/* <StudentForm/> */}
                {/* <AddJob /> */}
                <JobDescription />

            
            </>            
        );
    }
}

export default App;
