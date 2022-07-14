import React from 'react'
import companylogo from "../../assets/logo_google.png"
import "./JobDescription.css"

function JobDescription() {
    return (
        <>
            <div class="OuterBodyJobDes">
                <div class="mainBodyJD">
                    <div class="companyHeaderJD">
                        <img src={companylogo} alt="logo_google" class="companyImgJD" />
                        <div className='CompanyDetails'>
                            <div className='companyND'>
                                <h2 class="jobPosJD">LOREM</h2>
                                <p class="companyNameJD">Lorem ipsum</p>
                            </div>
                            <button class="packageJD">$12 LPA</button>
                        </div>
                    </div>
                    <div class="jobDescJD">
                        <h3 class="descHeaderJD">Job Description</h3>
                        <p><strong>Eligibility</strong></p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                        </ul>
                        <p><strong>Shortlisting Process</strong> - Lorem ipsum dolor sit amet.</p>
                        <p>Online Test - Lorem ipsum dolor sit amet.</p>
                        <table class="jobReqJD">
                            <tr>
                                <th>Type</th>
                                <td>Technical</td>
                            </tr>
                            <tr>
                                <th>Minimum CGPA</th>
                                <td>8 and above</td>
                            </tr>
                            <tr>
                                <th>Departments</th>
                                <td>CSE, IT</td>
                            </tr>
                        </table>
                    </div>
                    <div class="ButtonsJD">
                        <button class="applyBtnJD">Apply Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobDescription;