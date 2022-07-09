import React from 'react';
import PropTypes from 'prop-types';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { Box, Button, Stack, Typography } from '@mui/material';
import styled from '@emotion/styled';

const MyBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  width: 'fit-content',
  textAlign: 'center',
  color: theme.palette.primary.main,
  padding: theme.spacing(2)
}));

function IconButton(props) {
  return (
    <Button
      onClick={props.handleClick}
      sx={{
        p: 1,
        minWidth: 'fit-content',
        height: 'fit-content',
        borderRadius: '20px'
      }}>
      {props.children}
    </Button>
  );
}

IconButton.propTypes = {
  children: PropTypes.node,
  handleClick: PropTypes.func
};

function Stepper() {
  const [step, setStep] = React.useState(0);

  const stepperClickFunction = (add) => {
    if (add) {
      setStep(step + 1);
    } else if (step > 0) {
      setStep(step - 1);
    }
  };

  function addIcon() {
    return (
      <IconButton handleClick={() => stepperClickFunction(true)}>
        <AddRoundedIcon height={3} />
      </IconButton>
    );
  }
  function removeIcon() {
    return (
      <IconButton handleClick={() => stepperClickFunction(false)}>
        <RemoveRoundedIcon height={3} />
      </IconButton>
    );
  }
  return (
    <MyBox>
      <Stack spacing={1} direction={'row'} alignItems="center" justifyContent="center">
        {removeIcon()}
        <Typography variant="body1" sx={{ px: 1 }} color="initial">
          {step}
        </Typography>
        {addIcon()}
      </Stack>
    </MyBox>
  );
}

export default Stepper;
