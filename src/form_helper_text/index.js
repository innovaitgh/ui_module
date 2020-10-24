import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';

export default function MyFormHelperText({ help, ...others }){
  return(
    <React.Fragment>
      {
        help ?
        <FormHelperText { ...others } >{ help }</FormHelperText>
        : null
      }
    </React.Fragment>
    )
}
