import { getAuth, GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../firebase/firebase.config";

initializeAuthentication();
const useFirebase =()=>{
const auth = getAuth();
const [user,setUser]= useState([]);

   const signInWithGoogle = () => {
    
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
    .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
    })
    
}


return {
    user,
    signInWithGoogle
    

}

}

export default useFirebase;


