// import { Link, useLoaderData, useParams } from "react-router-dom";

import { Link, useLoaderData, useParams } from "react-router-dom";

// import { useNavigate } from "react-router-dom";



// import Navbar from "../../Component/Navbar/Navbar";


const ServiceDetails = () => {
    
  // const navigate = useNavigate()

  // navigate(location?.state ? location.state : '/service')
    
    const services = useLoaderData();
    const {id} = useParams();
     
    const service = services.find(service => service.id === parseInt(id));
    console.log(service);
    return (
        <div className="flex py-5 justify-center items-center text-center">
            
            <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
    <img
      src={service.card_img}
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <div className="mb-2 flex items-center justify-between">
     
       <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
       {service.name} 
       
      </p> 
     <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
       {service.price}k
      </p> 
    </div>
    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
     {service.description}
    </p>
  </div>
  <div className="p-6 pt-0">
    <Link to="/service">
   <button
      className="btn btn-secondary w-full "
     
    >
      Add to Cart
    </button>
   </Link> 
  </div>
</div>
        </div>
    );
};

export default ServiceDetails;
