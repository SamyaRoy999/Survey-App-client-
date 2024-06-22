import { createContext, useEffect, useState } from "react"
import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from 'prop-types';
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../firebase/firebase.config";
import useAxiosPublicSecour from "../hooks/useAxiosPublicSecour";




export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPiublic = useAxiosPublicSecour()

    // Create User
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign In User

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google sing in

    const googleSingIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // github sing in

    const githubSingIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // user profile Update

    const updataProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // sing out 

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {

        const unsubcribe = onAuthStateChanged(auth, (creantUser) => {
            setUser(creantUser)
            // console.log("get user", creantUser);
            if (creantUser) {
                const userInfo = { email: creantUser.email };

                axiosPiublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);

                        }
                    })
            }

            setLoading(false)
        });
        return () => {
            return unsubcribe()
        }
    }, [axiosPiublic])



    const allValue = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        updataProfile,
        googleSingIn,
        githubSingIn
    }

    return (
        <AuthContext.Provider value={allValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

AuthProvider.propTypes = {
    children: PropTypes.any
};