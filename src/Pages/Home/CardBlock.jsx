import { Container, Grid, styled, Typography } from '@mui/material';

import React from 'react';
import TextCard from '../../Common/TextCard/TextCard';
import { TextCardConstants } from '../../Constants/TextCardConstants';

const Heading = styled('div')(({ theme }) => ({
  padding: '4rem 0',

  textAlign: 'center'
}));

function CardBlock() {
  return (
    <Container>
      <Heading>
        <Typography variant="h2" color="initial">
          What makes our brand different
        </Typography>
      </Heading>
      <Grid container spacing={2}>
        {TextCardConstants.map((data, index) => (
          <Grid item key={index} lg={3} md={6} sm={12}>
            <TextCard data={data} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CardBlock;
