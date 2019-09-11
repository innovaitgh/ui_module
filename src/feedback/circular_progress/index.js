import React from 'react';
import MUICircularProgress from '@material-ui/core/CircularProgress';

export default function CircularProgress(props) {
  return (
    <MUICircularProgress { ...props } />
  );
}
CircularProgress.defaultProps = {
  size: 50,
  style: { margin: "auto" }
}
