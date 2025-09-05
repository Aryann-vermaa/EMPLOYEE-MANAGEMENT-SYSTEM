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
    <div className='flex items-center justify-between mb-8'>
        <div className='animate-fadeInLeft'>
            <div className='bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-6'>
                <h1 className='text-3xl font-bold tracking-tight text-white mb-2'>
                    Welcome Back!
                </h1>
                <div className='flex items-center space-x-3'>
                    <div className='w-12 h-12 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center'>
                        <span className='text-white font-bold text-lg'>A</span>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                            Aryan
                        </h2>
                        <p className='text-gray-300 text-sm'>Administrator</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className='animate-fadeInRight'>
            <button 
                onClick={logOutUser} 
                className='bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-transparent shadow-lg hover:shadow-red-500/25'
            >
                <div className='flex items-center space-x-2'>
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1' />
                    </svg>
                    <span>Log Out</span>
                </div>
            </button>
        </div>
    </div>
  )
}

export default Header