"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MySelect;

var _react = _interopRequireDefault(require("react"));

var _form_helper_text = _interopRequireDefault(require("../../form_helper_text"));

var _form_control = _interopRequireDefault(require("../../form_control"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _OutlinedInput = _interopRequireDefault(require("@material-ui/core/OutlinedInput"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MySelect(_ref) {
  var FormControlProps = _ref.FormControlProps,
      FormHelperTextProps = _ref.FormHelperTextProps,
      label = _ref.label,
      fieldName = _ref.fieldName,
      valueName = _ref.valueName,
      options = _ref.options,
      help = _ref.help,
      others = _objectWithoutProperties(_ref, ["FormControlProps", "FormHelperTextProps", "label", "fieldName", "valueName", "options", "help"]);

  return _react["default"].createElement(_form_control["default"], FormControlProps, _react["default"].createElement(_InputLabel["default"], null, label), _react["default"].createElement(_Select["default"], others, _typeof(options) === "object" ? Object.keys(options).map(function (key, i) {
    return _react["default"].createElement("option", {
      key: i,
      value: key
    }, options[key]);
  }) : options.map(function (option, i) {
    if (_typeof(option) === "object") {
      return _react["default"].createElement("option", {
        key: i,
        value: option[valueName]
      }, option[fieldName]);
    }

    return _react["default"].createElement("option", {
      key: i,
      value: option
    }, option);
  })), _react["default"].createElement(_form_helper_text["default"], _extends({
    help: help
  }, FormHelperTextProps)));
}

MySelect.defaultProps = {
  "native": true,
  input: _react["default"].createElement(_OutlinedInput["default"], null),
  options: [],
  fieldName: "name",
  valueName: "value"
};