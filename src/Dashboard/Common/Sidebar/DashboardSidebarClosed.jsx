import React from 'react';
import PropTypes from 'prop-types';
import { Box, styled, Tooltip, Typography } from '@mui/material';
import Trails from '../../../Components/TransitionComponents/Trails';
import { KeyboardArrowRight, PeopleAltRounded, PersonRounded } from '@mui/icons-material';

const DashboarSidebarClosedWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,

  height: '100%',

  boxShadow: theme.shadows[9],
  boxShadowColor: theme.palette.primary.dark
}));

const DashboarIconWrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'noPadding'
})(({ theme, nopadding }) => ({
  textAlign: 'center',
  padding: nopadding ? '0' : theme.spacing(1),
  //   backgroundColor: theme.palette.primary.main,
  fontSize: '1.5rem',
  color: theme.palette.primary.main,
  lineHeight: '0'
}));

function DashboardSidebarClosed({ value, setSidebar }) {
  return (
    <DashboarSidebarClosedWrapper onClick={() => setSidebar(!value)}>
      <Box padding={2}>
        <Trails delay={400}>
          <Box display="flex" alignItems="center">
            <Typography variant="h5" color="primary.main" lineHeight={0}>
              AVION
            </Typography>
            <DashboarIconWrapper nopadding>
              <KeyboardArrowRight />
            </DashboarIconWrapper>
          </Box>
          <Box paddingY={5}>
            <Trails delay={800}>
              <DashboarIconWrapper>
                <Tooltip title="Users">
                  <PeopleAltRounded />
                </Tooltip>
              </DashboarIconWrapper>
              <DashboarIconWrapper>
                <Tooltip title="Partners">
                  <PersonRounded />
                </Tooltip>
              </DashboarIconWrapper>
            </Trails>
          </Box>
        </Trails>
      </Box>
    </DashboarSidebarClosedWrapper>
  );
}

DashboardSidebarClosed.propTypes = {
  value: PropTypes.bool.isRequired,
  setSidebar: PropTypes.func.isRequired
};

export default DashboardSidebarClosed;
