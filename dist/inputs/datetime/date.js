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