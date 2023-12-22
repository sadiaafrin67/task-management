import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";

const Banner = () => {

  const {user} = useContext(AuthContext)

  return (
    <div >
      <div 
    data-aos="zoom-in" data-aos-duration="3000" 
        className="hero min-h-screen mt-10 my-20"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/K0qn2Cc/top-view-international-worker-s-day-still-life.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-45"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">
              Organize your work and life, finally.
            </h1>
            <p className="mb-5 text-gray-300">
              Become focused, organized, and calm with Todoist. The world’s #1
              task manager and to-do list app.
            </p>
            <div className="mx-auto ml-20  md:ml-28 lg:ml-28">
             <Link to={user && user.email ? '/dashboard' : '/login'}><button className="btn  btn-grad rounded border-none text-white">
                Let's Explore
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
