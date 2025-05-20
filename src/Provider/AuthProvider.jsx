import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../Firbase/firebase.init';

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
const [user,setUser] = useState(null)
console.log(user)

const CreateUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
}

const Login = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
}

const LoginWithGoogle = () =>{
    return signInWithPopup(auth, provider);
}



const Logout = ( )=>{
   return signOut(auth)
}


useEffect( ()=>{

  const unsubcribe =   onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
 
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
    Logout



}

    return <AuthContext value={Authdata} >{children}</AuthContext>
};

export default AuthProvider;