import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-6 animate-fadeInUp'>
        <div className='mb-6'>
            <h2 className='text-2xl font-bold text-white mb-2'>Task Overview</h2>
            <p className='text-gray-300'>Your current task statistics</p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className='bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover-lift hover-glow transition-all duration-300'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h3 className='text-3xl font-bold text-blue-400'>{data.taskCounts.newTask}</h3>
                        <p className='text-gray-300 text-sm font-medium'>New Tasks</p>
                    </div>
                    <div className='w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center'>
                        <svg className='w-6 h-6 text-blue-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
                        </svg>
                    </div>
                </div>
            </div>
            
            <div className='bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover-lift hover-glow transition-all duration-300'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h3 className='text-3xl font-bold text-green-400'>{data.taskCounts.completed}</h3>
                        <p className='text-gray-300 text-sm font-medium'>Completed</p>
                    </div>
                    <div className='w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center'>
                        <svg className='w-6 h-6 text-green-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                        </svg>
                    </div>
                </div>
            </div>
            
            <div className='bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover-lift hover-glow transition-all duration-300'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h3 className='text-3xl font-bold text-yellow-400'>{data.taskCounts.active}</h3>
                        <p className='text-gray-300 text-sm font-medium'>In Progress</p>
                    </div>
                    <div className='w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center'>
                        <svg className='w-6 h-6 text-yellow-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>
                    </div>
                </div>
            </div>
            
            <div className='bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover-lift hover-glow transition-all duration-300'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h3 className='text-3xl font-bold text-red-400'>{data.taskCounts.failed}</h3>
                        <p className='text-gray-300 text-sm font-medium'>Failed</p>
                    </div>
                    <div className='w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center'>
                        <svg className='w-6 h-6 text-red-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TaskListNumbers