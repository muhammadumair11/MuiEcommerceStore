import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ProductCarousel from '../../Common/ProductCarousel/ProductCarousel';
import ProductList from '../../Common/ProuctCardList/ProductList';
import CardBlock from '../Home/CardBlock';
import NewLetterBlock from '../Home/NewLetterBlock';
import Listing from './Listing';

function ProductDetail() {
  return (
    <Grid container>
      <Grid width="100%" item lg={6} md={12} sm={12}>
        <ProductCarousel />
      </Grid>
      <Grid item lg={6} md={12} sm={12}>
        <Listing />
      </Grid>
      <Grid width="100%" item lg={12} md={12} sm={12}>
        <Container>
          <Box paddingTop={14} paddingBottom={4}>
            <Typography variant="h2" color="primary.dark">
              You Also might like this
            </Typography>
          </Box>
          <ProductList data={4} />
        </Container>
      </Grid>
      <Grid width="100%" item lg={12} md={12} sm={12}>
        <CardBlock />
      </Grid>
      <Grid width="100%" paddingTop={8} item lg={12} md={12} sm={12}>
        <NewLetterBlock />
      </Grid>
    </Grid>
  );
}

export default ProductDetail;
