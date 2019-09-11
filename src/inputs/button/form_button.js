import React from 'react';
import Button from "./index.js";
import FormControl from "../../form_control";
import FormHelperText from "../../form_helper_text";
import ProgressiveWrap from "../../progressive_wrap";

export default function FormButton({ FormControlProps, isLoading, CircularProgressProps, value, ButtonProps, FormHelperTextProps, help}){
    return(
      <FormControl { ...FormControlProps }>
        <ProgressiveWrap isLoading={ isLoading } { ...CircularProgressProps }>
          <Button value={ value } { ...ButtonProps } />
        </ProgressiveWrap>
        <FormHelperText help={ help } { ...FormHelperTextProps } />
      </FormControl>
    )
}
