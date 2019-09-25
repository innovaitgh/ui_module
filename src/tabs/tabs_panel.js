import React from "react";
import TabPanel from "./tab_panel";

export default function TabsPanel({ children, value }){
  return (
    <React.Fragment>
    {
      React.Children.map(children, function(child, i){
        return(
          <TabPanel key={ i } value={ value } index={ i }>
            { child }
          </TabPanel>
        )
      })
    }
    </React.Fragment>
  );
}
