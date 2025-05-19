import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../Firbase/firebase.init';

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)


const CreateUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
}

const Login = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
}

const Authdata = {
    CreateUser,
    Login,
    user,
    setUser,
    


}

    return <AuthContext value={Authdata} >{children}</AuthContext>
};

export default AuthProvider;