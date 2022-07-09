import { customPrimaryColors, customSecondaryColors } from '../customColors';
import { fontFamilies } from './typography';
export const muiButton = {
  styleOverrides: {
    containedPrimary: {
      color: customSecondaryColors.light
    },
    containedSecondary: {
      color: customPrimaryColors.main
    },
    textSecondary: {
      color: customPrimaryColors.main
    },
    sizeMedium: {
      padding: '1rem 1.5rem'
    },
    sizeSmall: {
      padding: '.7rem 1rem'
    },
    root: {
      fontFamily: fontFamilies.clashDisplay,
      whiteSpace: 'nowrap'
    }
  },
  defaultProps: {
    disableElevation: true,
    size: 'medium'
  }
};
