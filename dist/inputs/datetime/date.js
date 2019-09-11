"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DateInput;

require("date-fns");

var _react = _interopRequireDefault(require("react"));

var _dateFns2 = _interopRequireDefault(require("@date-io/date-fns"));

var _pickers = require("@material-ui/pickers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DateInput(_ref) {
  var selectedDate = _ref.selectedDate,
      setSelectedDate = _ref.setSelectedDate,
      label = _ref.label,
      others = _objectWithoutProperties(_ref, ["selectedDate", "setSelectedDate", "label"]);

  return _react["default"].createElement(_pickers.MuiPickersUtilsProvider, {
    utils: _dateFns2["default"]
  }, _react["default"].createElement(_pickers.KeyboardDatePicker, _extends({
    disableToolbar: true,
    label: label,
    value: selectedDate,
    onChange: setSelectedDate
  }, others)));
}

DateInput.defaultProps = {
  format: "MM/dd/yyyy",
  margin: "normal"
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbnB1dHMvZGF0ZXRpbWUvZGF0ZS5qcyJdLCJuYW1lcyI6WyJEYXRlSW5wdXQiLCJzZWxlY3RlZERhdGUiLCJzZXRTZWxlY3RlZERhdGUiLCJsYWJlbCIsIm90aGVycyIsIkRhdGVGbnNVdGlscyIsImRlZmF1bHRQcm9wcyIsImZvcm1hdCIsIm1hcmdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBS2UsU0FBU0EsU0FBVCxPQUF3RTtBQUFBLE1BQW5EQyxZQUFtRCxRQUFuREEsWUFBbUQ7QUFBQSxNQUFyQ0MsZUFBcUMsUUFBckNBLGVBQXFDO0FBQUEsTUFBcEJDLEtBQW9CLFFBQXBCQSxLQUFvQjtBQUFBLE1BQVZDLE1BQVU7O0FBQ3JGLFNBQ0UsZ0NBQUMsZ0NBQUQ7QUFBeUIsSUFBQSxLQUFLLEVBQUdDO0FBQWpDLEtBQ0UsZ0NBQUMsMkJBQUQ7QUFDRSxJQUFBLGNBQWMsTUFEaEI7QUFFRSxJQUFBLEtBQUssRUFBR0YsS0FGVjtBQUdFLElBQUEsS0FBSyxFQUFHRixZQUhWO0FBSUUsSUFBQSxRQUFRLEVBQUdDO0FBSmIsS0FLT0UsTUFMUCxFQURGLENBREY7QUFXRDs7QUFFREosU0FBUyxDQUFDTSxZQUFWLEdBQXlCO0FBQ3ZCQyxFQUFBQSxNQUFNLEVBQUUsWUFEZTtBQUV2QkMsRUFBQUEsTUFBTSxFQUFFO0FBRmUsQ0FBekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2RhdGUtZm5zJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRGF0ZUZuc1V0aWxzIGZyb20gJ0BkYXRlLWlvL2RhdGUtZm5zJztcbmltcG9ydCB7XG4gIE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLFxuICBLZXlib2FyZERhdGVQaWNrZXIsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9waWNrZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0ZUlucHV0KHsgc2VsZWN0ZWREYXRlLCBzZXRTZWxlY3RlZERhdGUsIGxhYmVsLCAuLi5vdGhlcnMgfSkge1xuICByZXR1cm4gKFxuICAgIDxNdWlQaWNrZXJzVXRpbHNQcm92aWRlciB1dGlscz17IERhdGVGbnNVdGlscyB9PlxuICAgICAgPEtleWJvYXJkRGF0ZVBpY2tlclxuICAgICAgICBkaXNhYmxlVG9vbGJhclxuICAgICAgICBsYWJlbD17IGxhYmVsIH1cbiAgICAgICAgdmFsdWU9eyBzZWxlY3RlZERhdGUgfVxuICAgICAgICBvbkNoYW5nZT17IHNldFNlbGVjdGVkRGF0ZSB9XG4gICAgICAgIHsgLi4ub3RoZXJzIH1cbiAgICAgIC8+XG4gICAgPC9NdWlQaWNrZXJzVXRpbHNQcm92aWRlcj5cbiAgKTtcbn1cblxuRGF0ZUlucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgZm9ybWF0OiBcIk1NL2RkL3l5eXlcIixcbiAgbWFyZ2luOiBcIm5vcm1hbFwiXG59XG4iXX0=