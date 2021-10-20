import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../firebase/firebase.config';



initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const auth = getAuth();
    // const history = useHistory();
    // const location = useLocation();
    // const redirect_uri = location.state?.from || `/home`;
    const googleProvider = new GoogleAuthProvider();

    // console.log(redirect_uri)

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .finally(() => { setLoading(false) });
    }

    const createRegister = (email,password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            
            const user = userCredential.user;
           console.log(user)
          })
    }

    const singnUser = (email,password) =>{
        
       return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        
        const user = userCredential.user;
        console.log(user)
    
    })
    };

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    }

    // observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [auth])

    return {
        user,
        loading,
        signInUsingGoogle,
        logOut,
        createRegister,
        singnUser
    }
}

export default useFirebase;