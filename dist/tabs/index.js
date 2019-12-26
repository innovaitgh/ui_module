"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MyTabs;

var _react = _interopRequireDefault(require("react"));

var _Tabs = _interopRequireDefault(require("@material-ui/core/Tabs"));

var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MyTabs(_ref) {
  var tabs = _ref.tabs,
      others = _objectWithoutProperties(_ref, ["tabs"]);

  return _react["default"].createElement(_Tabs["default"], others, tabs.map(function (tab, i) {
    return _react["default"].createElement(_Tab["default"], {
      key: i,
      label: tab
    });
  }));
}