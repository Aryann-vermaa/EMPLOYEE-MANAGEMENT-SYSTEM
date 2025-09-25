import React, { useContext, useEffect, useState } from 'react'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,SetUserData] = useContext(AuthContext)
  const [showRegister, setShowRegister] = useState(false)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  },[])


  const handleLogin = (email, password) => {
    // LocalStorage-based login
    const admin = JSON.parse(localStorage.getItem('admin'));
    if (admin && admin.find(a => a.email === email && a.password === password)) {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
      return;
    }
    if (userData) {
      const employee = userData.find(e => e.email === email && e.password === password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
        return;
      }
    }
    alert('Invalid Credentials');
  }



  return (
    <>
      {!user && !showRegister && (
        <div className="page-enter-active">
          <Login 
            handleLogin={handleLogin}
            showRegister={() => setShowRegister(true)}
          />
        </div>
      )}
      {!user && showRegister && (
        <div className="page-enter-active">
          <Register 
            handleRegister={(email, password) => {
              fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
              })
                .then(res => res.json())
                .then(data => {
                  if (data.success) {
                    alert('Registration successful! Please login.');
                    setShowRegister(false);
                  } else {
                    alert(data.message || 'Registration failed');
                  }
                })
                .catch(() => alert('Server error'));
            }}
            switchToLogin={() => setShowRegister(false)}
          />
        </div>
      )}
      {user === 'admin' && (
        <div className="page-enter-active">
          <AdminDashboard changeUser={setUser} />
        </div>
      )}
      {user === 'employee' && (
        <div className="page-enter-active">
          <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
        </div>
      )}
    </>
  )
}

export default App