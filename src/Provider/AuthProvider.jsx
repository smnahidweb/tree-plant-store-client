import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../Firbase/firebase.init';

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
const [user,setUser] = useState(null)
const [loading,setLoading] = useState(true)
console.log(user)

const CreateUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
    
}

const Login = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
}

const LoginWithGoogle = () =>{
    setLoading(true)
    return signInWithPopup(auth, provider);
}



const Logout = ( )=>{
   return signOut(auth)
}


useEffect( ()=>{

  const unsubcribe =   onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        setLoading(false)
 
    });
    return () =>{
        unsubcribe()
    }


},[] )

const Authdata = {
    CreateUser,
    Login,
    user,
    setUser,
    LoginWithGoogle,
    Logout,
    loading,
    setLoading



}

    return <AuthContext value={Authdata} >{children}</AuthContext>
};

export default AuthProvider;