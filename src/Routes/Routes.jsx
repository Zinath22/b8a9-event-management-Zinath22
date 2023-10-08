import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Components/Services/ServiceDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Service from "../Pages/Service/Service";
import PrivateRoute from "./PrivateRoute";
// import Services from "../Components/Services/Services";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/data.json')
            },
            {
                path: '/services/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: ()=> fetch('/data.json')
            },
            {
             path: '/service',
             element: <PrivateRoute><Service></Service></PrivateRoute>
            },
            
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);

export default Routes;
