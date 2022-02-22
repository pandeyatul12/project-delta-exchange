import React, { useState } from 'react'
import { useAuth } from '../contexts/ProjectContext'
import { useHistory, Link } from 'react-router-dom/cjs/react-router-dom.min'

function Dashboard() {
  const[error, setError] = useState('')
  const {currentUser, logout} = useAuth()
  const history = useHistory()

  async function handleLogout(){
     setError('')

     try{
       await logout()
       history.push('/login')
     } catch {
       setError('Failed to log out')
     }
  }

  return (
    <>
      <div className='current-user'>{`Current user:- ${currentUser.email}`}</div> 
      <div className='logout-error-msg'>{error}</div>
      <button className='logout-btn' 
      onClick={handleLogout}>Log out</button>
    </>
  )
}

export default Dashboard