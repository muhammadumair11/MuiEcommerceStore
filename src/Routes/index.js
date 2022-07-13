import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../Pages/Home/Home';

function CustomRoutes() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/about', element: <Home /> }
  ]);
  return routes;
}

export default CustomRoutes;
