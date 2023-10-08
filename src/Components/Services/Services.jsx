// import ServicesCard from "./ServicesCard";

import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = ()=>{
   
const [services, setServices] = useState([]);
                 
useEffect(()=>{
fetch('data.json')
.then(r=> r.json())
.then(data=>setServices(data))
},[])


    return (
        <div className="py-10  ">
            <h1 className="mb-5 text-2xl font-bold text-center bg-pink-300 w-max py-2 px-2 rounded-lg mx-auto">Our Events</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services?.map(service => <ServicesCard
                         key={service.id}
                         service={service }></ServicesCard> )
                        
                    
                } 
             </div> 
        </div>
    );
};

export default Services;