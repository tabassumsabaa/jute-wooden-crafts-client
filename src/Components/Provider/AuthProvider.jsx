import { createContext, useState } from "react";
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";


const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const[user , setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email , password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email , password);
    };

    // const singInUser = (email, password) =>{
    //     setLoading(true);
    //     return singInWithEmailAndPassword(auth, email, password);
    // }
    
    // const logOut = () =>{
    //     setLoading(true);
    //     return singOut()
    // }
    const userInfo = {user, loading, createUser };
    // const provider = new GoogleAuthProvider();
    // signInWithPopup(auth , provider)
    // .then(result =>{
    //     const user = result.user;
    //     console.log(user);
    // })
    // .catch(error =>{
    //     console.log('error' , error.message);
    // })


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;