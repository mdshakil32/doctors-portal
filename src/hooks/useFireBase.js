import initializeAuthentication from "../Components/Login/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged,signOut,updateProfile     } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication()

const useFireBase = () => {
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);
    const [authError,setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // google login 
    const loginWithGoogle = (history,location)=>{
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setUser(result.user);

            saveUser(result.user.email, result.user.displayName,'PUT')

            const destination = location?.state?.from || '/home';

            history.replace(destination);
            setAuthError('');
        
        }).catch((error) => {
             setAuthError(error.message)
        }).finally(()=> setIsLoading(false));
}

    //  register by email, password
    const registerUser = (email,password,name,history)=>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = {email,displayName:name}
            setUser(newUser);
            saveUser(email,name,'POST')
            
            updateProfile(auth.currentUser, {
                displayName: name
                })
                .then(() => {})
                .catch((error) => {});
            history.replace('/');
        })
        .catch((error) => {
            console.log( error.code);
            setAuthError(error.message)
        })
        .finally(()=> setIsLoading(false))
    }

    // login by email, password 
    const loginByPassword = (email, password,history,location)=>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setUser(userCredential.user);
            const destination = location?.state?.from || '/home';
            history.replace(destination);
            setAuthError('')
        })
        .catch((error) => {
            setAuthError(error.message)
        })
        .finally(()=> setIsLoading(false))
    }

    // logout 
    const logout=()=>{
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({});
            setAuthError('')
          }).catch((error) => {
            setAuthError(error.message)
          })
          .finally(()=> setIsLoading(false))
    }

    // user observer 
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser({});
            }
            setIsLoading(false)
          });
          return ()=>unsubscribe;
    },[]);

    // save user
    const saveUser =(email,dsiplayName,method)=>{
        const user = {email,dsiplayName}
        fetch('https://powerful-meadow-55949.herokuapp.com/users',{
            method:method,
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)

        })
        .then()
    }

    return{
        loginWithGoogle,
        registerUser,
        loginByPassword,
        logout,
        user,
        setUser,
        isLoading,
        authError
    }
}

export default useFireBase;