import React from 'react';
import { IconButton } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Go from "../go";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function Back({ history, ...others }){

  function popHistory(){
    history.goBack();
  }

  return(
    <IconButton onClick={ popHistory } color="inherit" { ...others }>
      <ArrowBackIcon />
    </IconButton>
  )
}
