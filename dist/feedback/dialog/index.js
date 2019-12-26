"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MyDialog;

var _react = _interopRequireDefault(require("react"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function MyDialog(_ref) {
  var open = _ref.open,
      title = _ref.title,
      children = _ref.children,
      Actions = _ref.Actions,
      onClose = _ref.onClose;
  return _react["default"].createElement(_Dialog["default"], {
    open: open,
    onClose: onClose
  }, _react["default"].createElement(_DialogTitle["default"], null, title), _react["default"].createElement(_DialogContent["default"], null, children), Actions ? _react["default"].createElement(_DialogActions["default"], null, Actions) : null);
}

MyDialog.defaultProps = {
  open: false
};