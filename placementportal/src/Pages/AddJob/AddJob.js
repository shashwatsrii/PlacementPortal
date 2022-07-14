import React from 'react'
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
                                <label for="name">Name</label>
                            </div>
                            <div className="col-75">
                                <input type="text" name="Name" id="" placeholder="Enter the name of your Company" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="name">Logo</label>
                            </div>
                            <div className="col-75">
                                <input type="url" name="Logo" id="" placeholder="Enter a link of a suitable company logo" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="Name">Position</label>
                            </div>
                            <div className="col-75">
                                <input type="text" name="Position" id="" placeholder="Enter the name of the role offered" />

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="Name">Skills Required</label>
                            </div>
                            <div className="col-75">
                                <input type="text" name="Position" id="" placeholder="Enter the skills required for the job" />

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="Salary">Salary</label>
                            </div>
                            <div className="col-75">
                                <input type="text" name="Salary" id="" placeholder="Enter Salary offered for the role" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="Description">Description</label>
                            </div>
                            <div className="col-75">
                                <textarea name="Description" id="" cols="100" rows="5"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="Type">Type</label>
                            </div>
                            <div className="col-75">
                                <input type="text" name="" id="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="MinCGPA">Minimum CGPA</label>
                            </div>
                            <div className="col-75">
                                <input type="text" name="MinCGPA" id="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="departments">Departments</label>
                            </div>
                            <div className="col-75">
                                <div className="departments">
                                    <div className="roundedCorner">
                                        <input type="checkbox" name="Computer" id="" />
                                        <label for="">Computer</label>
                                    </div>

                                    <div className="roundedCorner">
                                        <input type="checkbox" name="IT" id="" />
                                        <label for="">IT</label>
                                    </div>
                                    <div className="roundedCorner">
                                        <input type="checkbox" name="Data Science" id="" />
                                        <label for="">Data Science</label>
                                    </div>
                                    <div className="roundedCorner">
                                        <input type="checkbox" name="Chemical" id="" />
                                        <label for="">Chemical</label>
                                    </div>
                                    <div className="roundedCorner">
                                        <input type="checkbox" name="Biomedical" id="" />
                                        <label for="">Biomedical</label>
                                    </div>
                                    <div className="roundedCorner">
                                        <input type="checkbox" name="Electronics" id="" />
                                        <label for="">Electronics</label>
                                    </div>
                                    <div className="roundedCorner">
                                        <input type="checkbox" name="Mechanical" id="" />
                                        <label for="">Mechanical</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <button className="submitBTN">Submit</button>
                </div>
            </div>
        </>
    )
}

export default AddJob