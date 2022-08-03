import { styled } from '@mui/material';

export const HeroBox = styled('div', {
  shouldForwardProp: (prop) => prop !== 'primary' && prop !== 'minheight'
})(({ theme, primary, minheight }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',

  borderRadius: theme.shape.borderRadius,

  padding: '2rem',
  minHeight: `${minheight}px`,

  backgroundColor: primary ? theme.palette.primary.dark : theme.palette.secondary.light
}));
