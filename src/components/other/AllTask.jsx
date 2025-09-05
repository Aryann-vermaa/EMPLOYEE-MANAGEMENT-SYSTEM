import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

   const [userData,setUserData] =  useContext(AuthContext)

   
  return (
    <div className='bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-6'>
        <div className='mb-6'>
            <h2 className='text-2xl font-bold text-white mb-2'>Team Overview</h2>
            <p className='text-gray-300'>Track all employee task statistics</p>
        </div>
        
        <div className='overflow-x-auto scrollbar-thin scrollbar-thumb-purple-500/30 scrollbar-track-transparent'>
            <div className='bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 mb-4'>
                <div className='grid grid-cols-5 gap-4 text-center'>
                    <h3 className='text-sm font-semibold text-gray-300'>Employee</h3>
                    <h3 className='text-sm font-semibold text-blue-400'>New Tasks</h3>
                    <h3 className='text-sm font-semibold text-yellow-400'>In Progress</h3>
                    <h3 className='text-sm font-semibold text-green-400'>Completed</h3>
                    <h3 className='text-sm font-semibold text-red-400'>Failed</h3>
                </div>
            </div>
            
            <div className='space-y-3'>
                {userData.map(function(elem,idx){
                    return (
                        <div key={idx} className='bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 hover-lift transition-all duration-300'>
                            <div className='grid grid-cols-5 gap-4 items-center text-center'>
                                <div className='flex items-center justify-center space-x-2'>
                                    <div className='w-8 h-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center'>
                                        <span className='text-white font-bold text-sm'>{elem.firstName.charAt(0)}</span>
                                    </div>
                                    <span className='text-white font-medium'>{elem.firstName}</span>
                                </div>
                                <div className='bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-semibold'>
                                    {elem.taskCounts.newTask}
                                </div>
                                <div className='bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold'>
                                    {elem.taskCounts.active}
                                </div>
                                <div className='bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold'>
                                    {elem.taskCounts.completed}
                                </div>
                                <div className='bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold'>
                                    {elem.taskCounts.failed}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default AllTask