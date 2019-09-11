import React from 'react';
import { Typography, Toolbar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

export default function MyToolbar({ AppBarLeft, ToolBarProps, TitleProps, TypographyProps, title, SpacerProps, ActionProps, ToolBarActions }) {
  const classes = useToolbarStyles();
  return (
    <Toolbar className = { classes.root } { ...ToolBarProps }>
      {
        AppBarLeft ?
          AppBarLeft
        : null
      }
      <div className = { classes.title } { ...TitleProps }>
        <Typography { ...TypographyProps }>
          { title }
        </Typography>
      </div>
      <div className = { classes.spacer } { ...SpacerProps } />
      <div className = { classes.actions } { ...ActionProps }>
        {
          ToolBarActions ?
            ToolBarActions
          : null
        }
      </div>
    </Toolbar>
  );
};

MyToolbar.defaultProps = () => {
  return(
    {
      TypographyProps: {
        variant: "h6"
      }
    }
  )
}



const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
    display: "flex",
  },
  title: {
    flex: '0 0 auto',
  },
}));
