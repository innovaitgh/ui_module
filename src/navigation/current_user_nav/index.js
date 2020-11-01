import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from '@material-ui/core/styles';
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
          <Avatar alt={ name } src={ `https://auth.innovaitgh.com${avatar.url}` } className={ classes.avatar } />
        </IconButton>
      </React.Fragment>
    )
  }
  return null;
}
