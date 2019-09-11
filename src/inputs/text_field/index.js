import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function MyTextField(props){
  return(
      <TextField { ...props } />
  )
}

MyTextField.defaultProps = {
  variant: "outlined",
  fullWidth: true,
  margin: "normal",
}
