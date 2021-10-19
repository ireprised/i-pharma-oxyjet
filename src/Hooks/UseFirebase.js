import { getAuth, GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.config";

initializeAuthentication();
const useFirebase =()=>{
const auth = getAuth();
const [user,setUser]= useState([]);
const [isLoading, setIsLoading] = useState(true)
   const signInWithGoogle = () => {
    setIsLoading(true)
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
    .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
    })
    .finally(()=>setIsLoading(false))
    
}

//observe user state
useEffect(()=>{
  const unSubscribed = onAuthStateChanged(auth, user=>{
        if(user){
            setUser(user)
        }
        else{
            setUser({})
        }
        setIsLoading(false)
    })
    return () => unSubscribed;
},[])
const logOut = () =>{
    setIsLoading(true)
    signOut(auth)
    .then(()=>{})
    .finally(()=>setIsLoading(false))
}

return {
    user,
    signInWithGoogle,
    logOut,
    isLoading
    

}

}

export default useFirebase;


