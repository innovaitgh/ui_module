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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9uYXZpZ2F0aW9uL2dvL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwiZXh0ZXJuYWwiLCJ0byIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztlQUVlQSxrQkFBTUMsVUFBTixDQUFpQixVQUFDQyxLQUFELEVBQVFDLEdBQVIsRUFBZ0I7QUFBQSxNQUN0Q0MsUUFEc0MsR0FDWEYsS0FEVyxDQUN0Q0UsUUFEc0M7QUFBQSxNQUM1QkMsRUFENEIsR0FDWEgsS0FEVyxDQUM1QkcsRUFENEI7QUFBQSxNQUN4QkMsUUFEd0IsR0FDWEosS0FEVyxDQUN4QkksUUFEd0I7QUFFOUMsU0FDRSxnQ0FBQyxpQkFBRCxDQUFPLFFBQVAsUUFFSUYsUUFBUSxHQUNSO0FBQUcsSUFBQSxJQUFJLEVBQUdDO0FBQVYsS0FBb0JILEtBQXBCLEdBQThCSSxRQUE5QixDQURRLEdBR1IsZ0NBQUMsb0JBQUQ7QUFBTSxJQUFBLFFBQVEsRUFBR0g7QUFBakIsS0FBNEJELEtBQTVCLEVBTEosQ0FERjtBQVVELENBWmMsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICBjb25zdCB7IGV4dGVybmFsLCB0bywgY2hpbGRyZW4gfSA9IHByb3BzO1xuICByZXR1cm4oXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAge1xuICAgICAgICBleHRlcm5hbCA/XG4gICAgICAgIDxhIGhyZWY9eyB0byB9IHsgLi4ucHJvcHMgfT57IGNoaWxkcmVuIH08L2E+XG4gICAgICAgIDpcbiAgICAgICAgPExpbmsgaW5uZXJSZWY9eyByZWYgfSB7IC4uLnByb3BzIH0gLz5cbiAgICAgIH1cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59KTtcbiJdfQ==