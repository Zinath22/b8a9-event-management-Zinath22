import {  FaGoogle } from 'react-icons/fa';
import { useContext, useRef, useState } from "react";
import { Link, useLocation} from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../Firebase/firebase.config';
import swal from 'sweetalert';
// import { getAuth } from 'firebase/auth';

const Login = () => {
    
    const [loginError,  setLoginError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef(null);
    const passwordRef =  useRef(null);

    const [user, setUser] = useState();

    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = ()=>{
       signInWithPopup(auth, provider)
       .then(result =>{
        const loginUser = result.loginUser;
       setUser(loginUser);
       })
       .catch(error=>{
        console.error('error', error.message);
       })
    }
    const {signIn }= useContext(AuthContext)
    // location 
    const location = useLocation();
    console.log(location);
//  navigate 
    // const navigate = useNavigate()

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);

      
        const form = new FormData(e.currentTarget);
       
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password);

    // reset 
    setLoginError('');
    setSuccess('');
        
        signIn(email,password)
       .then(result =>{
            console.log(result.user)
            if(!result.user.emailVerified){
                swal('User Logged in  Successfully.')
            }
            else if(result.user){
                swal('Please verify your email address.')
            }
        
        // swal('User Log in Successfully');
        })
       

        // navigate 
        // navigate(location?.state ? location.state : '/')

        .catch(error=>{
            console.error(error);
            setLoginError(error.message);
            // if (error.message === 'Firebase: Error (auth/invalid-login-credentials).44') {
            //     return swal('Invalid user or pass');
            // }
            // if(!result.user.)
        })
        
    
    }
    // 
    //    email pass validation 
    // sendPasswordResetEmail(auth, email)
    // .then(()=>{
    // swal('please check your email')
    // })
    // .catch(error=>{
    //     console.log(error)
    // })
    
    
    return (
        
 <div className="flex md:flex-row flex-col my-5 rounded-lg justify-center  shadow-lg py-10 mx-auto w-2/3 ">
       <div className="w-2/3 ">

<h2 className="text-3xl  text-center " data-aos="flip-left"> Login Now</h2>

<form onSubmit={handleLogin}  className="lg:w-1/2 md:w-3/4 mx-auto " >
<div className="form-control">
<label className="label">
<span className="label-text">Email</span>
</label>
<input type="email" 

name="email"
ref={emailRef}
 placeholder="Email" className="input input-bordered " required />
</div>

{/* password  */}
<div className="form-control">
<label className="label">
<span className="label-text">Password</span>
</label>
<input 
type="password"

 name="password"
 ref={passwordRef}
  placeholder="password" className="input input-bordered" required />
 {/* <label ><a onClick={handleForgot} className='label-text-alt link link-hover text-sm' href="">Forgot Password?</a></label> */}
</div>

<div className="form-control mt-6">
<button className="btn btn-secondary">Login</button>
</div>
{user && <div>
    <h3>user?:{user.email}</h3>
</div>
 }

</form>

{
                    loginError && <p className="text-red-700 text-center">{loginError}</p>
                }

{
  success && <p className="text-green-400 text-3xl text-center">{success}</p>
}

<p className="text-center mt-4" data-aos="flip-left">New to this website Please <Link className="text-blue-700 font-bold" to="/register">Register</Link> </p>
</div>
<div className="py-7 w-3/2 mr-5 ">
    <h1 className='mb-5 text-center text-sky-500 font-semibold text-3xl' data-aos="flip-left">...OR... <br />Login With</h1>
    <button onClick={handleGoogleSignIn} className='btn btn-outline w-full '>
    <FaGoogle></FaGoogle>Login With Google
    </button>
   
</div>
 </div>


 
        
    );
};

export default Login;