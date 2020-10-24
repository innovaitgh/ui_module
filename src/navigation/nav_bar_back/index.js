import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';
import Go from "../go";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { withRouter } from "react-router-dom";

function Back({ history, ...others }){

  function popHistory(){ history.goBack(); }

  return(
    <IconButton onClick={ popHistory } color="inherit" { ...others }>
      <ArrowBackIcon />
    </IconButton>
  )
}

export default withRouter(Back);
