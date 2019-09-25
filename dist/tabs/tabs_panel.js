"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TabsPanel;

var _react = _interopRequireDefault(require("react"));

var _tab_panel = _interopRequireDefault(require("./tab_panel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function TabsPanel(_ref) {
  var children = _ref.children,
      value = _ref.value;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].Children.map(children, function (child, i) {
    return _react["default"].createElement(_tab_panel["default"], {
      key: i,
      value: value,
      index: i
    }, child);
  }));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YWJzL3RhYnNfcGFuZWwuanMiXSwibmFtZXMiOlsiVGFic1BhbmVsIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVlLFNBQVNBLFNBQVQsT0FBdUM7QUFBQSxNQUFsQkMsUUFBa0IsUUFBbEJBLFFBQWtCO0FBQUEsTUFBUkMsS0FBUSxRQUFSQSxLQUFRO0FBQ3BELFNBQ0UsZ0NBQUMsaUJBQUQsQ0FBTyxRQUFQLFFBRUVDLGtCQUFNQyxRQUFOLENBQWVDLEdBQWYsQ0FBbUJKLFFBQW5CLEVBQTZCLFVBQVNLLEtBQVQsRUFBZ0JDLENBQWhCLEVBQWtCO0FBQzdDLFdBQ0UsZ0NBQUMscUJBQUQ7QUFBVSxNQUFBLEdBQUcsRUFBR0EsQ0FBaEI7QUFBb0IsTUFBQSxLQUFLLEVBQUdMLEtBQTVCO0FBQW9DLE1BQUEsS0FBSyxFQUFHSztBQUE1QyxPQUNJRCxLQURKLENBREY7QUFLRCxHQU5ELENBRkYsQ0FERjtBQWFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRhYlBhbmVsIGZyb20gXCIuL3RhYl9wYW5lbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJzUGFuZWwoeyBjaGlsZHJlbiwgdmFsdWUgfSl7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgIHtcbiAgICAgIFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgZnVuY3Rpb24oY2hpbGQsIGkpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgPFRhYlBhbmVsIGtleT17IGkgfSB2YWx1ZT17IHZhbHVlIH0gaW5kZXg9eyBpIH0+XG4gICAgICAgICAgICB7IGNoaWxkIH1cbiAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICApXG4gICAgICB9KVxuICAgIH1cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuIl19