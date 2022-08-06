import { styled } from '@mui/material';

const DashboarIconWrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'noPadding' && prop !== 'primary'
})(({ theme, nopadding, primary }) => ({
  textAlign: primary ? 'center' : 'left',
  padding: nopadding ? '0' : theme.spacing(1),
  //   backgroundColor: theme.palette.primary.main,
  fontSize: '1.5rem',
  color: primary ? theme.palette.primary.main : theme.palette.secondary.light,
  lineHeight: '0'
}));

export default DashboarIconWrapper;
