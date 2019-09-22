import React from 'react';
import { Link } from "react-router-dom";

export default React.forwardRef((props, ref) => {
  const { external, to, children } = props;
  return(
    <React.Fragment>
      {
        external ?
        <a href={ to }>{ children }</a>
        :
        <Link innerRef={ ref } { ...props } />
      }
    </React.Fragment>
  )
});
