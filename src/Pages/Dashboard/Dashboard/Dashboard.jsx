import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdModeEditOutline, MdOutlineManageHistory, MdAddTask } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64  min-h-screen bg-gray-100">
        <ul className="menu p-4">
          <>
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
  );
};

export default Dashboard;
