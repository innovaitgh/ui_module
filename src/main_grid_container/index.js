import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

export default function MainGridContainer({ children, MainGridContainerProps, BarHeaderProps }){
  const classes = useStyles();
  return(
    <Grid { ...MainGridContainerProps }>
      <div className={ classes.drawerHeader } { ...BarHeaderProps } />
      { children }
    </Grid>
  )
}

MainGridContainer.defaultProps = {
  MainGridContainerProps: {
    justify: "center",
    align: "center",
    container: true
  },
  BarHeaderProps: {

  }
}

const useStyles = makeStyles(theme => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));
