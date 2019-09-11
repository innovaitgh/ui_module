"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TimeInput;

require("date-fns");

var _react = _interopRequireDefault(require("react"));

var _dateFns2 = _interopRequireDefault(require("@date-io/date-fns"));

var _pickers = require("@material-ui/pickers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TimeInput(_ref) {
  var selectedDate = _ref.selectedDate,
      setSelectedDate = _ref.setSelectedDate,
      label = _ref.label,
      others = _objectWithoutProperties(_ref, ["selectedDate", "setSelectedDate", "label"]);

  return _react["default"].createElement(_pickers.MuiPickersUtilsProvider, {
    utils: _dateFns2["default"]
  }, _react["default"].createElement(_pickers.KeyboardTimePicker, _extends({
    label: label,
    value: selectedDate,
    onChange: setSelectedDate
  }, others)));
}

TimeInput.defaultProps = {
  margin: "normal"
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbnB1dHMvZGF0ZXRpbWUvdGltZS5qcyJdLCJuYW1lcyI6WyJUaW1lSW5wdXQiLCJzZWxlY3RlZERhdGUiLCJzZXRTZWxlY3RlZERhdGUiLCJsYWJlbCIsIm90aGVycyIsIkRhdGVGbnNVdGlscyIsImRlZmF1bHRQcm9wcyIsIm1hcmdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBS2UsU0FBU0EsU0FBVCxPQUF3RTtBQUFBLE1BQW5EQyxZQUFtRCxRQUFuREEsWUFBbUQ7QUFBQSxNQUFyQ0MsZUFBcUMsUUFBckNBLGVBQXFDO0FBQUEsTUFBcEJDLEtBQW9CLFFBQXBCQSxLQUFvQjtBQUFBLE1BQVZDLE1BQVU7O0FBQ3JGLFNBQ0UsZ0NBQUMsZ0NBQUQ7QUFBeUIsSUFBQSxLQUFLLEVBQUdDO0FBQWpDLEtBQ0UsZ0NBQUMsMkJBQUQ7QUFDSSxJQUFBLEtBQUssRUFBR0YsS0FEWjtBQUVJLElBQUEsS0FBSyxFQUFHRixZQUZaO0FBR0ksSUFBQSxRQUFRLEVBQUdDO0FBSGYsS0FLU0UsTUFMVCxFQURGLENBREY7QUFZRDs7QUFFREosU0FBUyxDQUFDTSxZQUFWLEdBQXlCO0FBQ3ZCQyxFQUFBQSxNQUFNLEVBQUU7QUFEZSxDQUF6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnZGF0ZS1mbnMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEYXRlRm5zVXRpbHMgZnJvbSAnQGRhdGUtaW8vZGF0ZS1mbnMnO1xuaW1wb3J0IHtcbiAgTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIsXG4gIEtleWJvYXJkVGltZVBpY2tlclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvcGlja2Vycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRpbWVJbnB1dCh7IHNlbGVjdGVkRGF0ZSwgc2V0U2VsZWN0ZWREYXRlLCBsYWJlbCwgLi4ub3RoZXJzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIgdXRpbHM9eyBEYXRlRm5zVXRpbHMgfT5cbiAgICAgIDxLZXlib2FyZFRpbWVQaWNrZXJcbiAgICAgICAgICBsYWJlbD17IGxhYmVsIH1cbiAgICAgICAgICB2YWx1ZT17IHNlbGVjdGVkRGF0ZSB9XG4gICAgICAgICAgb25DaGFuZ2U9eyBzZXRTZWxlY3RlZERhdGUgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIC4uLm90aGVyc1xuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICA8L011aVBpY2tlcnNVdGlsc1Byb3ZpZGVyPlxuICApO1xufVxuXG5UaW1lSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICBtYXJnaW46IFwibm9ybWFsXCJcbn1cbiJdfQ==