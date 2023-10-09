

import { Link, useLoaderData, useParams } from "react-router-dom";
import { getstoredBooking, saveBooking } from "../../Utility/LocalStorage";
import Swal from 'sweetalert';
// import { useNavigate } from "react-router-dom";



// import Navbar from "../../Component/Navbar/Navbar";


const ServiceDetails = () => {
    
  // const navigate = useNavigate()
  const services = useLoaderData();
  const { id } = useParams();
  const service = services.find(service => service.id === parseInt(id));

  const handleBooking = () => {
      const storedBookings = getstoredBooking();
      const exists = storedBookings.find(serviceId => serviceId === parseInt(id));
      
      if (exists) {
          // Card has been added before
          Swal(
              
              'Card has been added before!',
              
          );
      } else {
          // Card has not been added before, add it to local storage
          saveBooking(parseInt(id));
          Swal(
              'Good job!',
              'Card  added successfully!'
              
          );
      }
  }
    
    return (
        <div className="flex py-5 justify-center items-center text-center">
            
            <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 mt-4  overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
    <img
      src={service.card_img}
      className=" w-full object-cover"
    />
  </div>
  <div className="p-5">
    <div className=" flex items-center justify-between">
     
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
    <Link to={`/services/${id}`}>
   <button
onClick={handleBooking}
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
