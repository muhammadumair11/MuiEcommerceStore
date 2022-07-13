import { createTheme } from '@mui/material';

import { typography } from './Components-Theme/typography';
import { muiButton } from './Components-Theme/muiButton';

import { customPrimaryColors, customSecondaryColors } from './customColors';
import { inputTextField, inputTextFilledInput } from './Components-Theme/input';
import { themeBreakPoints } from './Components-Theme/breakPoints';

const theme = createTheme({
  breakpoints: {
    values: {
      ...themeBreakPoints.values
    }
  },
  palette: {
    primary: {
      ...customPrimaryColors
    },
    secondary: {
      ...customSecondaryColors
    }
  },
  typography: typography(),

  shape: {
    borderRadius: '0px'
  },
  components: {
    MuiButton: {
      ...muiButton
    },
    MuiTextField: {
      ...inputTextField
    },
    MuiFilledInput: {
      ...inputTextFilledInput
    }
  }
});

console.log(theme);
export default theme;
