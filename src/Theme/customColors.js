const colorObject = {
  darkPrimary: '#2A254B',
  primary: '#4E4D93',
  lightPrimary: '#2A254B80',
  lightGray: '#F9F9F9',
  borderGray: '#EBE8F4',
  borderDark: '#CAC6DA'
};

const customPrimaryColors = {
  main: colorObject.primary,
  dark: colorObject.darkPrimary,
  light: colorObject.lightPrimary
};

const customSecondaryColors = {
  main: colorObject.borderGray,
  dark: colorObject.borderDark,
  light: colorObject.lightGray,
  white: '#FFFFFF'
};

export { customPrimaryColors, customSecondaryColors };
