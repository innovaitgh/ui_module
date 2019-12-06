import React from 'react';
import Button from "./index.js";
import ProgressiveWrap from "../../progressive_wrap";

export default function FormButton({ isLoading, CircularProgressProps, value, ...others }){
    return(
      <ProgressiveWrap { ...{isLoading } }  { ...CircularProgressProps }>
        <Button { ...{ value } } { ...others } />
      </ProgressiveWrap>
    )
}
