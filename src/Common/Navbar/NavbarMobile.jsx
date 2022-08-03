import { Clear, Menu } from '@mui/icons-material';
import { Container, Grid, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
const MyNavbar = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  width: '100%',
  display: 'none',
  justifyContent: 'center',
  position: 'relative',
  padding: '1rem 2rem',
  borderBottom: '1px solid',
  borderColor: theme.palette.secondary.main,

  [theme.breakpoints.down('md')]: {
    display: 'flex'
  }
}));

const HamburgerWrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'primary'
})(({ theme, primary }) => ({
  position: 'absolute',
  right: '1rem',

  color: primary ? theme.palette.primary.light : theme.palette.secondary.main
}));

const Sidebar = styled('div')(({ theme }) => ({
  height: '100vh',
  width: '100%',
  backgroundColor: theme.palette.primary.dark,
  position: 'fixed',
  zIndex: '100',
  top: 0,
  left: 0
}));

function NavbarMobile() {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const transition = useTransition(sideBarOpen, {
    from: { opacity: 0, x: -100 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: 200 },
    config: {
      duration: 200
    }
  });

  return (
    <>
      <MyNavbar>
        <HamburgerWrapper primary onClick={() => setSideBarOpen(!sideBarOpen)}>
          <Menu />
        </HamburgerWrapper>
        <Link to={'/'}>
          <Typography variant="h3" color="initial">
            AVION
          </Typography>
        </Link>
      </MyNavbar>
      {transition((props, item) =>
        // eslint-disable-next-line multiline-ternary
        item ? (
          <Sidebar as={animated.div} style={props}>
            <Container>
              <Grid container>
                <Grid item xs={6} padding={2}>
                  <Typography variant="h3" color="secondary.light">
                    AVION
                  </Typography>
                </Grid>
                <Grid item xs={6} padding={2}>
                  <HamburgerWrapper onClick={() => setSideBarOpen(!sideBarOpen)}>
                    <Clear />
                  </HamburgerWrapper>
                </Grid>
              </Grid>
            </Container>
          </Sidebar>
        ) : (
          ''
        )
      )}
    </>
  );
}

export default NavbarMobile;
