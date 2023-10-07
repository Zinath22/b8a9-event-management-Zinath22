import { useState } from "react";


const TeamMenber = () => {
    const [team_img, description] = useState([])
    return (
        <div>
             <div className=" shadow-lg   text-center flex flex-col">
        <div className="max-w-md">
          <h3 className="mb-5 text-4xl font-bold text-black">Meet The Team Section</h3>
          <p className=" font-sm text-black">{description}</p></div>
         
          <div className="grid mt-5 grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-4 max-w-4xl">
           
          <div>
            <img src={team_img} alt="" />
          </div>
          
          
           
          
          
          
          
           
          
          
            {/* <div className="">
            <img src="./images/member4.png" alt=""/>
            <h4 className="mt-3">Chaity</h4>
            <p>Fruits Expert</p>
            <div className="flex gap-2 justify-center items-center ">
            <i><img className="mt-3" src="./images/facebook 1 (1).svg" alt=""/></i>
            <i><img className="mt-3" src="./images/twitter (1) 1.svg" alt=""/></i>
            <i><img className="mt-3" src="./images/linkedin 1 (1).svg" alt=""/></i>
          </div>
          </div>
           */}
        
      </div>
      </div>
        </div>
    );
};

export default TeamMenber;