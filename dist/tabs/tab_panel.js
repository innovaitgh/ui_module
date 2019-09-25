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
      other = _objectWithoutProperties(_ref, ["children", "value", "index"]);

  if (value !== index) {
    return null;
  }

  return _react["default"].createElement("div", _extends({
    component: "div",
    role: "tabpanel"
  }, other), _react["default"].createElement(_Box["default"], {
    py: 1
  }, children));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YWJzL3RhYl9wYW5lbC5qcyJdLCJuYW1lcyI6WyJUYWJQYW5lbCIsImNoaWxkcmVuIiwidmFsdWUiLCJpbmRleCIsIm90aGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7QUFFZSxTQUFTQSxRQUFULE9BQXVEO0FBQUEsTUFBbkNDLFFBQW1DLFFBQW5DQSxRQUFtQztBQUFBLE1BQXpCQyxLQUF5QixRQUF6QkEsS0FBeUI7QUFBQSxNQUFsQkMsS0FBa0IsUUFBbEJBLEtBQWtCO0FBQUEsTUFBUkMsS0FBUTs7QUFDcEUsTUFBR0YsS0FBSyxLQUFLQyxLQUFiLEVBQW1CO0FBQ2pCLFdBQU8sSUFBUDtBQUNEOztBQUNELFNBQ0U7QUFDRSxJQUFBLFNBQVMsRUFBRyxLQURkO0FBRUUsSUFBQSxJQUFJLEVBQUc7QUFGVCxLQUdPQyxLQUhQLEdBS0UsZ0NBQUMsZUFBRDtBQUFLLElBQUEsRUFBRSxFQUFHO0FBQVYsS0FBZ0JILFFBQWhCLENBTEYsQ0FERjtBQVNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhYlBhbmVsKHsgY2hpbGRyZW4sIHZhbHVlLCBpbmRleCwgLi4ub3RoZXIgfSl7XG4gIGlmKHZhbHVlICE9PSBpbmRleCl7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjb21wb25lbnQgPSBcImRpdlwiXG4gICAgICByb2xlID0gXCJ0YWJwYW5lbFwiXG4gICAgICB7IC4uLm90aGVyIH1cbiAgICA+XG4gICAgICA8Qm94IHB5PXsgMSB9PnsgY2hpbGRyZW4gfTwvQm94PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19