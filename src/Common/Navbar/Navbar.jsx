import { styled, Typography } from '@mui/material';
import React from 'react';
import Image from '../../Components/Image';

import AccountIcon from '../../Assets/svgIcon/accountIcon.svg';
import SearchIcon from '../../Assets/svgIcon/searchIcon.svg';
import CartIcon from '../../Assets/svgIcon/cartIcon.svg';
import { IconWrapper } from '../Wrappers/IconWrapper';
import { Link } from 'react-router-dom';

const MyNavbar = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem 2rem',
  borderBottom: '1px solid',
  borderColor: theme.palette.secondary.main,

  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

function Navbar() {
  return (
    <MyNavbar>
      <IconWrapper marginx={10} size={20}>
        <Image source={SearchIcon} />
      </IconWrapper>
      <Link to={'/'}>
        <Typography variant="h3" color="initial">
          AVION
        </Typography>
      </Link>
      <div style={{ display: 'flex' }}>
        <IconWrapper marginx={10} size={20}>
          <Link to={'/cart'}>
            <Image source={CartIcon} />
          </Link>
        </IconWrapper>
        <IconWrapper marginx={10} size={20}>
          <Image source={AccountIcon} />
        </IconWrapper>
      </div>
    </MyNavbar>
  );
}

export default Navbar;
