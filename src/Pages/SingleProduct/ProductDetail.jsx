import { Grid } from '@mui/material';
import React from 'react';
import ProductCarousel from '../../Common/ProductCarousel/ProductCarousel';

function ProductDetail() {
  return (
    <Grid container>
      <Grid width="100%" item lg={6} md={12} sm={12}>
        <ProductCarousel />
      </Grid>
      <Grid item lg={6} md={12} sm={12}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, non voluptatum laboriosam
        maiores delectus voluptas consectetur cum perferendis minus quod doloremque culpa ullam
        accusantium, repudiandae qui enim earum! Ratione, fuga! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quia, non voluptatum laboriosam maiores delectus voluptas
        consectetur cum perferendis minus quod doloremque culpa ullam accusantium, repudiandae qui
        enim earum! Ratione, fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
        non voluptatum laboriosam maiores delectus voluptas consectetur cum perferendis minus quod
        doloremque culpa ullam accusantium, repudiandae qui enim earum! Ratione, fuga! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Quia, non voluptatum laboriosam maiores
        delectus voluptas consectetur cum perferendis minus quod doloremque culpa ullam accusantium,
        repudiandae qui enim earum! Ratione, fuga!
      </Grid>
    </Grid>
  );
}

export default ProductDetail;
