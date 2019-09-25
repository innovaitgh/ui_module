"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TabPanel;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TabPanel(_ref) {
  var children = _ref.children,
      value = _ref.value,
      index = _ref.index,
      boxProps = _ref.boxProps,
      other = _objectWithoutProperties(_ref, ["children", "value", "index", "boxProps"]);

  if (value !== index) {
    return null;
  }

  return _react["default"].createElement("div", _extends({
    component: "div",
    role: "tabpanel"
  }, other), _react["default"].createElement(_Box["default"], boxProps, children));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YWJzL3RhYl9wYW5lbC5qcyJdLCJuYW1lcyI6WyJUYWJQYW5lbCIsImNoaWxkcmVuIiwidmFsdWUiLCJpbmRleCIsImJveFByb3BzIiwib3RoZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7OztBQUVlLFNBQVNBLFFBQVQsT0FBaUU7QUFBQSxNQUE3Q0MsUUFBNkMsUUFBN0NBLFFBQTZDO0FBQUEsTUFBbkNDLEtBQW1DLFFBQW5DQSxLQUFtQztBQUFBLE1BQTVCQyxLQUE0QixRQUE1QkEsS0FBNEI7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBUkMsS0FBUTs7QUFDOUUsTUFBR0gsS0FBSyxLQUFLQyxLQUFiLEVBQW1CO0FBQ2pCLFdBQU8sSUFBUDtBQUNEOztBQUNELFNBQ0U7QUFDRSxJQUFBLFNBQVMsRUFBRyxLQURkO0FBRUUsSUFBQSxJQUFJLEVBQUc7QUFGVCxLQUdPRSxLQUhQLEdBS0UsZ0NBQUMsZUFBRCxFQUFVRCxRQUFWLEVBQXVCSCxRQUF2QixDQUxGLENBREY7QUFTRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJQYW5lbCh7IGNoaWxkcmVuLCB2YWx1ZSwgaW5kZXgsIGJveFByb3BzLCAuLi5vdGhlciB9KXtcbiAgaWYodmFsdWUgIT09IGluZGV4KXtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNvbXBvbmVudCA9IFwiZGl2XCJcbiAgICAgIHJvbGUgPSBcInRhYnBhbmVsXCJcbiAgICAgIHsgLi4ub3RoZXIgfVxuICAgID5cbiAgICAgIDxCb3ggeyAuLi5ib3hQcm9wcyB9PnsgY2hpbGRyZW4gfTwvQm94PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19