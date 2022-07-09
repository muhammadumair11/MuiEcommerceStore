import { Stack } from '@mui/material';
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

function ProductList() {
  return (
    <Stack spacing={2} direction="flex" flexWrap="wrap" justifyContent="center">
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <ProductCard key={i} />
        ))}
    </Stack>
  );
}

export default ProductList;
