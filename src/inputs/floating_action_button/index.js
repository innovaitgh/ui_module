import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    zIndex: "4",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  }
}));

export default function FloatingActionButton({ color, icon, ...others }) {
  const classes = useStyles();
  return (
      <Fab className={ classes.fab } color={ color } { ...others }>
        { icon }
      </Fab>
  );
}


FloatingActionButton.defaultProps = {
  color: "primary",
}
