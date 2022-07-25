import React from 'react'
import { Link } from 'react-router-dom'
import companylogo from "../../assets/am1.png"
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
                                <h2 class="jobPosJD">AMAZON</h2>
                                <p class="companyNameJD">Spend less Smile more</p>
                            </div>
                            <button class="packageJD">$10 LPA</button>
                        </div>
                    </div>
                    <div class="jobDescJD">
                        <h3 className='despi'>Job Description</h3>

                        <div className='aa'>At Amazon, we hire the best minds in technology to innovate and build on behalf of our customers. The focus we have on our customers is why we are one of the world’s most beloved brands – customer obsession is part of our company DNA. Our Software Development Engineers (SDEs) use cutting-edge technology to solve complex problems and get to see the impact of their work first-hand.

                            The challenges SDEs solve for at Amazon are big and influence millions of customers, sellers, and products around the world. We are looking for individuals who are passionate about creating new products, features, and services from scratch while managing ambiguity and the pace of a company where development cycles are measured in weeks, not years.
                        </div>


                    </div>
                    <div className='elegibal'>
                        <p><strong >Eligibility</strong></p>
                        <p>Programming experience with at least one modern language such as Java, C++, or C# including object-oriented design
                        </p>
                    </div>
                    <p><strong>Shortlisting Process</strong> - Interview</p>

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
                <Link className="LinkSuccessfullyAdded" to='/CompanyDashboard/AddJob/Success'>
                    <button class="applyBtnJD">Apply Now</button>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default JobDescription;