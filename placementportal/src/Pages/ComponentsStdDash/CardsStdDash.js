import React from 'react';
import { Link } from 'react-router-dom';
import "./CardsStdDash.css";
import lgoCmop from "../../assets/Logo.png"

function Card(cmpName,cmpDes,Domain,logoCmp) {
    return (
        <>
            <div className="StdFeedCard">
                <Link className='LinkJobDescription' to="/StudentDashboard/JobDescription">
                <div className="Card">
                    <div className="CompanyLogoFeed"><img className='CmpLogo' src={lgoCmop} /></div>
                    <div className="CompanyDetails">
                        <div className='CompanyName'>Lorem Ipsum</div>
                        <div className='CompanyDes'>Lorem Ipsum Lorem Ipsum Lorem Ipsum</div>
                    </div>
                    <div className="CardrightSide">
                        <div className='domainOfJob'>Tech/Non Tech</div>
                        <div className='ApplyBtn'><Link className='ApplyNowText' to='/StudentDashboard/JobApplication'>Apply Now</Link></div>
                    </div>
                </div>
                </Link>
            </div>
        </>
    );
}

export default Card;