import React from 'react'
import "./compdash.css"
import OverviewIcon from '../../assets/overviewIcon.png';
import JobsIcon from '../../assets/JobsIcon.png';
import JobsIcon2 from '../../assets/JobsIcon2.png';
import ProfileIcon from '../../assets/ProfileIcon.png';
import NotificationIcon from '../../assets/NotificationIcon.png';
import AddIcon from "../../assets/addicon.png";
import DashIcon from '../../assets/DashIcon.png'
import ProfileNav from '../../assets/ProfileNav.jpeg'
function CmpDash() {
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
                        <div className='JobsIcon'> <img className='IconsDash' id='JobsIcon' src={AddIcon} alt='logo' /></div>
                        <div className='JobsHeading'>Add Job</div>
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
                                <div className='numberOfJobsApptext'>Jobs</div>
                                <div className='numberOfJobsApp'><b>5</b></div>
                            </div>
                        </div>
                        <div className='JobsAppliedContainer2'>
                            <div className='JobsAppBoxIcon2'><img className='IconJobApp' src={JobsIcon2} alt='logo' /></div>
                            <div className='JAContainer2'>
                                <div className='numberOfJobsApptext2'>Students Appplied</div>
                                <div className='numberOfJobsApp2'><b>35</b></div>
                            </div>
                        </div>
                    </div>
                    <div className='AvailJobsText'>Students Applied</div>
                <div class="board">
                    <table width="100%">
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Joining date</td>
                                <td>Job</td>
                                <td>Income</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="people">
                                    <img src={ProfileIcon} alt="" />
                                    <div class="people-de">
                                        <h1>Akshit sharma</h1>
                                        <p>akshit@7juit.com</p>
                                    </div>
                                </td>

                                <td class="date">
                                    <h1>1 Jan 2021</h1>
                                </td>

                                <td class="job">
                                    <h1>software engineer</h1>
                                    <p>web dev</p>
                                </td>
                                <td class="income">
                                    <h1>RS 7</h1>
                                    <p>LPA</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="people">
                                    <img src={ProfileIcon} alt="" />
                                    <div class="people-de">
                                        <h1>Aayush Girdhar</h1>
                                        <p>aayushish@juit.com</p>
                                    </div>
                                </td>

                                <td class="date">
                                    <h1>11 Jan 2021</h1>
                                </td>

                                <td class="job">
                                    <h1>software engineer</h1>
                                    <p>Coder</p>
                                </td>
                                <td class="income">
                                    <h1>RS 7</h1>
                                    <p>LPA</p>
                                </td>

                            </tr>

                            <tr>
                                <td class="people">
                                    <img src={ProfileIcon} alt="" />
                                    <div class="people-de">
                                        <h1>Anuska 🌻</h1>
                                        <p>Anuska@3juit.com</p>
                                    </div>
                                </td>

                                <td class="date">
                                    <h1>3 Jun 2021</h1>
                                </td>

                                <td class="job">
                                    <h1>software engineer</h1>
                                    <p>Designer</p>
                                </td>
                                <td class="income">
                                    <h1>RS 7</h1>
                                    <p>LPA</p>
                                </td>

                            </tr>
                            <tr>
                                <td class="people">
                                    <img src={ProfileIcon} alt="" />
                                    <div class="people-de">
                                        <h1>Shashwat srivastava</h1>
                                        <p>Shashwat@6juit.com</p>
                                    </div>
                                </td>

                                <td class="date">
                                    <h1>6 Mar 2021</h1>
                                </td>

                                <td class="job">
                                    <h1>software engineer</h1>
                                    <p>App dev</p>
                                </td>
                                <td class="income">
                                    <h1>RS 7</h1>
                                    <p>LPA</p>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="button">
                    <a href="#">See All</a>
                </div>
                </div>
            </div>
     
        </>
    )
}

export default CmpDash