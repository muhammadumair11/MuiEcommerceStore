import React from 'react';
import PropTypes from 'prop-types';
import { Box, styled, Tooltip, Typography } from '@mui/material';
import Trails from '../../../Components/TransitionComponents/Trails';
import { KeyboardArrowRight, PeopleAltRounded, PersonRounded } from '@mui/icons-material';
import DashboarIconWrapper from '../Wrapper/DashboardIconWrapper';

const DashboarSidebarClosedWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,

  height: '100%',

  boxShadow: theme.shadows[9],
  boxShadowColor: theme.palette.primary.dark
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
            <DashboarIconWrapper nopadding primary>
              <KeyboardArrowRight />
            </DashboarIconWrapper>
          </Box>
          <Box paddingY={5}>
            <Trails delay={800}>
              <DashboarIconWrapper primary>
                <Tooltip title="Users">
                  <PeopleAltRounded />
                </Tooltip>
              </DashboarIconWrapper>
              <DashboarIconWrapper primary>
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
