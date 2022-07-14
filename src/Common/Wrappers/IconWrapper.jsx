import { styled } from '@mui/material';

export const IconWrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'size' && prop !== 'marginx' && prop !== 'marginy'
})(({ theme, size, marginx, marginy }) => ({
  width: `${size}px`,
  marginLeft: `${marginx}px`,
  marginRight: `${marginx}px`,
  marginTop: `${marginy}px`,
  marginBottom: `${marginy}px`
}));
