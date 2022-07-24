import React from 'react'
import "./Profile.css"
import ProfilePhoto from "../../assets/ProfilePic.png"

function Profile() {
    return (
        <>
            <div className='containerProfilePage'>
                <div className='ProfileHeadingProfile'>
                    <div className='ProfileTextPage'><b>Profile</b></div>
                    <div className='StudentTextPage'>Student at Jaypee University of Information Technology</div>
                </div>
                <div className='DetailsProfile'>
                    <div className='ProfileLeft'>
                        <div className='NameProfile details'>
                            <div className='NameTitle'> <b>Name : </b> </div>
                            <div className='Name_fetched'>Shashwat Srivastava</div>
                        </div>
                        <div className='EnrollmentProfile details'>
                            <div className='EnrollmentTitle'> <b>Enrollment Number : </b> </div>
                            <div className='Enroll_fetched'>211560</div>
                        </div>
                        <div className='Profile details'>
                            <div className='EnrollmentTitle'> <b>Email : </b> </div>
                            <div className='Enroll_fetched'>211560@juitsolan.in</div>
                        </div>
                    </div>
                    <div className='ProfileImageCenter'>
                        <img src={ProfilePhoto} alt={ProfilePhoto} />
                        <div>Upload Your Photograph Here!</div>
                    </div>
                    <div className='ProfileRight'>
                        <div className='BranchProfile details1'>
                            <div className='BranchTitle'> <b>Branch : </b> </div>
                            <div className='Branch_fetched'>Information Technology</div>
                        </div>
                        <div className='CGPA details1'>
                            <div className='CGPATitle'> <b>CGPA : </b> </div>
                            <div className='CGPA_fetched'>9.0</div>
                        </div>
                        <div className='CGPA details1'>
                            <div className='CGPATitle'> <b>Semester : </b> </div>
                            <div className='CGPA_fetched'>3</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile