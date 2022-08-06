import { styled } from '@mui/material';
import React from 'react';

const DashboardNavbarWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main
}));

function DashboardNavbar() {
  return <DashboardNavbarWrapper>Hello world</DashboardNavbarWrapper>;
}

export default DashboardNavbar;
