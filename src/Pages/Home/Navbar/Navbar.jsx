import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

    const navLinks = (
        <>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            Home
          </NavLink>
          <NavLink
           to='/dashboard'
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
           Dashboard
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            About Us
          </NavLink>
          <NavLink
           to='/login'
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
           Login
          </NavLink>
         
        
          </>
    )

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    
    <div className="flex  items-center gap-2">
          
          <img 
            className="w-[40px] h-[40px] rounded-full hidden md:block  "
            src="https://i.ibb.co/tKLPYRb/task-logo.jpg"
           
          />
          <h4 className="font-bold md:text-2xl text-base hover:text-gray-400">
            Todo<span className="text-[#434343] hover:text-gray-400">List</span>
          </h4>
        </div>
  </div>

  <div className="navbar-end hidden lg:flex">
  <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
</div>
    );
};

export default Navbar;