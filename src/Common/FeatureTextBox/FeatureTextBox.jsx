import { Typography } from '@mui/material';
import React from 'react';
import MyButton from '../../Components/MyButton';
import { HeroBox } from '../Wrappers/HeroBox';
import { PropTypes } from 'prop-types';

function FeatureTextBox({ content, options }) {
  const varientCheck = {
    varientBg: options.variant === 'primary',
    titleText: options.variant === 'primary' ? 'secondary.light' : 'initial',
    contentText: options.variant === 'primary' ? 'secondary.light' : 'primary.light'
  };
  return (
    <>
      <HeroBox minheight={options.height} primary={varientCheck.varientBg}>
        <div>
          <Typography variant="h2" color={varientCheck.titleText}>
            {content.title}
          </Typography>
          <Typography variant="body1" paddingY={1} color={varientCheck.contentText}>
            {content.content}
          </Typography>
        </div>
        <MyButton color="primary">View Collection</MyButton>
      </HeroBox>
    </>
  );
}

FeatureTextBox.propTypes = {
  content: PropTypes.object,
  options: PropTypes.object
};

export default FeatureTextBox;
