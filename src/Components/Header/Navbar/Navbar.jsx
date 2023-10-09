import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const Navbar = () => {
const {user, logOut} = useContext(AuthContext);

const handleSignout = () =>{
logOut()
.then()
.catch()
}

    const navLinks = 
    <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/work">Our Work</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
    <li><NavLink to="/cart">Cart</NavLink></li>
   
    <li><NavLink to="/register">Registration</NavLink></li>
    {/* <li><NavLink to="/login">Login</NavLink></li> */}
    {/* <li><NavLink to="/login">Login</NavLink></li> */}
             
           
   </>

    return (
        <div className="flex justify-between items-center py-5 mx-10 px-10 shadow-lg ">
            <Logo></Logo>
        <div className=" ">
            <div className="navbar  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box ">
             
            {navLinks}
            </ul>
          </div>
         
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">

           {navLinks}

          </ul>
         
        </div>
        {
              user ?
              <div className="dropdown">
  <label tabIndex={0} className="btn m-1">{user.email}</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>{user.photoURL? <img src={user.photoURL} alt="" /> : user.displayName
 }</a></li>
    <li onClick={handleSignout}><a>SignOut</a></li>
  </ul>
</div>
              :
              <Link to="/login">
            <button className="btn">Login</button>
            </Link>
           }
       
      </div>
        </div>
        </div>
    );
};

export default Navbar;