import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';

export default withStyles({
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
