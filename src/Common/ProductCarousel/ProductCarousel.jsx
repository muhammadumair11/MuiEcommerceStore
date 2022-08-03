/* eslint-disable indent */
import { styled } from '@mui/material';
import React, { useState } from 'react';
import { useTransition, animated, config } from 'react-spring';
import { productList } from '../../Constants/ProductsConstants';

const ProductCarouselWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  width: '100%',
  position: 'absolute',
  top: 0,

  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',

  [theme.breakpoints.down('md')]: {
    height: '90vh'
  }
}));

const PreviewTemplates = styled('div')(({ theme }) => ({
  width: '60px',
  height: '60px',

  cursor: 'pointer',

  [theme.breakpoints.down('md')]: {
    height: '50px',
    width: '50px',

    left: '10px',
    bottom: '10px'
  },

  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',

  position: 'absolute',
  left: '20px',

  border: `2px solid ${theme.palette.secondary.light}`
}));

function ProductCarousel() {
  const [index, set] = useState(productList[0].id);

  const transitions = useTransition(productList[index], {
    from: {
      opacity: 0,
      x: -30
      // transform: 'scale(.9)'
    },
    enter: {
      opacity: 1,
      x: 0
      // transform: 'scale(1)'
    },
    leave: {
      opacity: 0,
      x: -30
      // transform: 'scale(1.1)'
    },
    config: config.molasses
  });

  return (
    <div
      style={{
        position: 'relative',
        top: '0',
        width: '100%',
        height: '90vh'
      }}>
      {transitions((props, items) => (
        <>
          <ProductCarouselWrapper
            as={animated.div}
            style={{
              ...props,
              backgroundImage: `url(${items.image})`
            }}></ProductCarouselWrapper>
          {productList.length > 5
            ? [...productList.slice(0, 5)].map((item, index) => (
                <PreviewTemplates
                  key={item.id}
                  onClick={() => set(item.id)}
                  style={{
                    backgroundImage: `url(${item.image})`,
                    top: `${(index + 1) * 80}px`
                  }}></PreviewTemplates>
              ))
            : productList.map((item, index) => (
                <PreviewTemplates
                  key={item.id}
                  onClick={() => set(item.id)}
                  style={{
                    backgroundImage: `url(${item.image})`,
                    top: `${(index + 1) * 80}px`
                  }}></PreviewTemplates>
              ))}
        </>
      ))}
    </div>
  );
}

export default ProductCarousel;
