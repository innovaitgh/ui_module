import React from 'react';
import { FormControl } from '@material-ui/core';


export default function MyFormControl({ children, ...others }){
  return(
    <FormControl { ...others }>
      { children }
    </FormControl>
  )
}

MyFormControl.defaultProps = {
  fullWidth: true,
  margin: "normal"
}
