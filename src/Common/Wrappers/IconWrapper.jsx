import { styled } from '@mui/material';

export const IconWrapper = styled('div')(({ theme, size, marginX, marginY }) => ({
  width: `${size}px`,
  marginLeft: `${marginX}px`,
  marginRight: `${marginX}px`,
  marginTop: `${marginY}px`,
  marginBottom: `${marginY}px`
}));
