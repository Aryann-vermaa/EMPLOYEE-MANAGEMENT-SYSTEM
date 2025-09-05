import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        const newTask = { 
            taskTitle, 
            taskDescription, 
            taskDate, 
            category, 
            active: false, 
            newTask: true, 
            failed: false, 
            completed: false 
        }

        const updatedUserData = userData.map(employee => {
            if (asignTo === employee.firstName) {
                return {
                    ...employee,
                    tasks: [...employee.tasks, newTask],
                    taskCounts: {
                        ...employee.taskCounts,
                        newTask: employee.taskCounts.newTask + 1
                    }
                }
            }
            return employee
        })
        
        setUserData(updatedUserData)
        
        // Save to localStorage
        localStorage.setItem('employees', JSON.stringify(updatedUserData))
        
        // alert('Task created successfully!')
        // console.log('Task created:', newTask);

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')
    }

    return (
        <div className='bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 hover-lift'>
            <div className='mb-6'>
                <h2 className='text-2xl font-bold text-white mb-2'>Create New Task</h2>
                <p className='text-gray-300'>Assign tasks to your team members</p>
            </div>
            
            <form onSubmit={(e) => {
                submitHandler(e)
            }}
                className='space-y-6'
            >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <div className='space-y-4'>
                        <div>
                            <label className='block text-sm font-medium text-gray-300 mb-2'>Task Title</label>
                            <input
                                value={taskTitle}
                                onChange={(e) => {
                                    setTaskTitle(e.target.value)
                                }}
                                className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200'
                                type="text" 
                                placeholder='Enter task title'
                            />
                        </div>
                        
                        <div>
                            <label className='block text-sm font-medium text-gray-300 mb-2'>Due Date</label>
                            <input
                                value={taskDate}
                                onChange={(e) => {
                                    setTaskDate(e.target.value)
                                }}
                                className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200'
                                type="date" 
                            />
                        </div>
                        
                        <div>
                            <label className='block text-sm font-medium text-gray-300 mb-2'>Assign To</label>
                            <input
                                value={asignTo}
                                onChange={(e) => {
                                    setAsignTo(e.target.value)
                                }}
                                className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200'
                                type="text" 
                                placeholder='Employee name'
                            />
                        </div>
                        
                        <div>
                            <label className='block text-sm font-medium text-gray-300 mb-2'>Category</label>
                            <input
                                value={category}
                                onChange={(e) => {
                                    setCategory(e.target.value)
                                }}
                                className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200'
                                type="text" 
                                placeholder='e.g., Design, Development, Marketing'
                            />
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <div>
                            <label className='block text-sm font-medium text-gray-300 mb-2'>Description</label>
                            <textarea 
                                value={taskDescription}
                                onChange={(e) => {
                                    setTaskDescription(e.target.value)
                                }} 
                                className='w-full h-32 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none'
                                placeholder='Describe the task details...'
                            />
                        </div>
                        
                        <button 
                            type='submit'
                            className='w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent shadow-lg'
                        >
                            <div className='flex items-center justify-center space-x-2'>
                                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
                                </svg>
                                <span>Create Task</span>
                            </div>
                        </button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default CreateTask