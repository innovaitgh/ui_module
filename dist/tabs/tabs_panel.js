"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TabsPanel;

var _react = _interopRequireDefault(require("react"));

var _tab_panel = _interopRequireDefault(require("./tab_panel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function TabsPanel(_ref) {
  var children = _ref.children,
      value = _ref.value;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].Children.map(children, function (child, i) {
    return _react["default"].createElement(_tab_panel["default"], {
      key: i,
      value: value,
      index: i
    }, child);
  }));
}