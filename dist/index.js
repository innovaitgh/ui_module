"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numberWithCommas = numberWithCommas;
Object.defineProperty(exports, "Select", {
  enumerable: true,
  get: function get() {
    return _select["default"];
  }
});
Object.defineProperty(exports, "SearchBarField", {
  enumerable: true,
  get: function get() {
    return _search_bar_field["default"];
  }
});
Object.defineProperty(exports, "Toolbar", {
  enumerable: true,
  get: function get() {
    return _toolbars["default"];
  }
});
Object.defineProperty(exports, "SearchToolbar", {
  enumerable: true,
  get: function get() {
    return _search_toolbar["default"];
  }
});
Object.defineProperty(exports, "TabsPanel", {
  enumerable: true,
  get: function get() {
    return _tabs_panel["default"];
  }
});
Object.defineProperty(exports, "TabPanel", {
  enumerable: true,
  get: function get() {
    return _tab_panel["default"];
  }
});
Object.defineProperty(exports, "Tabs", {
  enumerable: true,
  get: function get() {
    return _tabs["default"];
  }
});
Object.defineProperty(exports, "Activity", {
  enumerable: true,
  get: function get() {
    return _activity["default"];
  }
});
Object.defineProperty(exports, "PaginatedList", {
  enumerable: true,
  get: function get() {
    return _lists.PaginatedList;
  }
});
Object.defineProperty(exports, "List", {
  enumerable: true,
  get: function get() {
    return _lists.List;
  }
});
exports.joinWithMid = void 0;

var _select = _interopRequireDefault(require("./inputs/select"));

var _search_bar_field = _interopRequireDefault(require("./inputs/search_bar_field"));

var _toolbars = _interopRequireDefault(require("./toolbars"));

var _search_toolbar = _interopRequireDefault(require("./toolbars/search_toolbar"));

var _tabs_panel = _interopRequireDefault(require("./tabs/tabs_panel"));

var _tab_panel = _interopRequireDefault(require("./tabs/tab_panel"));

var _tabs = _interopRequireDefault(require("./tabs"));

var _activity = _interopRequireDefault(require("./activity"));

var _lists = require("./lists");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

;

var joinWithMid = function joinWithMid(string) {
  return string.join(" \xB7 ");
};

exports.joinWithMid = joinWithMid;