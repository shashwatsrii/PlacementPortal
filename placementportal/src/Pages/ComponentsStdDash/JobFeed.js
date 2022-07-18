import React from 'react';
import Card from "./CardsStdDash";
import logo1 from "../../assets/Logo.png";



function JobFeed() {
    return (
        <>
            <div  class="AvailJobsText">
                <b>Jobs Available</b>
            </div>
            <div className="Card1">
                <Card />
                <Card />
                <Card />
                <Card />

            </div>

        </>
    );
}

export default JobFeed;