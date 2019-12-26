"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MyTextField;

var _react = _interopRequireDefault(require("react"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function MyTextField(props) {
  return _react["default"].createElement(_TextField["default"], props);
}

MyTextField.defaultProps = {
  variant: "outlined",
  fullWidth: true,
  margin: "normal"
};