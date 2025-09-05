import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {

  return (
    <div className='h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 animate-fadeInUp overflow-y-auto'>
        {/* Background decorative elements */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
            <div className='absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse'></div>
            <div className='absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse'></div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-float'></div>
        </div>
        
        <div className='relative z-10'>
            <div className='animate-slideInDown'>
                <Header changeUser={props.changeUser} data={props.data}/>
            </div>
            
            <div className='mt-8 space-y-8'>
                <div className='animate-fadeInLeft' style={{ animationDelay: '0.2s' }}>
                    <TaskListNumbers data={props.data} />
                </div>
                <div className='animate-fadeInRight' style={{ animationDelay: '0.4s' }}>
                    <TaskList data={props.data} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeDashboard