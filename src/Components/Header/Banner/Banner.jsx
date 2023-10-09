// import { useState } from "react";


const Banner = () => {
    const bgImg = {
        backgroundImage: "url(https://i.ibb.co/1rMKNbk/amy-shamblen-p-J-DCj9-Ksw-I-unsplash.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat : "no-repeat",
        backgroundColor: '#FFFFFFB2',
      };
    return (
        <div className="pb-10">
             <div style={bgImg}  className="h-[450px] relative flex flex-col justify-center items-center" >
              <h2 className="text-6xl text-red-400 
              text-center"  data-aos="flip-left" 
              >Plan Your Day With Us <br />  & <br /> make your day more coloful</h2>
        <div className="absolute inset-0 bg-opacity-70  z-10">
         
        </div>
       
       
      </div>
        </div>
    );
};

export default Banner;