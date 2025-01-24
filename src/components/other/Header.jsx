import React, { useEffect, useState } from 'react'

const Header = (props) => {
  // const [username, setUsername] = useState('');

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }
  const logoutHandler = ()=>{
    localStorage.setItem('loggedInUser', '');
    // window.location.reload();
    props.changeUser('')
  }
  return (
    <div className='flex items-end justify-between'>
      
            <h2 className='text-2xl font-medium'>Hello
            <br />
            <b>username🚀</b>
            </h2>
        
        <button
         onClick={logoutHandler} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header