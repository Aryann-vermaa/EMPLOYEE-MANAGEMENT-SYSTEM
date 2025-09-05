import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    return (
        <div className='bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-6 animate-fadeInUp'>
            <div className='mb-6'>
                <h2 className='text-2xl font-bold text-white mb-2'>Your Tasks</h2>
                <p className='text-gray-300'>Manage and track your assigned tasks</p>
            </div>
            
            <div id='tasklist' className='h-96 overflow-x-auto flex items-start justify-start gap-6 flex-nowrap w-full py-4 scrollbar-thin scrollbar-thumb-purple-500/30 scrollbar-track-transparent'>
                {data.tasks.map((elem, idx) => {
                    if (elem.active) {
                        return <AcceptTask key={idx} data={elem} employeeId={data.id} />
                    }
                    if (elem.newTask) {
                        return <NewTask key={idx} data={elem} employeeId={data.id} />
                    }
                    if (elem.completed) {
                        return <CompleteTask key={idx} data={elem} employeeId={data.id} />
                    }
                    if (elem.failed) {
                        return <FailedTask key={idx} data={elem} employeeId={data.id} />
                    }
                })}
            </div>
        </div>
    )
}

export default TaskList