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
                    <div className="CompanyDetails">
                        <div className='CompanyName'>Amazon</div>
                        <div className='CompanyDes'>NO 1 Comapany in the world Gives you a lot of experriense </div>
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