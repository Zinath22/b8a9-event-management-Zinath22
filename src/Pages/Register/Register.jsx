import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import swal from "sweetalert";
// import {  toast } from 'react-toastify';
// import swal from 'sweetalert';

const Register = () => {

  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const[showPassword, setShowPassword] = useState(false)
  
    const {createUser}  = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name,email,password);

        if (password.length < 6) {
          setRegisterError('Password should be at least 6 characters or longer');
          return;
      }
      else if(!/[A-Z](?=.*[!@#$%^&*])/.test(password)) {
          setRegisterError('Your password should have at least one upper case and special characters.')
          return;
      }

    // reset 
    setRegisterError('');
    setSuccess('');

        // user create 
      createUser(email, password)
      .then(result =>{
        console.log(result);
       setSuccess('Registration successfully')

      })
      .catch(error=>{
        console.error(error)
        // setRegisterError(error.message)
    })
    }

    return (
        <div>
 <div className="shadow-lg md:w-3/4 lg:w-1/2 mx-auto mt-5 py-5 mb-5 rounded-lg px-5 bg-pink-400">

<h2 className="text-3xl my-7 text-center ">Please Register</h2>

<form onSubmit={handleRegister} className="" >
<div className="form-control">
<label className="label">
<span className="label-text">Name</span>
</label>
<input type="text" name="name" placeholder="Name" className="input input-bordered" required />
</div>

<div className="form-control">
<label className="label">
<span className="label-text">Email</span>
</label>
<input type="email" name="email" placeholder="Email" className="input input-bordered" required />
</div>
<div className="form-control  ">
<label className="label">
<span className="label-text">Password</span>



</label>

<div className="w-full  mx-auto relative ">
<input  type={showPassword ? "text" : "password"}
name="password" 
placeholder="password" className="input input-bordered   " required />

<span className="absolute top-3 right-1" onClick={()=> setShowPassword(!showPassword)}>
  { 
   
   showPassword ? <FaEyeSlash> </FaEyeSlash> : <FaEye></FaEye>
  }
</span>
</div>

</div>
<div className="form-control mt-6">
<button className="btn  bg-purple-500">Register</button>
</div>
</form>

{
                    registerError && <p className="text-red-700 text-center">{registerError}</p>
                }

{
  success && <p className="text-green-400 text-3xl text-center">{success}</p>
}

<p className="text-center mt-4">Already have an account <Link className="text-blue-700 font-bold" to="/login">Login</Link> </p>




</div>
        </div>
    );
};

export default Register;