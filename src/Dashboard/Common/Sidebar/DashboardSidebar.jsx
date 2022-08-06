import { styled } from '@mui/material';
import React from 'react';

import PropTypes from 'prop-types';

const DashboardSidebarWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,

  width: '100%',
  height: '100%'
}));

function DashboardSidebar({ value, setSidebar }) {
  return (
    <DashboardSidebarWrapper onClick={() => setSidebar(!value)}>
      Hello world
    </DashboardSidebarWrapper>
  );
}

DashboardSidebar.propTypes = {
  value: PropTypes.bool.isRequired,
  setSidebar: PropTypes.func.isRequired
};

export default DashboardSidebar;
