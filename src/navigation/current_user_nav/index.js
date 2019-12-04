import React from 'react';
import { IconButton, Avatar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Go from "../go";

const avatarStyles = makeStyles({
  avatar: {
    width: 30,
    height: 30
  }
});

export default function CurrentUserNav({ currentUser }){
  const classes = avatarStyles();
  if(currentUser){
    const { name, avatar, url } = currentUser;
    return(
      <React.Fragment>
        <IconButton component={ Go } to={ url } external={ true }>
          <Avatar alt={ name } src={ avatar.url } className={ classes.avatar } />
        </IconButton>
      </React.Fragment>
    )
  }
  return null;
}
