import React from 'react';
import "./StdDash.css";
import OverviewIcon from '../../assets/overviewIcon.png';
import JobsIcon from '../../assets/JobsIcon.png';
import JobsIcon2 from '../../assets/JobsIcon2.png';
import ProfileIcon from '../../assets/ProfileIcon.png';
import NotificationIcon from '../../assets/NotificationIcon.png';
import JobFeed from './JobFeed';
import DashIcon from '../../assets/DashIcon.png'
import ProfileNav from '../../assets/ProfileNav.jpeg'
import { Link } from 'react-router-dom';


function StdDash() {
    return (
        <>
            <div className='containerStdDash'>
                <div className='leftStdDash'>
                    <div className='HeadingPortal'> Placement Portal JUIT</div>
                    <div className='OverviewTab TabsDash' >
                        <div className='OverviewIcon'> <img className='IconsDash' id='OverviewIcon' src={OverviewIcon} alt='logo' /></div>
                        <div className='OverviewHeading'>Dashboard</div>
                    </div>
                    <div className='JobsTab TabsDash'>
                        <Link className='LinkJobFeedSD' to='/StudentDashboard/JobFeed'>
                            <div className='JobsIcon'> <img className='IconsDash' id='JobsIcon' src={JobsIcon} alt='logo' /></div>
                            <div className='JobsHeading'>Jobs</div>
                        </Link>
                    </div>

                    <div className='NotificationTab TabsDash'>
                        <div className='NotificationIcon'> <img className='IconsDash' id='NotificationIcon' src={NotificationIcon} alt='logo' /></div>
                        <div className='NotificationHeading'>Notifications</div>
                    </div>
                </div>
                <div className='rightFeed'>
                    <div className='HeaderRightFeed'>
                        <div className='DashboardStdFeed'>
                            <div className='DashboardStdIcon'> <img className='DashIconStd' src={DashIcon} alt='logo' /></div>
                            <div className='DashboardTextfeed'>Dashboard</div>
                        </div>
                        <div className='DashboardStdRight'>
                            <div ><img className='ProfileIcon' src={ProfileNav} alt='logo' /></div>
                            <div className='ProfileText'>Profile</div>
                        </div>
                    </div>



                    <div className='boxesFeed'>
                        <div className='JobsAppliedContainer'>
                            <div className='JobsAppBoxIcon'><img className='IconJobApp' src={JobsIcon2} alt='logo' /></div>
                            <div className='JAContainer'>
                                <div className='numberOfJobsApptext'>Jobs Applied</div>
                                <div className='numberOfJobsApp'><b>10</b></div>
                            </div>
                        </div>
                        <Link className='LinkJA' to='/StudentDashboard/JobFeed'>
                            <div className='JobsAppliedContainer2'>
                                <div className='JobsAppBoxIcon2'><img className='IconJobApp' src={JobsIcon2} alt='logo' /></div>
                                <div className='JAContainer2'>
                                    <div className='numberOfJobsApptext2'>Jobs Available</div>
                                    <div className='numberOfJobsApp2'><b>35</b></div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <JobFeed />
                </div>

            </div>

        </>
    );
}

export default StdDash;