import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";



const MainLayout = () => {
    return (
        <div className="overflow-x-hidden">
        <Navbar></Navbar>

            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;