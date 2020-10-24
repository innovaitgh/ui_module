"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  return _react["default"].createElement("div", {
    style: {
      width: "100%",
      textAlign: "center"
    }
  }, _react["default"].createElement(_core.CircularProgress, null));
};

exports["default"] = _default;