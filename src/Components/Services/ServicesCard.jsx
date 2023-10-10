import { Link } from "react-router-dom";
import PropTypes from 'prop-types';



const ServicesCard = ({service}) => {
   const {id,card_img,name} = service;
    return (
        <div>
<div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
    <img
      src={card_img}
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <div className="mb-2 flex items-center justify-between">
      <p className="block font-sans text-base font-medium leading-relaxed text-red-500 antialiased" data-aos="flip-left">
       {name}
      </p>
      
    </div>
    
  </div>
  <div className="p-6 pt-0">
    <Link to={`/services/${id}`}><button
      className="block bg-red-400 text-white w-full select-none rounded-lg  py-3 px-6 text-center align-middle font-sans text-sm uppercase  transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
     Show Details
    </button></Link>
  </div>
</div>
        </div>
    );
};
ServicesCard.propTypes={
  service: PropTypes.object
}

export default ServicesCard;