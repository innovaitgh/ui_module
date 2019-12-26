"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MyToolbar;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index.js"));

var _search_bar_field = _interopRequireDefault(require("../inputs/search_bar_field"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _nav_bar_back = _interopRequireDefault(require("../navigation/nav_bar_back"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SearchToolbarRight(_ref) {
  var ToolbarRight = _ref.ToolbarRight,
      onClick = _ref.onClick;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_IconButton["default"], {
    color: "inherit",
    onClick: onClick,
    "data-pattern": "search",
    "data-value": "true"
  }, _react["default"].createElement(_Search["default"], null)), ToolbarRight);
}

function MyToolbar(_ref2) {
  var onClick = _ref2.onClick,
      onChange = _ref2.onChange,
      search = _ref2.search,
      query = _ref2.query,
      placeholder = _ref2.placeholder,
      ToolbarRight = _ref2.ToolbarRight,
      children = _ref2.children,
      others = _objectWithoutProperties(_ref2, ["onClick", "onChange", "search", "query", "placeholder", "ToolbarRight", "children"]);

  return _react["default"].createElement(_react["default"].Fragment, null, search === "true" ? _react["default"].createElement(_index["default"], {
    ToolbarLeft: _react["default"].createElement(_nav_bar_back["default"], {
      onClick: onClick,
      "data-pattern": "search",
      "data-value": "false"
    }),
    Spacer: _react["default"].createElement(_search_bar_field["default"], {
      color: "inherit",
      onChange: onChange,
      variant: "standard",
      name: "query",
      value: query,
      placeholder: placeholder
    })
  }) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_index["default"], _extends({}, others, {
    ToolbarRight: _react["default"].createElement(SearchToolbarRight, {
      ToolbarRight: ToolbarRight,
      onClick: onClick
    })
  })), children));
}

;