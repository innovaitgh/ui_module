import Select from "./inputs/select";
import SearchBarField from "./inputs/search_bar_field";

import Toolbar from "./toolbars";
import SearchToolbar from "./toolbars/search_toolbar";

import Back from "./navigation/nav_bar_back";
import CurrentUserNav from "./navigation/current_user_nav";
import Go from "./navigation/go";

import TabsPanel from "./tabs/tabs_panel";
import TabPanel from "./tabs/tab_panel";
import Tabs from "./tabs";

import Activity from "./activity";

import {PaginatedList, List} from "./lists";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};


export const MidOptions = ({string}) => <p>{string.join(' \u00B7 ')}</p>;

export {
  Select,
  SearchBarField,
  Toolbar,
  SearchToolbar,
  Back,
  CurrentUserNav,
  Go,
  Tabs,
  TabPanel,
  TabsPanel,
  Activity,
  PaginatedList,
  List
};
