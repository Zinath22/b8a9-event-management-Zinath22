import { useLoaderData, useParams } from "react-router-dom";



// import Navbar from "../../Component/Navbar/Navbar";


const ServiceDetails = () => {
    // const {id,card_img,name,price,description} = service;
    
    const services = useLoaderData();
    const {id} = useParams(); 
    const service = services.find(service => service.id === parseInt(id));
    console.log(service);
    return (
        <div>
            
           <h1> details of {service.name} </h1> 
           <button  className="btn btn-secondary">Book Now</button>
        </div>
    );
};

export default ServiceDetails;
