// import { useNavigate } from "react-router-dom";


const Contact = () => {
    // const navigate = useNavigate()

    // navigate(location?.state ? location.state : '/')
    return (
        <div className="px-10 my-10  ">
            <div className=" rounded-lg   bg-green-400">
  <div className=" text-center">
   <div className="flex justify-between mx-auto  text-center items-center">

   <div className=" mx-auto ">
      <h1 className="text-3xl  mb-5">Contact Us</h1>
      <h1 className="text-2xl mb-4">phone: <span className="text-pink-500">+0999911</span></h1>
     
      <h1 className="text-2xl">Email: <span className="text-pink-500">event@event.com</span></h1>
   </div>
    
   <div className="px-5 mx-auto">
<h1 className="text-3xl mt-10">Our Services</h1>
   <ul className=" mt-4 mb-10">
        <li className="text-2xl">
            .Stage Decoration
        </li>
        <li  className="text-2xl">
            .Lighting
        </li>
        <li  className="text-2xl">
            .Photography
        </li>
        <li  className="text-2xl">
            .Cinematography
        </li>
      </ul>
   </div>
      
      {/* <button className="btn btn-primary"></button> */}
    </div>
    
  </div>
  
</div>
        </div>
    );
};

export default Contact;