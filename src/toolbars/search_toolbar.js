import React from "react";
import Toolbar from "./index.js";
import SearchBarField from "../inputs/search_bar_field";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

function SearchToolbarRight({ ToolbarRight, onClick }){
  return(
    <React.Fragment>
      <IconButton color={"inherit"} onClick={ onClick } data-pattern={ "search" } data-value={ "true" }>
        <SearchIcon />
      </IconButton>
      { ToolbarRight }
    </React.Fragment>
  )
}

export default function MyToolbar({ onClick, onChange, search , query, placeholder, ToolbarRight, children, ...others }) {
  return (
    <React.Fragment>
      {
        search === "true" ?
        <Toolbar
          ToolbarLeft={
            <Back onClick={ onClick } data-pattern={"search"} data-value={ "false" } />
          }
          Spacer={
            <SearchBarField
              color="inherit"
              onChange={ onChange }
              variant={ "standard" }
              name={"query"}
              value={ query }
              placeholder={ placeholder }
            />
          }
        />
        :
        <React.Fragment>
          <Toolbar
            { ...others }
            ToolbarRight={ <SearchToolbarRight ToolbarRight={ ToolbarRight } onClick={ onClick } /> }
          />
          { children }
        </React.Fragment>
      }
    </React.Fragment>
  );
};
