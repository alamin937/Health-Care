import firebaseAuthentication from "../firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged ,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile,sendEmailVerification , sendPasswordResetEmail  } from "firebase/auth";
import { useEffect, useState } from "react";


firebaseAuthentication()


const UseHooks = () =>{
    const [user, setUser] = useState({});
    const [error,setError] = useState()
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isLoading, setisLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    // google signin
    const googleSignIn = () =>{
        setisLoading(true)
        signInWithPopup(auth, provider)
        .then(result =>{
            setUser(result.user)
        })
        .finally(()=> setisLoading(false))
    }
    // registration form
    const registerForm = e =>{
        console.log(email,password)
        e.preventDefault();
        createNewUser(email,password)
        setError('')
    }
    // login form
    const loginForm = e =>{
        console.log(email,password)
        e.preventDefault();
        setError('')
        logInUser(email,password)
    }

    // reset Passowd

    const  resetPassword = () =>{
        sendPasswordResetEmail(auth, email)
        .then(()=>{

        })
    }

    // create user
    const createNewUser = (email,password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            setUser(result.user)
            userName();
            setError('')
            verifyEmail();
            console.log(result.user)
        })
        .catch(error =>{
            setError(error.message)
        })
    }

    // create login
    const logInUser = (email,password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            setUser(result.user)
            console.log(result.user)
            setError('')
        })
        .catch(error =>{
            setError(error.message)
        })
    }

    // email verify
    const verifyEmail = ()=>{
        sendEmailVerification(auth.currentUser)
        .then(()=>{ })
    }

    // name get
    const userName = () =>{
        updateProfile(auth.currentUser, {displayName:name}) 
        .then(()=>{ })
    }

    // onblur name
    const handleNameChange = e =>{
        setName(e.target.value)
    }

    // onblur email
    const handleEmailChange = e =>{
        setEmail(e.target.value)
    }

    // onblur passowrd
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }
    

    // signOut
    const logOut = ()=>{
        setisLoading(true)
        signOut(auth)
        .then(()=>{
            setUser({ })
        })
        .finally(()=> setisLoading(false))
    }

    // authChanged
    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({ })
            }
            setisLoading(false)
        })
    },[])

    return{
        user,
        googleSignIn,
        logOut,
        isLoading,
        handleEmailChange,
        handlePasswordChange,
        registerForm,
        loginForm,
        handleNameChange,
        error,
        resetPassword

    }

}

export default UseHooks;