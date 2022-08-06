import { Box, styled, Typography } from '@mui/material';
import React from 'react';

import PropTypes from 'prop-types';
import Trails from '../../../Components/TransitionComponents/Trails';
import DashboarIconWrapper from '../Wrapper/DashboardIconWrapper';
import { KeyboardArrowRight, PeopleAltRounded, PersonRounded } from '@mui/icons-material';

const DashboardSidebarWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,

  width: '100%',
  height: '100%'
}));

function DashboardSidebar({ value, setSidebar }) {
  return (
    <DashboardSidebarWrapper onClick={() => setSidebar(!value)}>
      <Box padding={2}>
        <Trails delay={400}>
          <Box display="flex" alignItems="center">
            <Typography variant="h3" color="secondary.main" lineHeight={0}>
              AVION
            </Typography>
            <DashboarIconWrapper nopadding>
              <KeyboardArrowRight />
            </DashboarIconWrapper>
          </Box>
          <Box paddingY={5}>
            <Trails delay={800}>
              <Box display="flex" alignItems="center">
                <DashboarIconWrapper>
                  <PeopleAltRounded />
                </DashboarIconWrapper>
                <Typography variant="body1" color="secondary.light">
                  Users
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <DashboarIconWrapper>
                  <PersonRounded />
                </DashboarIconWrapper>
                <Typography variant="body1" color="secondary.light">
                  Partners
                </Typography>
              </Box>
            </Trails>
          </Box>
        </Trails>
      </Box>
    </DashboardSidebarWrapper>
  );
}

DashboardSidebar.propTypes = {
  value: PropTypes.bool.isRequired,
  setSidebar: PropTypes.func.isRequired
};

export default DashboardSidebar;
