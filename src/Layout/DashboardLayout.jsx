/* eslint-disable multiline-ternary */
import { Box, styled } from '@mui/material';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { animated, useSpring, useTransition } from 'react-spring';
import DashboardFooter from '../Dashboard/Common/Footer/DashboardFooter';
import DashboardHeader from '../Dashboard/Common/Header/DashboardHeader';
import DashboardSidebar from '../Dashboard/Common/Sidebar/DashboardSidebar';
import DashboardSidebarClosed from '../Dashboard/Common/Sidebar/DashboardSidebarClosed';

const DashboardLayoutWrapper = styled('div')(({ theme }) => ({
  height: '100vh',
  width: '100vw',

  display: 'flex'
}));

const SidebarTransitionWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '100%'
}));
const SidebarTransitionItemsWrapper = styled('div')(({ theme }) => ({
  height: '100%'
}));

function DashboardLayout() {
  const [value, setOpenSidebar] = useState(false);

  const springProps = useSpring({
    width: value ? '250px' : '100px'
  });

  const sidebarTransition = useTransition(value, {
    from: { opacity: 0, x: -20, position: 'absolute' },
    enter: { opacity: 1, x: 0, position: 'relative' },
    leave: { opacity: 0, x: -20, position: 'absolute' }
  });
  return (
    <>
      <DashboardLayoutWrapper>
        <SidebarTransitionWrapper as={animated.div} style={springProps}>
          {sidebarTransition((props, item) =>
            item ? (
              <SidebarTransitionItemsWrapper as={animated.div} style={props}>
                <DashboardSidebar value={value} setSidebar={setOpenSidebar} />
              </SidebarTransitionItemsWrapper>
            ) : (
              <SidebarTransitionItemsWrapper as={animated.div} style={props}>
                <DashboardSidebarClosed value={value} setSidebar={setOpenSidebar} />
              </SidebarTransitionItemsWrapper>
            )
          )}
        </SidebarTransitionWrapper>
        <Box display="flex" width="100%" flexDirection="column">
          <DashboardHeader />
          <Outlet />
          <DashboardFooter />
        </Box>
      </DashboardLayoutWrapper>
    </>
  );
}

export default DashboardLayout;
