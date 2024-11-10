import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  
  return (
    <div className='flex items-end justify-between'>
        <h1 className=' ml-6 mt-10 text-center text-4xl font-bold tracking-tight text-white'>Hello <br /> <span className='mt-10 text-center text-4xl font-bold tracking-tight text-white'>Aryan</span></h1>
        <button onClick={logOutUser} className=' mr-6 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:shadow-red-800/80 text-base font-medium text-white px-5 py-2 rounded-xl'>Log Out</button>
    </div>
  )
}

export default Header