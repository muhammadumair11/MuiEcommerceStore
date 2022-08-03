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
    colorPrimary: {
      backgroundColor: customPrimaryColors.light,
      color: customSecondaryColors.main
    },
    colorSecondary: {
      backgroundColor: customSecondaryColors.main,
      color: customSecondaryColors.main
    },
    input: {
      padding: '1rem 2rem',
      '&::placeholder': {
        color: customSecondaryColors.white
      }
    }
  }
};
