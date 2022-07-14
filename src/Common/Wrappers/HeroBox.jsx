import { styled } from '@mui/material';

export const HeroBox = styled('div', {
  shouldForwardProp: (prop) => prop !== 'primary'
})(({ theme, primary }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',

  padding: '2rem',
  minHeight: '350px',

  backgroundColor: primary ? theme.palette.primary.dark : theme.palette.secondary.light
}));
