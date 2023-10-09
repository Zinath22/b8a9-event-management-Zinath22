// import { useNavigate } from "react-router-dom";


const Contact = () => {
   
    return (
        <div className="px-10 my-10  ">
            
            <div className=" rounded-lg ">
            <img className=" h-[400px] w-full rounded-lg" src="https://i.ibb.co/JkQzBnn/melinda-gimpel-5-Ne6m-MQt-Ido-unsplash.jpg" alt="" />
  
            <div className="px-5 ">
<h1 className="text-4xl text-red-500 text-center mt-10" data-aos="flip-left">Our Services</h1>
   
      <div className="flex justify-start items-center flex-col space-y-4">
      <p>Stage Decoration</p>
      <p>Photography</p>
      <p>Cinematography</p>
      </div>
   </div>
  
   <div className="flex flex-col md:flex-row justify-evenly mx-auto  text-center items-center">

   <div className="  ">
      <h1 className="text-2xltext-red-500 mb-4" data-aos="flip-left">phone </h1>
      <p className="" data-aos="flip-left">+0999911</p>
      <h1 className="text-2xl text-red-500" data-aos="flip-left">Email</h1>
      <p className="" data-aos="flip-left">event@event.com</p>
   </div>
    
   <div className="flex justify-start items-center space-y-4 flex-col">


   <input className="border border-red-300" placeholder="Email" type="email" name="" id="" />
   <textarea
      className="border border-red-300"
      cols="30"
      rows="3"
    ></textarea>
   <button className="btn bg-red-500 twhite">Submit</button>


   </div>
      
      {/* <button className="btn btn-primary"></button> */}
    </div>
    
  </div>
  
</div>
        
    );
};

export default Contact;