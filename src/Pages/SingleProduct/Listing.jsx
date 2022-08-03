import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import Stepper from '../../Common/Stepper/Stepper';
import MyButton from '../../Components/MyButton';

const dimentions = [
  {
    title: 'Height',
    value: 1140
  },
  {
    title: 'Width',
    value: 2140
  },
  {
    title: 'Depth',
    value: 40
  }
];

function Listing() {
  return (
    <Container>
      <Box padding={4}>
        <Typography variant="h2" marginBottom={1} color="primary.dark">
          The Dandy Chair
        </Typography>
        <Typography variant="h4" color="primary.dark">
          £250
        </Typography>

        <Typography variant="body1" marginTop={4} marginBottom={2} color="primary.dark">
          Description
        </Typography>
        <Typography variant="body2" color="primary.light">
          A timeless design, with premium materials features as one of our most popular and iconic
          pieces. The dandy chair is perfect for any stylish living space with beech legs and
          lambskin leather upholstery.
        </Typography>

        <Typography variant="body1" marginTop={4} color="primary.dark">
          Dimensions
        </Typography>
        <Box display="flex">
          {dimentions.map((item, index) => (
            <Box key={index} paddingRight={4} paddingY={2}>
              <Typography variant="body1" marginBottom={1} color="primary.dark">
                {item.title}
              </Typography>
              <Typography variant="body2" color="primary.light">
                {item.value}CM
              </Typography>
            </Box>
          ))}
        </Box>
        <Box display="flex" alignItems="flex-end" flexDirection="column">
          <Box display="flex" paddingY={2} alignItems="center">
            <Typography variant="body1" marginRight={2} color="primary.dark">
              Amount
            </Typography>
            <Stepper />
          </Box>
          <MyButton>Add to Cart</MyButton>
        </Box>
      </Box>
    </Container>
  );
}

export default Listing;
