import { Link} from "react-router-dom";


const Login = () => {
    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);

      
        const form = new FormData(e.currentTarget);
       
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password);
    
    }   
    
    
    return (
        <div>
    <div>

<h2 className="text-3xl my-10 text-center ">Now Login</h2>

<form onSubmit={handleLogin}  className="lg:w-1/2 md:w-3/4 mx-auto" >
<div className="form-control">
<label className="label">
<span className="label-text">Email</span>
</label>
<input type="email" name="email" placeholder="Email" className="input input-bordered " required />
</div>
<div className="form-control">
<label className="label">
<span className="label-text">Password</span>
</label>
<input type="password" name="password" placeholder="password" className="input input-bordered" required />

</div>
<div className="form-control mt-6">
<button className="btn btn-secondary">Login</button>
</div>
</form>
<p className="text-center mt-4">Do not have an account <Link className="text-blue-700 font-bold" to="/register">Register</Link> </p>
</div>
        </div>
    );
};

export default Login;