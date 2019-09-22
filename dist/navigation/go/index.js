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
  return _react["default"].createElement(_react["default"].Fragment, null, external ? _react["default"].createElement("a", {
    href: to
  }, children) : _react["default"].createElement(_reactRouterDom.Link, _extends({
    innerRef: ref
  }, props)));
});

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9uYXZpZ2F0aW9uL2dvL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwiZXh0ZXJuYWwiLCJ0byIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztlQUVlQSxrQkFBTUMsVUFBTixDQUFpQixVQUFDQyxLQUFELEVBQVFDLEdBQVIsRUFBZ0I7QUFBQSxNQUN0Q0MsUUFEc0MsR0FDWEYsS0FEVyxDQUN0Q0UsUUFEc0M7QUFBQSxNQUM1QkMsRUFENEIsR0FDWEgsS0FEVyxDQUM1QkcsRUFENEI7QUFBQSxNQUN4QkMsUUFEd0IsR0FDWEosS0FEVyxDQUN4QkksUUFEd0I7QUFFOUMsU0FDRSxnQ0FBQyxpQkFBRCxDQUFPLFFBQVAsUUFFSUYsUUFBUSxHQUNSO0FBQUcsSUFBQSxJQUFJLEVBQUdDO0FBQVYsS0FBaUJDLFFBQWpCLENBRFEsR0FHUixnQ0FBQyxvQkFBRDtBQUFNLElBQUEsUUFBUSxFQUFHSDtBQUFqQixLQUE0QkQsS0FBNUIsRUFMSixDQURGO0FBVUQsQ0FaYyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gIGNvbnN0IHsgZXh0ZXJuYWwsIHRvLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG4gIHJldHVybihcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICB7XG4gICAgICAgIGV4dGVybmFsID9cbiAgICAgICAgPGEgaHJlZj17IHRvIH0+eyBjaGlsZHJlbiB9PC9hPlxuICAgICAgICA6XG4gICAgICAgIDxMaW5rIGlubmVyUmVmPXsgcmVmIH0geyAuLi5wcm9wcyB9IC8+XG4gICAgICB9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufSk7XG4iXX0=