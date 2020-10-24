"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _styles.withStyles)({
  root: {
    '& .MuiInput-underline:before': {
      borderBottom: 'none'
    },
    '& .MuiInput-underline:hover:before': {
      borderBottom: 'none'
    },
    '& .MuiInputBase-root': {
      color: "white"
    }
  }
})(_TextField["default"]);

exports["default"] = _default;