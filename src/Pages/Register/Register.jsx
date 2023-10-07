import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {
    const {createUser}  = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name,email,password);
    

        // user create 
      createUser(email, password)
      .then(result =>{
        console.log(result);
      })
      .catch(error=>{
        console.error(error)
    })
    }

    return (
        <div>
 <div>

<h2 className="text-3xl my-7 text-center ">Please Register</h2>

<form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto" >
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
<div className="form-control">
<label className="label">
<span className="label-text">Password</span>
</label>
<input type="password" name="password" placeholder="password" className="input input-bordered" required />

</div>
<div className="form-control mt-6">
<button className="btn btn-primary">Register</button>
</div>
</form>
<p className="text-center mt-4">Already have an account <Link className="text-blue-700 font-bold" to="/login">Login</Link> </p>
</div>
        </div>
    );
};

export default Register;