"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MySelect;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MySelect(_ref) {
  var FormControlProps = _ref.FormControlProps,
      FormHelperTextProps = _ref.FormHelperTextProps,
      label = _ref.label,
      help = _ref.help,
      others = _objectWithoutProperties(_ref, ["FormControlProps", "FormHelperTextProps", "label", "help"]);

  return _react["default"].createElement(_core.FormControl, _extends({}, FormControlProps, {
    margin: "normal"
  }), _react["default"].createElement(_core.InputLabel, null, label), _react["default"].createElement(_core.Select, others, children), _react["default"].createElement(_core.FormHelperText, FormHelperTextProps, help));
}

MySelect.defaultProps = {
  "native": true,
  input: _react["default"].createElement(_core.Input, null),
  options: []
};