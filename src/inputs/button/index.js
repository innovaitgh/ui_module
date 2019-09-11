import React from 'react';
import { Button } from '@material-ui/core';

export default function MyButton({ value, ...others }){
  return(
    <Button { ...others }>
      { value }
    </Button>
  )
}

MyButton.defaultProps = {
  variant: "contained",
  type: "submit",
  color: "primary",
  margin: "normal",
  fullWidth: true
};
