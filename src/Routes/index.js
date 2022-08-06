import React from 'react';
import { useRoutes } from 'react-router-dom';
import Cart from '../Pages/Cart/Cart';
import Home from '../Pages/Home/Home';
import SingleProduct from '../Pages/SingleProduct/SingleProduct';
import DefaultLayout from '../Layout/DefaultLayout';
import DashboardLayout from '../Layout/DashboardLayout';

function CustomRoutes() {
  const routes = useRoutes([
    {
      path: '/',
      element: <DefaultLayout />,

      children: [
        { path: '/', element: <Home /> },
        { path: '/cart', element: <Cart /> },
        { path: '/product', element: <SingleProduct /> },
        { path: '/product/:id', element: <SingleProduct /> }
      ]
    },
    { path: '/dashboard', element: <DashboardLayout /> }
  ]);
  return routes;
}

export default CustomRoutes;
