import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const auth = getAuth();
const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');


    const signUpUsingEmailPassword = () => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }



    const setUserProperties = () => {
        updateProfile(auth.currentUser, {
            displayName: firstName,
        })
            .then(result => { })
    }

    const signInUsingEmailPassword = () => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInUsingGoogle = () => {
        setIsLoading(true)
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                setUser({})
            })
            .catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false))
    }

    return {
        signInUsingEmailPassword,
        signUpUsingEmailPassword,
        user,
        setUser,
        setEmail,
        setPassword,
        signInUsingGoogle,
        setFirstName,
        setLastName,
        logOut,
        isLoading,
        setUserProperties,
        setIsLoading
    }
}

export default useFirebase;