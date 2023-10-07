// import { useState } from "react";


const Banner = () => {
    const bgImg = {
        backgroundImage: "url(https://i.ibb.co/gVZ06sP/arjun-mj-UEei-Ze-KFlks-unsplash.jpg)",
        backgroundSize: "contain",
        backgroundPosition: "center",
      };
    return (
        <div className="py-10">
             <div style={bgImg}  className="h-[450px] relative flex flex-col justify-center items-center">
              <h2 className="text-6xl text-blue-700">Welcome</h2>
        <div className="absolute inset-0 bg-opacity-70  z-10">
         
        </div>
       
       
      </div>
        </div>
    );
};

export default Banner;