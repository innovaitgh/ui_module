import React from 'react';
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from '@material-ui/core/styles';

function DefaultSpacer(){
  const classes = useToolbarStyles();
  return(
    <div className={ classes.spacer } />
  )
}

export default function MyToolbar({ ToolbarLeft, ToolbarLeftProps, TitleProps, TypographyProps, title, Spacer, ToolbarRight, ToolbarRightProps }) {
  const classes = useToolbarStyles();
  return (
    <Toolbar className = { classes.root } { ...ToolbarLeftProps }>
      { ToolbarLeft }
      <div className = { classes.title } { ...TitleProps }>
        <Typography { ...TypographyProps }>
          { title }
        </Typography>
      </div>
      { Spacer }
      <div className = { classes.actions } { ...ToolbarRightProps }>
        { ToolbarRight }
      </div>
    </Toolbar>
  );
};

MyToolbar.defaultProps = {
  TypographyProps: {
    variant: "h6"
  },
  Spacer: <DefaultSpacer />
}



const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  spacer: {
    flexGrow: 1,
  },
  actions: {
    display: "flex",
  },
  title: {
    flex: '0 0 auto',
  },
}));
