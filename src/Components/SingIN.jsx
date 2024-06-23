import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { FcGoogle } from "react-icons/fc";
// import app from "../App";
// import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { IoMdEye } from "react-icons/io";
import { useContext, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { signInWithPopup } from "firebase/auth";
import auth from "../Components/Firebase/firebase.config";
import { AuthContext } from "./Provider/AuthProvider";
// import app from "../Components/Firebase/firebase.config";
// import { getAuth } from "firebase/auth";



const SingIN = () => {
   
    // const auth = getAuth(app);
    // console.log(app);
    // const provider = new GoogleAuthProvider();
 

    const handleGoogleSingIn =()=>{
        signInWithPopup(auth , provider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.log('error' , error.message);
        
        })
        console.log('google');
    }
    const [loginError , setLoginError] = useState('');
    const [success , setSuccess] = useState('');
    const [showPassword , setShowPassword] = useState(false);
    const {createUser} = useContext(AuthContext);
    
    const handleSingIn = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email , password);

        setLoginError('');
        setSuccess('');

        if (password.length < 6) {
            setLoginError(" Please set Your Password 6 Characters or Longer");
            return;          
        }
        else if (!/[A-Z]/.test(password)) {
            setLoginError("Your Password Should Have at Least One Uppercase");
            return;
        }
        
        createUser(email , password)
         .then(result =>{
            console.log(result);
            setSuccess("User Created Successfully");
           
         })
         .catch(error =>{
            console.error(error);
            setLoginError(error.massage);
         })

        
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen ">
           <div className="hero-content flex-col">
    <div className="text-center ">
      <h1 className="text-5xl font-bold text-slate-900 my-10">Login now!</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSingIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" className="input input-bordered" required />
          <span onClick={() =>setShowPassword(!showPassword)}>
            {
                showPassword ? <IoMdEye></IoMdEye> : <FaEyeSlash></FaEyeSlash>
            }
          </span>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <p className="text2xl text-slate-700">Are You New Here? Please <Link className="text-slate-950" to="/singup">Sing Up</Link> </p>
        <div className="form-control mt-6">
          <button className="btn text-slate-100 bg-slate-700 hover:bg-slate-900">Login</button>
        </div>
      </form>
      {
        loginError && <p className="text-red-700">{loginError}</p>
      }
      {
        success && <p className="text-green-700">{success}</p>
      }
    </div>
           <div>
              <button onClick={handleGoogleSingIn} className="btn btn-lg font-bold sm:btn-sm md:btn-md lg:btn-lg ">
                <FcGoogle></FcGoogle>
              </button>               
           </div>
           </div>
           
         </div> 
         <Footer></Footer>
        </div>
    );
};

export default SingIN;