const fontFamilies = {
  clashDisplay: '"Clash Display", sans-serif',
  satoshi: "'Manrope', sans-serif"
};

const typography = {
  fontFamily: fontFamilies.clashDisplay,
  lineHeight: '140%',
  fontWeight: '400',

  h1: {
    fontSize: '36px'
  },
  h2: {
    fontSize: '32px'
  },
  h3: {
    fontSize: '24px'
  },
  h4: {
    fontSize: '20px'
  },
  h5: {
    fontSize: '16px'
  },
  h6: {
    fontSize: '14px'
  },

  body1: {
    fontFamily: fontFamilies.satoshi,
    fontSize: '18px'
  },
  body2: {
    fontFamily: fontFamilies.satoshi,
    fontSize: '16px'
  },
  subtitle1: {
    fontFamily: fontFamilies.satoshi,
    fontSize: '14px'
  },
  subtitle2: {
    fontFamily: fontFamilies.satoshi,
    fontSize: '12px'
  }
};

export { typography, fontFamilies };
