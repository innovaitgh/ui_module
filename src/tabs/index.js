import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default function MyTabs({ tabs, ...others }){
  return(
    <Tabs { ...others } >
      {
        tabs.map(function(tab, i){
          return(
            <Tab key={ i } label={ tab } />
          )
        })
      }
    </Tabs>
  )
}
