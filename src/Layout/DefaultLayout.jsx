import React from 'react';
import FooterVersion2 from '../Common/Footer/FooterVersion2';
import Header from '../Common/Header/Header';
import { Outlet } from 'react-router-dom';
import Trails from '../Components/TransitionComponents/Trails';

function DefaultLayout() {
  return (
    <>
      <Header />
      <Trails delay={200}>
        <Outlet />
      </Trails>
      <FooterVersion2 />
    </>
  );
}

export default DefaultLayout;
