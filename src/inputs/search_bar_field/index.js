import React from "react";
import TextField from "../text_field";
import { withStyles } from '@material-ui/core/styles';

export const SearchBarField = withStyles({
  root: {
    '& .MuiInput-underline:before': {
      borderBottom: 'none'
    },
    '& .MuiInput-underline:hover:before': {
      borderBottom: 'none'
    },
    '& .MuiInputBase-root': {
      color: "white"
    }
  }
})(TextField);
