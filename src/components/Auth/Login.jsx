import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

  return (  
    <div className='min-h-screen w-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4'>
        {/* Background decorative elements */}
        <div className='absolute inset-0 overflow-hidden'>
            <div className='absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse'></div>
            <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse'></div>
        </div>
        
        <div className='relative z-10 w-full max-w-md'>
            {/* Welcome Header */}
            <div className='text-center mb-8'>
                <h1 className='text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4'>
                    Welcome to EMS System
                </h1>
                <p className='text-gray-300 text-lg'>
                    Employee Management System
                </p>
                <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full'></div>
            </div>

            {/* Login Card */}
            <div className='bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8'>
                <div className='text-center mb-6'>
                    <h2 className='text-2xl font-semibold text-white mb-2'>Sign In</h2>
                    <p className='text-gray-300'>Access your account to continue</p>
                </div>

                <form onSubmit={submitHandler} className='space-y-6'>
                    <div>
                        <label className='block text-sm font-medium text-gray-300 mb-2'>
                            Email Address
                        </label>
                        <input 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                            className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200'
                            type="email" 
                            placeholder='Enter your email' 
                        />
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-300 mb-2'>
                            Password
                        </label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                            className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200'
                            type="password" 
                            placeholder='Enter your password' 
                        />
                    </div>

                    <button 
                        type='submit'
                        className='w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent shadow-lg'
                    >
                        Sign In
                    </button>
                </form>

                {/* Demo credentials info */}
                <div className='mt-6 p-4 bg-blue-500/20 rounded-xl border border-blue-500/30'>
                    <p className='text-sm text-blue-200 text-center'>
                        <strong>Demo Credentials:</strong><br/>
                        Admin: admin@me.com / 123<br/>
                        Employee: employee@1.com / 123
                    </p>
                </div>
            </div>

            {/* Footer */}
            <div className='text-center mt-8'>
                <p className='text-gray-400 text-sm'>
                    © 2024 Employee Management System. All rights reserved.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Login