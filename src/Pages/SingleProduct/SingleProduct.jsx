import React, { useEffect } from 'react';
import ProductDetail from './ProductDetail';

function SingleProduct() {
  useEffect(() => {
    window.scrollTo(0, 120);
  });
  return <ProductDetail />;
}

export default SingleProduct;
