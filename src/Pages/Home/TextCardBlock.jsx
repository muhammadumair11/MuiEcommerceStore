import { Container, Grid, styled } from '@mui/material';
import React from 'react';
import { PropTypes } from 'prop-types';

import heroImage from '../../Assets/Images/heroImage.jpg';
import FeatureTextBox from '../../Common/FeatureTextBox/FeatureTextBox';

const MyHero = styled('div')(({ theme }) => ({
  width: '100%',

  display: 'flex',
  justifyContent: 'flex-end',

  padding: '5rem 6rem',

  [theme.breakpoints.down('sm')]: {
    padding: '2rem'
  },

  backgroundPosition: 'center',
  backgroundSize: 'cover'
}));

const FeatureBoxText = {
  data: {
    title: 'Luxury homeware for people who love timeless design quality',
    content: 'Shop the new Spring 2022 collection today'
  },
  options: {
    variant: 'secondary'
  }
};

function TextCardBlock({ image }) {
  function imageCheck() {
    if (image) {
      return image;
    } else {
      return heroImage;
    }
  }
  return (
    <MyHero style={{ backgroundImage: `url(${imageCheck()})` }}>
      <Container>
        <Grid container>
          <Grid item lg={6} xs={12}></Grid>
          <Grid item lg={6} xs={12}>
            <FeatureTextBox content={FeatureBoxText.data} options={FeatureBoxText.options} />
          </Grid>
        </Grid>
      </Container>
    </MyHero>
  );
}

TextCardBlock.propTypes = {
  image: PropTypes.string
};

export default TextCardBlock;
