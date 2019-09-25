import React from "react";
import Box from "@material-ui/core/Box";

export default function TabPanel({ children, value, index, boxProps, ...other }){
  if(value !== index){
    return null;
  }
  return (
    <div
      component = "div"
      role = "tabpanel"
      { ...other }
    >
      <Box { ...boxProps }>{ children }</Box>
    </div>
  );
}
