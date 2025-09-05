import React from 'react'

const CompleteTask = ({data, employeeId}) => {
  return (
    <div className='flex-shrink-0 w-80 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover-lift hover-glow transition-all duration-300 animate-scaleIn'>
            <div className='flex justify-between items-center mb-4'>
                <span className='bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium border border-green-500/30'>
                    {data.category}
                </span>
                <span className='text-gray-400 text-sm'>{data.taskDate}</span>
            </div>
            
            <h2 className='text-xl font-bold text-white mb-3'>{data.taskTitle}</h2>
            <p className='text-gray-300 text-sm mb-6 leading-relaxed'>
                {data.taskDescription}
            </p>
            
            <div className='flex items-center justify-center space-x-2 text-green-400'>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <span className='font-semibold'>Completed</span>
            </div>
        </div>
  )
}

export default CompleteTask