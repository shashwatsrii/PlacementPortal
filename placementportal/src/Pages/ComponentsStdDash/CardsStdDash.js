import React from 'react';
import "./CardsStdDash.css";
import lgoCmop from "../../assets/Logo.png"

function Card(cmpName,cmpDes,Domain,logoCmp) {
    return (
        <>
            <div className="StdFeedCard">
                <div className="Card">
                    <div className="CompanyLogoFeed"><img className='CmpLogo' src={lgoCmop} /></div>
                    <div className="CompanyDetails">
                        <div className='CompanyName'>Lorem Ipsum</div>
                        <div className='CompanyDes'>Lorem Ipsum Lorem Ipsum Lorem Ipsum</div>
                    </div>
                    <div className="CardrightSide">
                        <div className='domainOfJob'>Tech/Non Tech</div>
                        <div className='ApplyBtn'> Apply Now</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;