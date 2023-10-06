// import { useState } from "react";


const Banner = () => {
    const bgImg = {
        backgroundImage: "url(https://i.ibb.co/X8Ytc63/banner.jpg)",
        backgroundSize: "contain",
        backgroundPosition: "center",
      };
    return (
        <div className="py-10">
             <div style={bgImg}  className="h-[450px] relative flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-opacity-40 bg-gray-100 z-10">
         
        </div>
       
       
      </div>
        </div>
    );
};

export default Banner;