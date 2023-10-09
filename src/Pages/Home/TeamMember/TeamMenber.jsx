// import { useState } from "react";


const TeamMenber = () => {
    // const [team_img, description] = useState([])
    return (
        <div className="md:py-20 py-10">
             <div className=" shadow-lg bg-red-400  mb-5 w-3/4 mx-auto rounded-lg py-5  text-center flex flex-col justify-center items-center">

          <h3 className="mb-5 text-center  text-4xl font-bold text-white">Meet The Team Section</h3>
      
         
          <div className="grid text-center p-8 grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
           
          <div className=" space-y-3 flex justify-center items-center flex-col  text-center">
            <img src="https://i.ibb.co/19d2XGf/member1.png" alt="" />
            <p className="text-xl text-white">Pavel Das</p>
            <p className="font-medium text-white">Expert for event Management and photography </p>
          </div>
          <div className="space-y-3 flex justify-center items-center flex-col  text-center">
            <img src="https://i.ibb.co/4TQ70Vm/member2.png" alt="" />
            <p className="text-xl text-white" >Pinky Hossain</p>
            <p className="font-medium text-white">Expert for event Management and photography </p>
          </div>
          <div className="space-y-3 flex justify-center items-center flex-col  text-center">
            <img src="https://i.ibb.co/C7vPW19/member3.png" alt="" />
            <p className="text-xl text-white">Habib Hossain</p>
            <p className="font-medium text-white">Expert for event Management and photography </p>
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