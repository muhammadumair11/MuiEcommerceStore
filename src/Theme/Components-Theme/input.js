import { customPrimaryColors, customSecondaryColors } from '../customColors';

export const inputTextField = {
  defaultProps: {
    fullWidth: true,
    variant: 'filled'
  }
};

export const inputTextFilledInput = {
  defaultProps: {
    disableUnderline: true,
    color: 'primary'
  },
  styleOverrides: {
    root: {
      color: customPrimaryColors.main
    },
    colorPrimary: {
      backgroundColor: customPrimaryColors.light
    },
    colorSecondary: {
      backgroundColor: customSecondaryColors.main
    },
    input: {
      padding: '1rem 2rem',
      '&::placeholder': {
        color: customSecondaryColors.white
      }
    }
  }
};
