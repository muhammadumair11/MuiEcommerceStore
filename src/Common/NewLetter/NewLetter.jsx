import { Stack, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import MyButton from '../../Components/MyButton';

function NewLetter(props) {
  function primaryInput() {
    return (
      <>
        <TextField placeholder="your@email.com" type="email" />
        <MyButton color="secondary">Sign up</MyButton>
      </>
    );
  }

  function secondaryInput() {
    return (
      <>
        <TextField
          InputProps={{
            color: 'secondary'
          }}
          placeholder="your@email.com"
          type="email"
        />
        <MyButton color="primary">Sign up</MyButton>
      </>
    );
  }

  return (
    <Stack direction="flex" width="100%">
      {props.primary ? primaryInput() : secondaryInput()}
    </Stack>
  );
}
NewLetter.propTypes = {
  primary: PropTypes.bool
};
export default NewLetter;
