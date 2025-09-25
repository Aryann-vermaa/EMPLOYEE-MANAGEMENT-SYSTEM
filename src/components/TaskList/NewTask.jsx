import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const NewTask = ({data, employeeId}) => {
    const [userData, setUserData] = useContext(AuthContext)

    const handleAcceptTask = () => {
        // Update the task state to active
        const updatedUserData = userData.map(employee => {
            if (employee.id === employeeId) {
                const updatedTasks = employee.tasks.map(task => {
                    if (task.taskTitle === data.taskTitle && task.taskDate === data.taskDate) {
                        return {
                            ...task,
                            active: true,
                            newTask: false,
                            completed: false,
                            failed: false
                        }
                    }
                    return task
                })
                
                // Update task counts
                const updatedTaskCounts = {
                    ...employee.taskCounts,
                    newTask: employee.taskCounts.newTask - 1,
                    active: employee.taskCounts.active + 1
                }
                
                return {
                    ...employee,
                    tasks: updatedTasks,
                    taskCounts: updatedTaskCounts
                }
            }
            return employee
        })
        
        setUserData(updatedUserData)
        
        // Show success message
        // alert('Task accepted successfully!')                          
    }

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
            
            <button 
                onClick={handleAcceptTask}
                className='w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent'
            >
                Accept Task
            </button>
        </div>
    )
}

export default NewTask