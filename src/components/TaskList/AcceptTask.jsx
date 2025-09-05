import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AcceptTask = ({data, employeeId}) => {
    const [userData, setUserData] = useContext(AuthContext)

    const handleCompleteTask = () => {
        const updatedUserData = userData.map(employee => {
            if (employee.id === employeeId) {
                const updatedTasks = employee.tasks.map(task => {
                    if (task.taskTitle === data.taskTitle && task.taskDate === data.taskDate) {
                        return {
                            ...task,
                            active: false,
                            newTask: false,
                            completed: true,
                            failed: false
                        }
                    }
                    return task
                })
                
                // Update task counts
                const updatedTaskCounts = {
                    ...employee.taskCounts,
                    active: employee.taskCounts.active - 1,
                    completed: employee.taskCounts.completed + 1
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
        // alert('Task marked as completed!')
    }

    const handleFailTask = () => {
        const updatedUserData = userData.map(employee => {
            if (employee.id === employeeId) {
                const updatedTasks = employee.tasks.map(task => {
                    if (task.taskTitle === data.taskTitle && task.taskDate === data.taskDate) {
                        return {
                            ...task,
                            active: false,
                            newTask: false,
                            completed: false,
                            failed: true
                        }
                    }
                    return task
                })
                
                // Update task counts
                const updatedTaskCounts = {
                    ...employee.taskCounts,
                    active: employee.taskCounts.active - 1,
                    failed: employee.taskCounts.failed + 1
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
        // alert('Task marked as failed!')
    }

  return (
    <div className='flex-shrink-0 w-80 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover-lift hover-glow transition-all duration-300 animate-scaleIn'>
            <div className='flex justify-between items-center mb-4'>
                <span className='bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium border border-yellow-500/30'>
                    {data.category}
                </span>
                <span className='text-gray-400 text-sm'>{data.taskDate}</span>
            </div>
            
            <h2 className='text-xl font-bold text-white mb-3'>{data.taskTitle}</h2>
            <p className='text-gray-300 text-sm mb-6 leading-relaxed'>
                {data.taskDescription}
            </p>
            
            <div className='space-y-3'>
                <button 
                    onClick={handleCompleteTask}
                    className='w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-transparent'
                >
                    Mark as Completed
                </button>
                <button 
                    onClick={handleFailTask}
                    className='w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-transparent'
                >
                    Mark as Failed
                </button>
            </div>
        </div>
  )
}

export default AcceptTask