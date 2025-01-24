import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'
import { data } from 'autoprefixer'

const App = () => {
  const [user, setUser] = useState(null)
  const[loggedInUserData, setLoggedInUserData] = useState(null);
  
 
  const [userData,SetUserData] = useContext(AuthContext)
  // console.log(authData);

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
   } ,[] )

  const loginHandler = (email,password)=>{
    if(email == "admin@me.com" && password == "123"){
      setUser('admin')
      // console.log(user);
      localStorage.setItem('loggedInUser', JSON.stringify({'role': 'admin'}));
      
    }else if(userData){
      const employee = userData.find((e)=> e.email == email && e.password == password);
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({'role': 'employee', 'data': employee}));
      }
    }
    else{
      alert("INVALID CREDENTIALS");
    }
  }

  
  
  return (
    <>
{!user ? <Login loginHandler = {loginHandler}/>: ''}
{user == 'admin' ? <AdminDashboard changeUser = {setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser = {setUser} data = {loggedInUserData}/> : null)}
    </>
  )
}

export default App