import { Container, Grid, styled } from '@mui/material';
import React from 'react';
import FeatureTextBox from '../../Common/FeatureTextBox/FeatureTextBox';
import Image from '../../Components/Image';

const FeatureBoxText = {
  data: {
    title: 'It started with a small idea',
    content:
      'A global brand with local beginnings, our story begain in a small studio in South London in early 2014'
  },
  options: {
    variant: 'primary',
    height: 400
  }
};

const ImageWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  height: `${FeatureBoxText.options.height}px`
}));

function FeaturesBlock() {
  return (
    <>
      <Container sx={{ py: 8 }}>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={12}>
            <FeatureTextBox content={FeatureBoxText.data} options={FeatureBoxText.options} />
          </Grid>
          <Grid item lg={6} md={6} sm={12}>
            <ImageWrapper>
              <Image
                source="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=658&q=80"
                backgroundImg
              />
            </ImageWrapper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default FeaturesBlock;
