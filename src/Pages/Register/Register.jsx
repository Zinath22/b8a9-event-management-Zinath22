

// export default Register;
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Register = () => {
    const [error, setError] = useState('');
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false); // State for checkbox
    const { createUser, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    // const handleRegister = e => {
    //     e.preventDefault();

  

    
        const handleRegister = e => {
            e.preventDefault();
        
            const email = e.target.email.value;
            const password = e.target.password.value;
            const confirmPassword = e.target.confirmPassword.value;
        
            // Validate password
            const passwordValidationResult = validatePassword(password);
            if (passwordValidationResult !== true) {
                Swal.fire(
                    'Oops!',
                    passwordValidationResult,
                    'error'
                );
                return;
            }
        
            if (password !== confirmPassword) {
                Swal.fire(
                    'Oops!',
                    'Password and Confirm Password do not match.',
                    'error'
                );
            } else if (!isCheckboxChecked) {
                Swal.fire(
                    'Oops!',
                    'Please accept the Terms of Use and Privacy Policy.',
                    'error'
                );
            } else {
                createUser(email, password)
                    .then(r => {
                        console.log(r.user);
                        Swal.fire(
                            'Success!',
                            'User registration successful.',
                            'success'
                        );
        
                        // Reset the form fields
                        e.target.email.value = '';
                        e.target.password.value = '';
                        e.target.confirmPassword.value = '';
                        setIsCheckboxChecked(false);
        
                        logOut()
                            .then(() => {
                                // Log out success
                            })
                            .catch(error => {
                                console.error(error);
                            });
                        navigate(location?.state ? location.state : '/login')
                    })
                    .catch(error => {
                        console.error(error);
                        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
                            Swal.fire(
                                'Oops!',
                                'User already exists.',
                                'error'
                            );
                        } else(setError(error.message))
                    });
            }
        }
        
        const handleCheckboxChange = (e) => {
            setIsCheckboxChecked(e.target.checked);
        }
    
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
    
            if (!/[!@#$%^&*()_+\-= [\]{};':"\\|,.<>?]/.test(password)) {
                return 'Password must contain at least one special character.';
            }
    
            if (!/\d/.test(password)) {
                return 'Password must contain at least one number.';
            }
    
            return true;
        }
    return (
        <div>
         
            <p className=" text-center text-red-600">{error}</p>
            <div className="w-full lg:w-1/2 my-10 mx-auto py-11 px-12 text-white font-bold" style={{ backgroundImage: 'linear-gradient(115deg, #FF6666, #FFFFFF)' }}>
                            <h2 className="text-3xl mb-4">Register</h2>
                            <p className="mb-4">
                                Create your account. It&rsquo;s free and only takes a minute
                            </p>
                            <form onSubmit={handleRegister} className="text-black">
                               
                                <div className="mt-5">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        required
                                        className="input rounded  w-full" />
                                </div>
                                <div className="mt-5">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                        className="input rounded  w-full" />
                                </div>
                                <div className="mt-5">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        required
                                        className="input rounded  w-full" />
                                </div>
                                <div className="mt-5">
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        required
                                        className="input rounded  w-full" />
                                </div>
                                <div className="mt-5">
                                    <input
                                        type="checkbox"
                                        className="border border-gray-400 mr-3"
                                        onChange={handleCheckboxChange} />
                                    <span>
                                        I accept the <a href="#" className="text-red-500 font-semibold">Terms of Use</a> &  <a href="#" className="text-red-500 font-semibold">Privacy Policy</a>
                                    </span>
                                </div>
                                <div className="mt-5">
                                    <button className="w-full bg-red-500 py-3 text-center rounded text-white">Register Now</button>
                                    <p className="text-center mt-3">Already Have an Account? <Link to="/login">
                                        <span className="btn-link font-medium text-red-500">Login</span>
                                    </Link>
                                    </p>
                                </div>

                            </form>
                        </div>
        </div>
    );
};

export default Register;




