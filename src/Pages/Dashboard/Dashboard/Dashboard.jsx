import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdModeEditOutline, MdOutlineManageHistory, MdAddTask } from "react-icons/md";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";

const Dashboard = () => {

  const {user} = useContext(AuthContext)
  const defaultImg =
    "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1696786604~exp=1696787204~hmac=c10645727b8724eecda4984ef1d8fbfba92a9c9072a57b851c28c9b1d8d62b81";

  return (

    <div>
       <Navbar ></Navbar>
    <div className="flex">
      <div className="w-64  min-h-screen bg-gray-100">
        <ul className="menu p-4">
          <>
          <div className="flex items-center justify-center">
          {user && (
          <div className="dropdown dropdown-end">
            <div>
              

              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={`${user?.photoURL ? user?.photoURL : defaultImg}`}
                  />
                </div>
              </label>

              
            </div>
          </div>
        )}
          </div>
            <h2 className="text-center font-bold py-4">My Dashboard</h2>
            <li>
              <NavLink to="/dashboard/todo"><MdModeEditOutline></MdModeEditOutline>Create My Todo</NavLink>
            </li>
            <li className="mt-3">
              <NavLink to="/dashboard/mytask"><MdAddTask></MdAddTask>My Todo Task</NavLink>
            </li>
            <li className="mt-3 mb-3">
              <NavLink to="/dashboard/manage"><MdOutlineManageHistory></MdOutlineManageHistory>Manage My Task</NavLink>
            </li>
            <hr />
            <li className="mt-3">
              <NavLink to="/">
                <FaHome></FaHome>
                Home
              </NavLink>
            </li>
          </>
        </ul>
      </div>
      <div className="p-8 flex-1">
       
        <Outlet></Outlet>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
