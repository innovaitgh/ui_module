"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CircularProgress;

var _react = _interopRequireDefault(require("react"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function CircularProgress(props) {
  return _react["default"].createElement(_CircularProgress["default"], props);
}

CircularProgress.defaultProps = {
  size: 50,
  style: {
    margin: "auto"
  }
};