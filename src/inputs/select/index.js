import React from 'react';
import { FormHelperText, FormControl, Select, Input, InputLabel } from "@material-ui/core";

export default function MySelect({ FormControlProps, FormHelperTextProps, InputLabelProps, children, label, help, ...others }){
  return(
    <FormControl { ...FormControlProps } margin="normal">
      <InputLabel { ...InputLabelProps }>{ label }</InputLabel>
      <Select { ...others }>
        {children}
      </Select>
      <FormHelperText { ...FormHelperTextProps }>{ help }</FormHelperText>
    </FormControl>
  )
};

MySelect.defaultProps = {
  native: true,
  input: <Input />,
  options: []
};
