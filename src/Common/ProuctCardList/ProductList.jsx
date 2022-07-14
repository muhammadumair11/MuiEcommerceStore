import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import { PropTypes } from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';
import MyButton from '../../Components/MyButton';

import { productList } from '../../Constants/ProductsConstants';

function ProductList({ data }) {
  return (
    <Container sx={{ py: 15 }}>
      <Grid container spacing={2} justifyContent="center">
        {[...productList.slice(0, data)].map((item, i) => (
          <Grid item key={i} lg={3} md={6} sm={6}>
            <ProductCard item={item} />
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center">
        <MyButton color="secondary">View Collection</MyButton>
      </Box>
    </Container>
  );
}

ProductList.propTypes = {
  data: PropTypes.number
};

export default ProductList;
