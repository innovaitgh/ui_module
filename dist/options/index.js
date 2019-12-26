"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Options;

var _react = _interopRequireDefault(require("react"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Options(_ref) {
  var list = _ref.list,
      open = _ref.open,
      handleClose = _ref.handleClose;
  return _react["default"].createElement(_Dialog["default"], {
    onClose: handleClose,
    open: open
  }, _react["default"].createElement(_DialogTitle["default"], null, "Options"), _react["default"].createElement(_List["default"], null, list.map(function (option, i) {
    var name = option.name,
        optionProps = option.optionProps;
    return _react["default"].createElement(_ListItem["default"], _extends({
      key: i
    }, optionProps), _react["default"].createElement(_ListItemText["default"], {
      primary: name
    }));
  })));
}