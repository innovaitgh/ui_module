import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function MyDialog({ open, title, children, Actions, onClose }) {
  return (
    <Dialog open = { open } onClose = { onClose }>
      <DialogTitle>{ title }</DialogTitle>
      <DialogContent>
        { children }
      </DialogContent>
      {
        Actions ?
        <DialogActions>
          { Actions }
        </DialogActions>
        : null
      }
    </Dialog>
  );
}
MyDialog.defaultProps = {
  open: false,
}
