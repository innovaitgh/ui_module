import React from 'react';
import { FormHelperText, FormControl, Select, Input, InputLabel } from "@material-ui/core";

export default function MySelect({ FormControlProps, FormHelperTextProps, label, help, ...others }){
  return(
    <FormControl { ...FormControlProps } margin="normal">
      <InputLabel>{ label }</InputLabel>
      <Select { ...others }>
        {children}
      </Select>
      <FormHelperText { ...FormHelperTextProps }>{ help }</FormHelperText>
    </FormControl>
  )
}

MySelect.defaultProps = {
  native: true,
  input: <Input />,
  options: []
};
