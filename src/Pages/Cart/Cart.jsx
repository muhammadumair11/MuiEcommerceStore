import { Box, Container, Divider, Grid, styled, Typography } from '@mui/material';
import React from 'react';
import Image from '../../Components/Image';
import MyButton from '../../Components/MyButton';
import { CartConstant } from '../../Constants/CartData';

const CartImageWrapper = styled('div')(({ theme }) => ({
  width: 100
}));
function Cart() {
  return (
    <Container>
      <Grid container paddingY={3}>
        <Grid item xs={12} paddingY={6}>
          <Typography variant="h2" color="primary.dark">
            Your shopping cart
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="primary.dark">
            Product
          </Typography>
        </Grid>
        <Grid item xs={2} textAlign={'right'}>
          <Typography variant="body2" color="primary.dark">
            Quantity
          </Typography>
        </Grid>
        <Grid item xs={4} textAlign={'right'}>
          <Typography variant="body2" color="primary.dark">
            Total
          </Typography>
        </Grid>
        <Grid item paddingY={2} xs={12}>
          <Divider />
        </Grid>
        {CartConstant.map((item) => (
          <>
            <Grid item xs={6} display="flex" paddingY={1}>
              <CartImageWrapper>
                <Image source={item.product.image} />
              </CartImageWrapper>
              <Box
                paddingX={2}
                display="flex"
                flexDirection="column"
                flexWrap="wrap"
                justifyContent="space-evenly">
                <Typography variant="body1" color="primary.dark">
                  {item.product.name}
                </Typography>
                <Typography variant="subtitle1" color="primary.dark">
                  {item.product.name}
                </Typography>
                <Typography variant="subtitle2" color="primary.dark">
                  $ {item.product.price}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2} display="flex" justifyContent="flex-end" alignItems="center">
              <Typography variant="body2" color="primary.dark">
                {item.quantity}
              </Typography>
            </Grid>
            <Grid item xs={4} display="flex" justifyContent="flex-end" alignItems="center">
              <Typography variant="body2" color="primary.dark">
                {item.quantity * item.product.price}
              </Typography>
            </Grid>
          </>
        ))}
        <Grid item paddingY={2} xs={12}>
          <Divider />
        </Grid>
        <Grid
          item
          paddingY={2}
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="flex-end"
          justifyContent="center">
          <Box display="flex" alignItems="center">
            <Typography variant="h5" paddingX={2} color="primary.main">
              Subtotal
            </Typography>
            <Typography variant="h3" color="primary.dark">
              $ 4346343
            </Typography>
          </Box>
          <Typography variant="subtitle2" paddingY={2} color="primary.main">
            Taxes and shipping are calculated at checkout
          </Typography>
          <MyButton>Go to Checkout</MyButton>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Cart;
