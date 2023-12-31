import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Root from './Layout/Root';
import Aboutus from './Pages/Aboutus/Aboutus';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import CreateTodo from './Pages/Dashboard/CreateTodo/CreateTodo';
import TaskManagement from './Pages/Dashboard/TaskManagement/TaskManagement';
import Mytodo from './Pages/Dashboard/Mytodo/Mytodo';
import AuthProvider from './Providers/AuthProvider';
import PrivateRoute from './Router/PrivateRoute';
import UpdateTask from './Pages/Dashboard/TaskManagement/UpdateTask';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <Aboutus></Aboutus>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path: 'todo',
        element: <CreateTodo></CreateTodo>
      },
      {
        path: 'manage',
        element: <TaskManagement></TaskManagement>
      },
      {
        path: 'update/:id',
        element: <UpdateTask></UpdateTask>,
        loader: ({ params }) => fetch(`https://task-management-server-neon.vercel.app/tasks/${params.id}`)
      },
      {
        path: 'mytask',
        element: <Mytodo></Mytodo>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
     
  </React.StrictMode>,
)
