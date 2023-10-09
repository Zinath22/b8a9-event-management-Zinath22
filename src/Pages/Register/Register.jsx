import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

import swal from "sweetalert";


const Register = () => {

  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');

  
    const {createUser, logOut}  = useContext(AuthContext)


const validatePassword = (password) => {
  if (password.length < 6) {
      swal('Password must be at least 6 characters.');
  }

  if (!/[A-Z]/.test(password)) {
      swal('Password must contain at least one uppercase letter.');
  }

  if (!/[a-z]/.test(password)) {
      swal('Password must contain at least one lowercase letter.');
  }

  if (!/[!@#$%^&*]/.test(password)) {
      swal( 'Password must contain at least one special character.');
  }

  return ''; // No validation error
};

const handleRegister = e => {
  e.preventDefault();
  console.log(e.currentTarget);

  const form = new FormData(e.currentTarget);
  const name = form.get('name');
  const email = form.get('email');
  const password = form.get('password');
  console.log(name, email, password);

  const errorMessage = validatePassword(password);

  if (errorMessage) {
      swal(errorMessage);
      return;
  }

  // reset
  setRegisterError('');
  setSuccess('');

  // user create
  createUser(email, password)
      .then(result => {
          console.log(result);
          swal('Registration successful');
          setSuccess('Registration successful');
          logOut().then().catch()
      })
      .catch(error => {
          console.error(error);
          setRegisterError(error.message); // Update state
      });
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


<input  type="text"
name="password" 
placeholder="password" className="input input-bordered   " required />

</div>
<div className="form-control mt-6">
<button className="btn  bg-pink-500">Register</button>
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