card detail
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import Swal from 'sweetalert2';
import { saveBooking, getstoredBooking } from "../../Utility/LocalStorage";

const EventDetails = () => {
const events = useLoaderData();
    const { id } = useParams();
    const event = events.find(event => event.id === parseInt(id));

    const handleBooking = () => {
        const storedBookings = getstoredBooking();
        const exists = storedBookings.find(eventId => eventId === parseInt(id));
        
        if (exists) {
            // Card has been added before
            Swal.fire(
                'Opps!',
                'Card has been added before!',
                'error'
            );
        } else {
            // Card has not been added before, add it to local storage
            saveBooking(parseInt(id));
            Swal.fire(
                'Good job!',
                'Card has been added successfully!',
                'success'
            );
        }
    }

    return (
        <div className="">
            <Navbar></Navbar>
            <div className="flex py-5  flex-col md:flex-row md:px-0 px-4 gap-4 justify-center items-center ">
            <img className="md:w-96  rounded-2xl" src={event.banner_img} alt="" />
           <div className="space-y-6 text-center"> 
           <p className="text-4xl font-medium text-purple-600">{event.description}</p>
           <p className="text-2xl font-semibold ">Package Price: {event.price}</p>
            <button onClick={handleBooking} className="btn bg-purple-500 text-white">Book Now</button>
           </div>
            </div>
        </div>
    );
};

export default EventDetails;