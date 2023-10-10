const Choose = () => {
  return (
    
    <div className="my-20 space-y-4">
      <h1 className="text-4xl text-red-500 text-center text-semibold mb-2" data-aos="flip-left">WHY CHOOSE US FOR YOUR EVENT?</h1>
  <p className="text-center  mt-5 mb-7">Event that you will Remember</p>
      <div className="flex md:flex-row flex-col justify-evenly items-center">
        <div>
        <div className="space-y-4">
        <h2 className="text-3xl text-center text-red-500 mb-2" data-aos="flip-left">ALL KIND OF LOGISTICS <br /> AND RESOURCES SUPPORT</h2>
         <p className="text-gray-500 text-center" data-aos="flip-left">As an experienced Event Management company, <br /> we have all kind of Event equipment, logistics and resources available</p>
        </div>

         
        </div>
        <img
          className="w-[500px] h-[300px] mt-5 rounded-lg"
          src="
https://i.ibb.co/pKmDwb7/krists-luhaers-Yh-C216t-AYAg-unsplash.jpg"
          alt=""
        />
      </div>
      <div className="flex md:flex-row flex-col-reverse justify-evenly items-center">
      <img className="w-[500px] h-[300px] rounded-lg" src="https://i.ibb.co/6vrjYq6/reinhart-julian-Wx-M465o-M4j4-unsplash.jpg" alt="" />
      <div>
      <div className="space-y-4">
      <h2 className="text-3xl text-center text-red-500 mt-7 mb-2" data-aos="flip-left">EXPERIENCED EVENT PLANNER <br /> AND MANAGER</h2>
        <p className="text-gray-500 text-center" data-aos="flip-left">When it is about making your Event successful, <br /> it is all about making a good plan, managing and executing successfully. <br /> And, we have experienced who will make your event unique and memorable!
  </p>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Choose;
