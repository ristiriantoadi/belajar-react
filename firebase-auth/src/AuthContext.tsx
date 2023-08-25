import { User } from "firebase/auth"
import React, { ReactNode, useEffect, useState } from "react"
import { auth } from "./FirebaseConfig"

interface AuthContextType{
    currentUser:User|null,
    loading:boolean
}

export const AuthContext = React.createContext<AuthContextType>({currentUser:null,loading:true})

interface Props{
    children?:ReactNode
}


export const AuthProvider = ({ children }:Props) =>{
    const [currentUser,setCurrentUser] = useState<User|null>(null)
    const [loading,setLoading] = useState(true)
    
    useEffect(()=>{
        const unsubscriber = auth.onAuthStateChanged(user=>{
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscriber
    },[])
    const value = {
        currentUser,
        loading
    }

    return (
        <div>
            {loading === true && <div>Loading...</div>}
            <AuthContext.Provider value={value}>
                {!loading && children}
            </AuthContext.Provider>
        </div>
    )
}