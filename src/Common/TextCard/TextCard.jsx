import { styled, Typography } from '@mui/material';
import Image from '../../Components/Image';
import { IconWrapper } from '../Wrappers/IconWrapper';
import React from 'react';
import { PropTypes } from 'prop-types';

const Card = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,

  padding: '2.2rem',

  minHeight: '230px'
}));

function TextCard({ data }) {
  return (
    <Card>
      <IconWrapper marginY={10} size={30}>
        <Image source={data.icon} />
      </IconWrapper>
      <Typography variant="h4" paddingY={1} color="primary.dark">
        {data.title}
      </Typography>
      <Typography variant="subtitle1" color="primary.dark">
        {data.content}
      </Typography>
    </Card>
  );
}

TextCard.propTypes = {
  data: PropTypes.object
};

export default TextCard;
