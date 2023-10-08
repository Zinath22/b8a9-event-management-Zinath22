// import { useNavigate } from "react-router-dom";


const Service = () => {
    // const navigate = useNavigate()

    // navigate(location?.state ? location.state : '/')
    return (
        <div className="py-10 px-10 mx-auto w-">
            <div className="hero rounded-lg  min-h-screen bg-green-400">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Our Services</h1>
      <ul className=" mt-4">
        <li className="text-2xl">
            Stage Decoration
        </li>
        <li  className="text-2xl">
            Lighting
        </li>
        <li  className="text-2xl">
            Photography
        </li>
        <li  className="text-2xl">
            Cinematography
        </li>
      </ul>
      <h2 className="py-6 text-2xl font-semibold">Make your day special. <span className="text-pink-500">Good luck</span></h2>
      {/* <button className="btn btn-primary"></button> */}
    </div>
  </div>
</div>
        </div>
    );
};

export default Service;