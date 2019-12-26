"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = _react["default"].forwardRef(function (props, ref) {
  var external = props.external,
      to = props.to,
      children = props.children;
  return _react["default"].createElement(_react["default"].Fragment, null, external ? _react["default"].createElement("a", _extends({
    href: to
  }, props), children) : _react["default"].createElement(_reactRouterDom.Link, _extends({
    innerRef: ref
  }, props)));
});

exports["default"] = _default;