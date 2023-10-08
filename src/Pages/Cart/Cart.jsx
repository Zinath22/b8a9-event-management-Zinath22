import { useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import { getstoredBooking } from "../../Utility/LocalStorage";
import CartCard from "./CartCard";



const Cart = () => {
    const carts = useLoaderData();
 const [cartBooked, setcartBooked] = useState([])

    useEffect(() => {
        const storedBookingIds = getstoredBooking();
        if (carts.length > 0) {
            const bookedcart = [];
            for (const id of storedBookingIds) {
                const cart = carts.find(cart => cart.id === id);
                if (cart) {
                    bookedcart.push(cart)
                }
            }
            setcartBooked(bookedcart)
        }
   
    }, [])

    console.log(carts);
    return (
        <div>
           
            <div>
               
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
                    {cartBooked.length === 0 ? (
                        <p className="text-center text-purple-500
                         text-4xl col-span-3 py-10">No Booking carts</p>
                    ) :
                        cartBooked.map(cart =>( <CartCard
                        cart={cart} key={cart.id}></CartCard>))
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;