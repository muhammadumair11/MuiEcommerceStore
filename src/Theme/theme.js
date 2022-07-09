import { createTheme } from '@mui/material';

import { typography } from './Components-Theme/typography';
import { muiButton } from './Components-Theme/muiButton';

import { customPrimaryColors, customSecondaryColors } from './customColors';
import { inputTextField, inputTextFilledInput } from './Components-Theme/input';

const theme = createTheme({
  palette: {
    primary: {
      ...customPrimaryColors
    },
    secondary: {
      ...customSecondaryColors
    }
  },
  typography: {
    ...typography
  },

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
export default theme;
