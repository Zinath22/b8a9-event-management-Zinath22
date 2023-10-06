import { useState } from "react";


const Logo = () => {
    const {logo_img} = useState();

    return (
        <div>
           {/* <h1>Event</h1> */}
           <img src={logo_img} alt="" />
        </div>
    );
};

export default Logo;