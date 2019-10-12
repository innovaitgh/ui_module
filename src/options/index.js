import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function Options({ list, open, handleClose }){
  return(
    <Dialog onClose={ handleClose } open={ open} >
      <DialogTitle>{ "Options" }</DialogTitle>
      <List>
        {
          list.map(function(option, i){
            const { name, optionProps } = option;
            return(
              <ListItem key={ i } { ...optionProps } >
                <ListItemText primary={ name } />
              </ListItem>
            )
          })
        }
      </List>
    </Dialog>
  )
}
