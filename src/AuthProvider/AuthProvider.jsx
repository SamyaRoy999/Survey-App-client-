import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";



export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loding, setLoding] = useState(true)
    const [name, setName] = useState(null)
    const [photoURl, setPhotoURl] = useState(null)
    
    // Gooogle login 
    const googleLogin = () => {
        setLoding(true)
        return signInWithPopup(auth, googleProvider)
    }

    // createUser password 
    const emailBaseLogin = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    // sign in user 

    const signInUser = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    //Update user
    const userUpdateProfile = (name, photoURL) => {
        setLoding(true) 
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }
    // user find
    useEffect(() => {
        const unSuvscrive = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            setLoding(false)
        }); return () => unSuvscrive()
    }, [])
  


    // sign out 
    const userSignOut = () => {
        signOut(auth)
        setUser(null)
    }

    const allvalue = {
        user,
        loding,
        googleLogin,
        emailBaseLogin,
        signInUser,
        userSignOut,
        userUpdateProfile,
        setName,
        setPhotoURl,
        name,
        photoURl,
        

    }
    // console.log(user.displayName);
    return (
        <AuthContext.Provider value={allvalue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

AuthProvider.propTypes = {
    children: PropTypes.any
}