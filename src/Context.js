//import React, { useState,useEffect,useContext } from 'react'
//const AuthContext = React.createContext("")

//export function useAuth(){
    /*return useContext(AuthContext)
}

export function AuthProvider(props){
    const [authUser, setAuthUser]= useState(null)
    const [isLoggedIn, setIsLoggedIn]=useState(false)

    const value={
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    }
    return(
        <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
    )
}
    */
import React, { createContext, useState } from 'react';

// Create context
export const AuthContext = createContext();

// Create provider component
export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({ email: '', password: '' ,isUserLoggedIn: false});

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};

