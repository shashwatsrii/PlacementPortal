import React from 'react'
import { Link } from 'react-router-dom'
import ThumbsUp from "../../assets/thumbsup.jpg"

const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '100vh',
}
const style1 = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap:'2vh'
}
const style2 = {
    textDecoration: 'none', 
    color:'blue'
}
function SubmittedSucess() {
    return (
        <div>
            <div style={styles} className='submitSuccessContainer'>
                <img className='SuccessImg' src={ThumbsUp} />
                <div style={style1} className='FormSubmitText'>
                    <b>Form Submitted Successfully</b>
                    <Link style={style2} to="/CompanyDashboard">
                          <b>Go back to Dashboard</b> 
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default SubmittedSucess