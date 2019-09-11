import React from "react";
import CircularProgress from "../feedback/circular_progress";

export default function ProgressiveWrap({ isLoading, children, ...others }){
  return(
    <React.Fragment>
      {
        isLoading ?
          <div style={ { width: "100%", textAlign: "center" } }>
            <CircularProgress { ...others } />
          </div>
        :
          children
      }
    </React.Fragment>
  )
}
