import React from 'react'

const style= {
    display : 'flex',
    justifyContent : 'center',
    backgroundColor : 'black',
    alignItems : 'center',
    color : 'white',
    height : '100vh',

}

function Error() {
  return (
    <div style={style} className='ErrorPage'> Error 404! Page Not Found</div>
  )
}

export default Error;