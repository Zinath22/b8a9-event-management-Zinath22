import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import swal from "sweetalert";
// import swal from "sweetalert";
// import {  toast } from 'react-toastify';
// import swal from 'sweetalert';

const Register = () => {

  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const[showPassword, setShowPassword] = useState(false)
  
    const {createUser, logOut}  = useContext(AuthContext)

    // const handleRegister = e =>{
    //     e.preventDefault();
    //     console.log(e.currentTarget);

    //     const form = new FormData(e.currentTarget);
    //     const name = form.get('name');
    //     const email = form.get('email');
    //     const password = form.get('password');
    //     console.log(name,email,password);

    //     if (password.length < 6) {
    //       swal('Password should be at least 6 characters or longer');
    //       return;
    //   }

      

    // //  if(!/[A-Z]/.test(password)){
    // //     swal('password should have at least one upper case')
    // //   }

    //   if(!/[A-Z].[!@#$%^&*]/.test(password)) {
    //     swal('Your password should have at least one special characters')
    //     return;
    // }
     

    // // reset 
    // setRegisterError('');
    // setSuccess('');

    //     // user create 
    //   createUser(email, password)
    //   .then(result =>{
    //     console.log(result);
    //    swal('Registration successfully')

    //   })
    //   .catch(error=>{
    //     console.error(error)
    //     // setRegisterError(error.message)
    // })
    // }
//     const handleRegister = e => {
//       e.preventDefault();
//       console.log(e.currentTarget);
  
//       const form = new FormData(e.currentTarget);
//       const name = form.get('name');
//       const email = form.get('email');
//       const password = form.get('password');
//       console.log(name, email, password);
  
//       if (password.length < 6 || !/[A-Z]/.test(password) || !/[!@#$%^&*]/.test(password)) {
//           swal('Password should be at least 6 characters long, contain at least one uppercase letter, and one special character');
//           return;
//       }
  
//       // reset
//       setRegisterError('');
//       setSuccess('');
  
//       // user create
//       createUser(email, password)
//           .then(result => {
//               console.log(result);
//               swal('Registration successful');
//               setSuccess('Registration successful'); // Update state
//           })
//           .catch(error => {
//               console.error(error);
//               setRegisterError(error.message); // Update state
//           });
//   }
//   const handleRegister = e => {
//     e.preventDefault();
//     console.log(e.currentTarget);

//     const form = new FormData(e.currentTarget);
//     const name = form.get('name');
//     const email = form.get('email');
//     const password = form.get('password');
//     console.log(name, email, password);

//     // let errorMessage = '';

//     if (password.length < 6) {
//       return  'Password should be at least 6 characters long. ';
//     }

//     if (!/[A-Z]/.test(password)) {
//        return 'Password should contain at least one uppercase letter. ';
//     }

//     if (!/[a-z]/.test(password)) {
//        return  'Password should contain at least one lowercase letter. ';
//     }

//     if (!/[!@#$%^&*]/.test(password)) {
//        return  'Password should contain at least one special character. ';
//     }

//     // if (errorMessage) {
//     //     swal(errorMessage);
//     //     return;
//     // }

//     // reset
//     setRegisterError('');
//     setSuccess('');

//     // user create
//     createUser(email, password)
//         .then(result => {
//             console.log(result);
//             swal('Registration successful');
//             // setSuccess('Registration successful'); // Update state
//         })
//         .catch(error => {
//             console.error(error);
//             setRegisterError(error.message); // Update state
//         });
// }

const validatePassword = (password) => {
  if (password.length < 6) {
      return 'Password must be at least 6 characters.';
  }

  if (!/[A-Z]/.test(password)) {
      return 'Password must contain at least one uppercase letter.';
  }

  if (!/[a-z]/.test(password)) {
      return 'Password must contain at least one lowercase letter.';
  }

  if (!/[!@#$%^&*]/.test(password)) {
      return 'Password must contain at least one special character.';
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