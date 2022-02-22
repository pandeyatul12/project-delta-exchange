import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'

const ProjectContext = React.createContext()

export function useAuth() {
    return useContext(ProjectContext)
}

export function ProjectProvider({ children }) {
 const [currentUser, setCurrentUser] = useState()
 const [loading, setLoading] = useState(true)

 function signup(email,password){
     return auth.createUserWithEmailAndPassword(email, password)
 }

 function login(email,password) {
     return auth.signInWithEmailAndPassword(email,password)
 }

 function logout(){
     return auth.signOut()  
 }

 useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged(user => {
    setCurrentUser(user)    
    setLoading(false)
    })

    return unsubscribe
 }, [])
 
 const value = {
     currentUser,
     signup,
     login,
     logout
 }
 
    return (
    <ProjectContext.Provider value={value}>
        {!loading && children}
    </ProjectContext.Provider>
  )
}

