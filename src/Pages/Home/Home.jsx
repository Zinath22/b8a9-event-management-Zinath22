// import Banner from "../../Components/Header/Banner/Banner";

import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Services from "../../Components/Services/Services";
import Choose from "./Choose/Choose";
import TeamMenber from "./TeamMember/TeamMenber";
// import TeamMenber from "./TeamMember/TeamMenber";


const Home = () => {
    const services =useLoaderData()
    console.log(services)
    return (
        <div className="px-10 mx-auto">
       <Banner></Banner>
       <Services services={services}></Services>
       <TeamMenber></TeamMenber>
       <Choose></Choose>
        </div>
    );
};

export default Home;