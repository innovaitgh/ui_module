import React from 'react';
import FormHelperText from '../../form_helper_text';
import FormControl from '../../form_control';
import Select from '@material-ui/core/Select';
import OutlinedInput from "@material-ui/core/OutlinedInput";

export default function MySelect({ FormControlProps, FormHelperTextProps, fieldName, valueName, options, help, ...others }){
  return(
    <FormControl { ...FormControlProps }>
      <Select { ...others }>
        {
          typeof options === "object" ?
            Object.keys(options).map(function(key, i){
              return(
                <option key={ i } value={ key }>{ options[key] }</option>
              )
            })
          :
          options.map((option, i) => {
           if(typeof option === "object"){
             return(
               <option key={ i } value={ option[valueName] }>{ option[fieldName] }</option>
             )
           }
           return(
             <option key={ i } value={ option }>{ option }</option>
           )
         })
        }
      </Select>
      <FormHelperText help={ help } { ...FormHelperTextProps } />
    </FormControl>
  )
}

MySelect.defaultProps = {
  native: true,
  input: <OutlinedInput fullWidth />,
  options: [],
  fieldName: "name",
  valueName: "value"
}
