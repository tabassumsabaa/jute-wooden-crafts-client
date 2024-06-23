import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { IoMdEye } from "react-icons/io";
import { useContext, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
// import { createUserWithEmailAndPassword } from "firebase/auth";
//import auth from "../Components/Firebase/firebase.config";
import { AuthContext } from "./Provider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "./Firebase/firebase.config";
import Swal from "sweetalert2";


const SingUP = () => {
    const [registerError , setRegisterError] = useState('');
    const [success , setSuccess] = useState('');
    const [showPassword , setShowPassword] = useState(false);
    const {createUser} = useContext(AuthContext);
   // const {singInUser} = useContext(AuthContext);
    
    // const [loggedIn, setLoggedIn] = useState(false);
    const auth = getAuth(app);
    const handleSingUp = event =>{
        event.preventDefault();
        const form = event.target;
        const given = form.given.value;
        const surname = form.surname.value;
        const number = form.number.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
       
        console.log(given, surname, number, email , password, photoURL);

        setRegisterError('');
        setSuccess('');
        // setLoggedIn('');
        

        if (password.length < 6) {
            setRegisterError(" Please set Your Password 6 Characters or Longer");
            return;          
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError("Your Password Should Have at Least One Uppercase");
            return;
        }
        
        // if (user){
        //   setLoggedIn(true);
        // }else{
        //   setLoggedIn(false);
        // }

        createUser(email , password)
         .then(result =>{
            console.log(result);
            updateProfile(auth.currentUser, {
              displayName: {email} , photoURL: {photoURL}
            }).then(() => {
              // Profile updated!
              // ...
            }).catch((error) => {
              // An error occurred
              // ...
            });
            setSuccess("User Created Successfully");
             //new user created 
             const createdAt = result.user?.metadata?.creationTime;
             const users = {email, createdAt: createdAt };
             fetch('http://localhost:5000/users' , {
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(users)
             })
               .then(res => res.json())
               .then(data =>{
                if (data.insertedId ) {            
                  Swal.fire({
                      title: 'Success!',
                      text: 'User Added Successfully',
                      icon: 'success',
                      confirmButtonText: 'Welcome'
                    })              
                }
              })
         })
         .catch(error =>{
            console.error(error);
            setRegisterError(error.massage);
         })

        //  singInUser(email, password)
        //  .then(result =>{
        //     console.log(result.user);
        //  })
        //  .catch(error =>{
        //     console.log(error);
        //  })

    }    
    return (
        <div>
             <Navbar></Navbar>
        <div className="hero min-h-screen bg-base-200 my-10">
  <div className="hero-content flex-col ">
    <div className="text-center m-10 ">
      <h1 className="text-5xl text-stone-900-900 font-bold">SING UP NOW!</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSingUp} className="card-body max-w-full">
      <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input type="text" name="given" placeholder="Given name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input type="text" name="surname" placeholder="Surname" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone No.</span>
          </label>
          <input type="number" name="number" placeholder="Phone No." className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">photoURL</span>
          </label>
          <input type="photoURL" name="photoURL" placeholder="photoURL" className="input input-bordered"  />
        </div>
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
          <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
          <span onClick={() =>setShowPassword(!showPassword)}>
            {
                showPassword ? <IoMdEye></IoMdEye> : <FaEyeSlash></FaEyeSlash>
            }
          </span>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

         <p className="text2xl  text-slate-700">Have You Already Register? Please <Link className="text-slate-950" to="/singin">Sing In</Link> </p>
        <div className="form-control mt-6">
          <button className="btn text-slate-100 bg-slate-700 hover:bg-slate-900">Register Here</button>
        </div>
      </form>
      {/* {
        loggedIn && user
      } */}
      {
        registerError && <p className="text-red-700">{registerError}</p>
      }
      {
        success && <p className="text-green-700">{success}</p>
      }
    </div>
  </div>
</div>
<Footer></Footer>
        </div>
    );
};

export default SingUP;