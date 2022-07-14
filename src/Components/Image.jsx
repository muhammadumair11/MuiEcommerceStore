import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const MyImg = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%'
}));

const MyBgImg = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center'
}));

function Image({ source, backgroundImg }) {
  const renderImg = () => {
    if (backgroundImg) {
      return <MyBgImg style={{ backgroundImage: `url(${source})` }} />;
    }
    return <MyImg src={source} />;
  };
  return renderImg();
}

Image.propTypes = {
  source: PropTypes.string.isRequired,
  backgroundImg: PropTypes.bool
};

export default Image;
