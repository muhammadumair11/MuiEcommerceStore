import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import { PropTypes } from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';
import MyButton from '../../Components/MyButton';

function ProductList({ data }) {
  return (
    <Container sx={{ py: 20 }}>
      <Grid container spacing={2} justifyContent="center">
        {Array(data)
          .fill(0)
          .map((_, i) => (
            <Grid item key={i} lg={3} md={4}>
              <ProductCard />
            </Grid>
          ))}
      </Grid>
      <Box paddingY={4} display="flex" justifyContent="center">
        <MyButton color="secondary">View Collection</MyButton>
      </Box>
    </Container>
  );
}

ProductList.propTypes = {
  data: PropTypes.number
};

export default ProductList;
