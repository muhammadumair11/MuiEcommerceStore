import { Container, Grid, styled, Typography } from '@mui/material';
import React from 'react';
import { PropTypes } from 'prop-types';
import MyButton from '../../Components/MyButton';

import heroImage from '../../Assets/Images/heroImage.jpg';

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

const HeroBox = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',

  padding: '2rem',
  minHeight: '350px',

  backgroundColor: theme.palette.secondary.light
}));

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
            <HeroBox>
              <div>
                <Typography variant="h2" color="initial">
                  Luxury homeware for people who love timeless design quality
                </Typography>
                <Typography variant="body1" paddingY={1} color="primary.light">
                  Shop the new Spring 2022 collection today
                </Typography>
              </div>
              <MyButton color="secondary">View Collection</MyButton>
            </HeroBox>
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
