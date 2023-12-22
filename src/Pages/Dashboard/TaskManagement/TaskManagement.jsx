import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const TaskManagement = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //     fetch("https://task-management-server-neon.vercel.app/tasks")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setTasks(data);
  //       });
  //   }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://task-management-server-neon.vercel.app/tasks");
        console.log(response);
        
        const data = await response.json();

        const filterData = data.filter(
          (item) => item.userEmail === user?.email
        );
        setTasks(filterData);
    
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (user && user?.email) {
      fetchData();
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://task-management-server-neon.vercel.app/tasks/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              console.log(data);
              Swal.fire(
                "Deleted!",
                "Your task has been deleted.",
                "success"
              );

              const remaining = tasks.filter((job) => job._id !== id);
              setTasks(remaining);
            }
          });
      }
    });
  };



  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="bg-gray-200">
            <th></th>
            <th>Task Title</th>
            <th>Task Description</th>
            <th>Task Priority</th>
            <th>Edit/Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((task, index) => (
            <tr key={task._id} >
              <th>{index + 1}</th>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.priority}</td>

              <td><Link to={`/dashboard/update/${task._id}`}><button><FaEdit className="text-xl text-green-600"></FaEdit></button></Link></td>

              <td><button onClick={() => handleDelete(task._id)}><MdDelete className="text-xl text-red-600"></MdDelete></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskManagement;
