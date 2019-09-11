import React from 'react';
import FormHelperText from '../../form_helper_text';
import FormControl from '../../form_control';
import Button from '../button';


export default function ImageInput({ FormControlProps, ImageButton, FormHelperTextProps, help, ...others }){
  return(
    <FormControl { ...FormControlProps }>
      <input { ...others } />
      <label>
        { ImageButton }
      </label>
      <FormHelperText help={ help } { ...FormControlProps } />
    </FormControl>
  )
}

ImageInput.defaultProps = {
  type: "file",
  accept: "image/*",
  style: { display: "none" },
  ImageButton: <Button component="span" />
}
