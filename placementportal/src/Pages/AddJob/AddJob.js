import React from 'react'
import { Link } from 'react-router-dom';
import JUITLOGO from "../../assets/Logo.png"
import "./AddJob.css";


function AddJob() {
    return (
        <>
            <div className="OuterBodyAddJob">
                <div className="mainBody">
                    <div><img className="JuitLogo" src={JUITLOGO} /></div>
                    <h3 className="header">Add Job</h3>
                    <form action="#">
                        <div className="row">
                            <div className="col-25">
                                <label5 for="name">Name</label5>
                            </div>
                            <div className="col-75">
                                <input1 type="text" name="Name" id="" placeholder="Enter the name of your Company" required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label5 for="name">Logo</label5>
                            </div>
                            <div className="col-75">
                                <input1 type="url" name="Logo" id="" placeholder="Enter a link of a suitable company logo" required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label5 for="Name">Position</label5>
                            </div>
                            <div className="col-75">
                                <input1 type="text" name="Position" id="" placeholder="Enter the name of the role offered" required/>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label5 for="Name">Skills Required</label5>
                            </div>
                            <div className="col-75">
                                <input1 type="text" name="Position" id="" placeholder="Enter the skills required for the job" required/>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label5 for="Salary">Salary</label5>
                            </div>
                            <div className="col-75">
                                <input type="text" name="Salary" id="" placeholder="Enter Salary offered for the role" required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label5 for="Description">Description</label5>
                            </div>
                            <div className="col-75">
                                <textarea name="Description" id="" cols="100" rows="5"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label5 for="Type">Type</label5>
                            </div>
                            <div className="col-75">
                                <input1 type="text" name="" id="" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label5 for="MinCGPA">Minimum CGPA</label5>
                            </div>
                            <div className="col-75">
                                <input1 type="text" name="MinCGPA" id="" required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label5 for="departments">Departments</label5>
                            </div>
                            <div className="col-75">
                                <div className="departments">
                                    <div className="roundedCorner">
                                        <input1 type="checkbox" name="Computer" id=""/>
                                        <label5 for="">Computer</label5>
                                    </div>

                                    <div className="roundedCorner">
                                        <input1 type="checkbox" name="IT" id="" />
                                        <label5 for="">IT</label5>
                                    </div>
                                    <div className="roundedCorner">
                                        <input1 type="checkbox" name="Data Science" id="" />
                                        <label5 for="">Data Science</label5>
                                    </div>
                                    <div className="roundedCorner">
                                        <input1 type="checkbox" name="Chemical" id="" />
                                        <label5 for="">Chemical</label5>
                                    </div>
                                    <div className="roundedCorner">
                                        <input1 type="checkbox" name="Biomedical" id="" />
                                        <label5 for="">Biomedical</label5>
                                    </div>
                                    <div className="roundedCorner">
                                        <input1 type="checkbox" name="Electronics" id="" />
                                        <label5 for="">Electronics</label5>
                                    </div>
                                    <div className="roundedCorner">
                                        <input1 type="checkbox" name="Mechanical" id="" />
                                        <label5 for="">Mechanical</label5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <form >
                        <Link className="LinkSuccessfullyAdded" to='/CompanyDashboard/AddJob/Success'>
                        <input1 action="/" type="submit" className='submitBTN' value="Submit" />
                        </Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddJob