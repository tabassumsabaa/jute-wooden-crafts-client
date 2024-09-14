import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const[user , setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email , password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email , password);
    };

    const signIn = ( email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password); 
    };

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
            if (currentUser) {
                const userInfo = { email: currentUser.email};
               console.log(userInfo);               
            }        
        });
        return () =>{
            return unsubscribe();
        }
    }, [])

    const authInfo = {user, loading, createUser, signIn, googleSignIn, logOut };
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;