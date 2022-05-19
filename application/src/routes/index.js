import React from "react";
import { useRoutes, Navigate } from 'react-router-dom';

export default function Router() {
  return useRoutes([
    {
      path: '/', element: <Navigate to='/login' replace/>,
    },
    {
      path: '/login', element: <></>,
    }
  ]);
}
