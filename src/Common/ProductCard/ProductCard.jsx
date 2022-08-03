import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React from 'react';
import Image from '../../Components/Image';
import { PropTypes } from 'prop-types';
import MyButton from '../../Components/MyButton';
import { Link } from 'react-router-dom';

const MyBox = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  height: '500px',
  transition: theme.transitions.create('all'),

  '&:hover': {
    boxShadow: theme.shadows[10],
    padding: '3rem'
  },

  [theme.breakpoints.down('md')]: {
    width: '90vw',
    '&:hover': {
      boxShadow: theme.shadows[10],
      padding: '3rem'
    }
  }
}));

const ImageBox = styled('div')(({ theme }) => ({
  height: '80%'
}));
const TitleBox = styled('div')(({ theme }) => ({
  height: '20%',
  padding: '10px 0'
}));

function ProductCard({ item }) {
  const [cardHover, setCardHover] = React.useState(false);
  return (
    <MyBox
      onMouseEnter={() => setCardHover(!cardHover)}
      onMouseLeave={() => setCardHover(!cardHover)}>
      <Link to={`/product/${item.id}`}>
        <ImageBox>
          <Image backgroundImg source={item.image} />
        </ImageBox>
        <TitleBox>
          <Typography variant="h5" color="primary">
            {item.name}
          </Typography>
          <Typography variant="subtitle1" color="initial">
            $ {item.price}
          </Typography>
        </TitleBox>
      </Link>
      {cardHover && (
        <Box>
          <MyButton size="small" fullWidth>
            Add to Cart
          </MyButton>
        </Box>
      )}
    </MyBox>
  );
}

ProductCard.propTypes = {
  item: PropTypes.object
};

export default ProductCard;
