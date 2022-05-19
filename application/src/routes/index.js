import React from "react";
import { useRoutes, Navigate } from 'react-router-dom';
import Login from "../pages/Login";
import ToDoListHomePage from "../pages/ToDoListHomePage";
import { ToDoProvider } from "../context/ToDoProvider";

export default function Router() {
  return useRoutes([
    {
      path: '/', element: <Navigate to='/login' replace/>,
    },
    {
      path: '/login', element: <Login />,
    },
    {
      path: '/home/todolist', element: (<ToDoProvider><ToDoListHomePage /></ToDoProvider>),
    }
  ]);
}
