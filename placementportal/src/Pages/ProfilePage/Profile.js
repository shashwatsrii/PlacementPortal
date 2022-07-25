import React, { useEffect, useState } from 'react'
import "./Profile.css"
import ProfilePhoto from "../../assets/ProfilePic.png"

function Profile() {
    const {loading,SetLoading} = useState(false);
    async function personalDetails()
    {
        SetLoading(true);
        let user = JSON.parse(localStorage.getItem('user-info'));
        console.warn("data",user.username,user.password)
        let result= await fetch('https://juit-webkiosk-api.herokuapp.com/v1.0/personalDetails',{
            method: 'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(user)
        });
        result = await result.json();
        localStorage.setItem('personal-details',JSON.stringify(result));
     
        // let user1 = JSON.parse(localStorage.getItem('user-info'));
        // console.warn("data",user.username,user.password)
        // let result1= await fetch('https://juit-webkiosk-api.herokuapp.com/v1.0/cgpa',{
        //     method: 'POST',
        //     headers:{
        //         "Content-Type":"application/json",
        //         "Accept":"application/json"
        //     },
        //     body:JSON.stringify(user1)
        // });
        // result1 = await result1.json();
        // localStorage.setItem('cgpa1',JSON.stringify(result1));
        SetLoading(false);
        
    }
    personalDetails();
    const personal = JSON.parse(localStorage.getItem('personal-details'));
    // const cgpa = JSON.parse(localStorage.getItem('cgpa1'));

    return (
        <>
        {loading ?
            <>
            //   <h1>Please wait...</h1>
            <div className="ring"> </div>  
        
            </>
        :
        <>
            <div className='containerProfilePage'>
                <div className='ProfileHeadingProfile'>
                    <div className='ProfileTextPage'><b>Profile</b></div>
                    <div className='StudentTextPage'>Student at Jaypee University of Information Technology</div>
                </div>
                <div className='DetailsProfile'>
                    <div className='ProfileLeft'>
                        <div className='NameProfile details5'>
                            <div className='NameTitle'> <b>Name : </b> </div>
                            <div className='Name_fetched'>{personal.Name}</div>
                        </div>
                        <div className='EnrollmentProfile details5'>
                            <div className='EnrollmentTitle'> <b>Enrollment Number : </b> </div>
                            <div className='Enroll_fetched'>{personal.Rollno}</div>
                        </div>
                        <div className='Profile details5'>
                            <div className='EnrollmentTitle'> <b>Email : </b> </div>
                            <div className='Enroll_fetched'>{personal.Email}</div>
                        </div>
                        <div className='CGPA details1'>
                            <div className='CGPATitle'> <b>CGPA : </b> </div>
                            <div className='CGPA_fetched'>8.5</div>
                        </div>
                        <div className='CGPA details1'>
                            <div className='CGPATitle'> <b>Semester : </b> </div>
                            <div className='CGPA_fetched'>{personal.Semester}</div>
                        </div>
                        
                    </div>
                    <div className='ProfileImageCenter'>
                        <img src={ProfilePhoto} alt={ProfilePhoto} />
                        <div>Upload Your Photograph Here!</div>
                    </div>

                    <div className='ProfileRight'>
                        <div className='BranchProfile details1'>
                            <div className='BranchTitle'> <b>Course : </b> </div>
                            <div className='Branch_fetched'>{personal.Course}</div>
                        </div>
                        
                        <div className='CGPA details1'>
                            <div className='MobilenoTitle'> <b>Mobile No : </b> </div>
                            <div className='Mobile_fetched'>{personal.Mobile}</div>
                        </div>
                        <div className='CGPA details1'>
                            <div className='AddressTitle'> <b>Address : </b> </div>
                            <div className='Address_fetched'>{personal.address}</div>
                        </div>
                        <div className='CGPA details1'>
                            <div className='12perTitle'> <b>Percentage of 12 : </b> </div>
                            <div className='12per_fetched'>{personal.percentage12}</div>
                        </div>
                        <div className='CGPA details1'>
                            <div className='Fnameitle'> <b>Father's Name : </b> </div>
                            <div className='Fname_fetched'>{personal.FathersName}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
}
</>
    )
}

export default Profile