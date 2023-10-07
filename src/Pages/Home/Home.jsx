// import Banner from "../../Components/Header/Banner/Banner";

import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Services from "../../Components/Services/Services";


const Home = () => {
    const services =useLoaderData()
    console.log(services)
    return (
        <div className="px-10 mx-auto">
       <Banner></Banner>
       <Services services={services}></Services>
        </div>
    );
};

export default Home;