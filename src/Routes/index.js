import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import SingleProduct from '../Pages/SingleProduct/SingleProduct';

function CustomRoutes() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/about', element: <Home /> },
    { path: '/product', element: <SingleProduct /> },
    { path: '/product/:id', element: <SingleProduct /> }
  ]);
  return routes;
}

export default CustomRoutes;
