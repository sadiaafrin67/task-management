// import { useEffect, useState } from "react";
// import "./App.css";
// import Card from "./components/Card";

import { useEffect } from "react";


const Mytodo = () => {

//     const [data, setData] = useState(null);
//   const [todo, setTodo] = useState(null);
//   const [ongoing, setOnGoing] = useState(null);
//   const [complete, setComplete] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/public/data/tasks.json");
//         const result = await response.json();

//         setData(result);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     if (data === null) fetchData();
//   }, []);

//   useEffect(() => {
//     if (data && data.length > 0) {
      
//       const todoTasks = data.filter((task) => task.status === "todo");
//       const ongoingTasks = data.filter((task) => task.status === "ongoing");
//       const completeTasks = data.filter((task) => task.status === "completed");

      
//       setTodo(todoTasks);
//       setOnGoing(ongoingTasks);
//       setComplete(completeTasks);
//     }
//   }, [data]);

  


    return (
        <div>
            <h2 className="text-center mb-10 text-2xl text-[#434343] font-bold">My TodoList</h2>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
                <div className="">
                    <h2 className="text-xl font-semibold border text-center border-gray-400 p-3 text-gray-600">To-do List</h2>
                </div>
                <div>
                    <h2 className="text-xl font-semibold border text-center border-gray-400 p-3 text-gray-600">On Going</h2>
                </div>
                <div>
                    <h2 className="text-xl font-semibold border text-center border-gray-400 p-3 text-gray-600">Completed</h2>
                </div>
            </div>
            {/* <div className="flex w-full gap-3 justify-center ">
      <div>
        <h1>TODOS</h1>
        <div className="flex flex-col gap-3">
          {todo &&
            todo.length > 0 &&
            todo.map((item, index) => {
              return (
                <div key={index}>
                  <Card item={item} />
                </div>
              );
            })}
        </div>
      </div>
      <div>
        <h1>On Going</h1>
        <div className="flex flex-col gap-3">
          {ongoing &&
            ongoing.length > 0 &&
            ongoing.map((item, index) => {
              return (
                <div key={index}>
                  <Card item={item} />
                </div>
              );
            })}
        </div>
      </div>
      <div>
        <h1>complete</h1>
        <div className="flex flex-col  gap-3">
          {complete &&
            complete.length > 0 &&
            complete.map((item, index) => {
              return (
                <div key={index}>
                  <Card item={item} />
                </div>
              );
            })}
        </div>
      </div>
    </div> */}

        </div>
    );
};

export default Mytodo;