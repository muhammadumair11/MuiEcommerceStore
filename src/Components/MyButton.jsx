import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { ArrowDropDown } from '@mui/icons-material';

function MyButton({ children, ...props }) {
  const { variant, color, endIcon, size } = props;

  const buttonProps = {
    color: color || 'primary',
    variant: variant || 'contained',
    size,
    disableRipple: variant === 'text',
    endIcon: () => {
      if (endIcon) {
        return <ArrowDropDown />;
      } else {
        return null;
      }
    }
  };

  return (
    <>
      <Button {...buttonProps} endIcon={buttonProps.endIcon()}>
        {children}
      </Button>
    </>
  );
}

MyButton.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  endIcon: PropTypes.bool
};

export default MyButton;
