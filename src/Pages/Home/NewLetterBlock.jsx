import { Box, Grid, styled, Typography } from '@mui/material';
import React from 'react';
import { IconWrapper } from '../../Common/Wrappers/IconWrapper';
import Image from '../../Components/Image';
import NewLetter from '../../Common/NewLetter/NewLetter';
import filledCheckMark from '../../Assets/svgIcon/cardIcons/filledCheckMark.svg';

const NewLetterWrapper = styled('div')(({ theme }) => ({
  width: '100%',

  display: 'flex',
  justifyContent: 'center',

  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  padding: '5rem 6rem',

  [theme.breakpoints.down('md')]: {
    padding: '5rem 1rem'
  }
}));

function NewLetterBlock() {
  return (
    <NewLetterWrapper
      style={{
        backgroundImage:
          'linear-gradient(274deg, rgba(97,97,97,0.3897934173669467) 0%, rgba(89,89,89,0.32816876750700286) 100%), url(https://images.unsplash.com/photo-1523181349018-de4228d5e009?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)'
      }}>
      <Grid container>
        <Grid item lg={3} md={3} sm={12}></Grid>
        <Grid item lg={6} md={6} sm={12}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Typography variant="h2" paddingBottom={2} fontWeight="bold" color="secondary.light">
              Join the club and get the benefits
            </Typography>
            <Typography
              variant="h5"
              textAlign="center"
              paddingX={4}
              lineHeight={1.5}
              color="secondary.light">
              Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up
              stores and more
            </Typography>
          </Box>
          <Box>
            <Grid container>
              {[
                {
                  icon: filledCheckMark,
                  title: 'Get exclusive offers'
                },
                {
                  icon: filledCheckMark,
                  title: 'Free Events'
                },
                {
                  icon: filledCheckMark,
                  title: 'Large discounts'
                }
              ].map((item, index) => (
                <Grid item key={index} lg={4} md={12} sm={12}>
                  <Box display="flex" justifyContent="center" paddingY={3}>
                    <IconWrapper size={15} marginx={10}>
                      <Image source={item.icon} />
                    </IconWrapper>
                    <Typography variant="h5" color="secondary.light">
                      {item.title}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item lg={3} md={3} sm={12}></Grid>
        <Grid item lg={3} md={3} sm={12}></Grid>
        <Grid item lg={6} md={6} sm={12}>
          <NewLetter />
        </Grid>
        <Grid item lg={3} md={3} sm={12}></Grid>
      </Grid>
    </NewLetterWrapper>
  );
}

export default NewLetterBlock;
