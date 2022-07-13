import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React from 'react';
import Image from '../../Components/Image';

const MyBox = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  height: '450px',

  [theme.breakpoints.down('md')]: {
    height: '250px'
  }
}));

const TitleBox = styled('div')(({ theme }) => ({
  padding: '10px 0'
}));

function ProductCard() {
  return (
    <MyBox>
      <Image
        backgroundImg
        source="https://images.unsplash.com/photo-1657336641332-d0bef6ada5e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      />
      <TitleBox>
        <Typography variant="h5" color="primary">
          The Dandy Chair
        </Typography>
        <Typography variant="subtitle1" color="initial">
          $ 542
        </Typography>
      </TitleBox>
    </MyBox>
  );
}

export default ProductCard;
