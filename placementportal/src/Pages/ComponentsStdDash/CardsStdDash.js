import React from 'react';
import { Link } from 'react-router-dom';
import "./CardsStdDash.css";
import lgoCmop from "../../assets/am1.png"

function Card(cmpName,cmpDes,Domain,logoCmp) {
    return (
        <>
            <div className="StdFeedCard">
                <Link className='LinkJobDescription' to="/StudentDashboard/JobDescription">
                <div className="Card">
                    <div className="CompanyLogoFeed"><img className='CmpLogo' src={lgoCmop} /></div>
                    <div className="CompanyDetailsCard">
                        <div className='CompanyName'>Amazon</div>
                        <div className='CompanyDes'>Leading Corporate in the world offering you success </div>
                    </div>
                    <div className="CardrightSide">
                        <div className='domainOfJob'>Technical</div>
                        <div className='ApplyBtn'><Link className='ApplyNowText' to='/StudentDashboard/JobApplication'>Apply Now</Link></div>
                    </div>
                </div>
                </Link>
            </div>
        </>
    );
}

export default Card;