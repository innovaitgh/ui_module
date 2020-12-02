import Select from "./inputs/select";
import SearchBarField from "./inputs/search_bar_field";

import Toolbar from "./toolbars";

import TabsPanel from "./tabs/tabs_panel";
import TabPanel from "./tabs/tab_panel";
import Tabs from "./tabs";

import Activity from "./activity";

import {PaginatedList, List} from "./lists";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};


export const joinWithMid = (string) => string.join(' \u00B7 ');

export {
  Select,
  SearchBarField,
  Toolbar,
  Tabs,
  TabPanel,
  TabsPanel,
  Activity,
  PaginatedList,
  List
};
