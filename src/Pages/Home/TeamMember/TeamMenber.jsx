import { useEffect } from "react";
import { useState } from "react";


const TeamMenber = () => {
  const [members, setmembers] = useState([]);
                 
useEffect(()=>{
fetch('team.json')
.then(r=> r.json())
.then(data=>setmembers(data))
},[])

  return (
    <div className="py-10 mx-auto  ">
            <h1 className="mb-5 text-4xl text-red-500 font-semibold text-center" data-aos="flip-left">Our Team Member</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    members?.map(member =>(
                      <div key={member.id}>
                        <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
    <img className="w-[320px] rounded-full h-[300px] mx-auto  " src={member.img} alt={member.name} />
  </div>
  <div className="p-6 text-center">
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {member.name}
    </h4>
    <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
      {member.position}
    </p>
  </div>
  <div className="flex justify-center gap-7 p-6 pt-2">
    <a
      href="#facebook"
      className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
    >
      <i className="fab fa-facebook" aria-hidden="true"></i>
    </a>
    <a
      href="#twitter"
      className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
    >
      <i className="fab fa-twitter" aria-hidden="true"></i>
    </a>
    <a
      href="#instagram"
      className="block bg-gradient-to-tr from-red-600 to-red-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
    >
      <i className="fab fa-instagram" aria-hidden="true"></i>
    </a>
  </div>
</div>
                      </div>
                    ) )
                        
                    
                } 
             </div> 
        </div>
  );
};

export default TeamMenber;