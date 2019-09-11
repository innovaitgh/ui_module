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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mZWVkYmFjay9kaWFsb2cvaW5kZXguanMiXSwibmFtZXMiOlsiTXlEaWFsb2ciLCJvcGVuIiwidGl0bGUiLCJjaGlsZHJlbiIsIkFjdGlvbnMiLCJvbkNsb3NlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFZSxTQUFTQSxRQUFULE9BQStEO0FBQUEsTUFBM0NDLElBQTJDLFFBQTNDQSxJQUEyQztBQUFBLE1BQXJDQyxLQUFxQyxRQUFyQ0EsS0FBcUM7QUFBQSxNQUE5QkMsUUFBOEIsUUFBOUJBLFFBQThCO0FBQUEsTUFBcEJDLE9BQW9CLFFBQXBCQSxPQUFvQjtBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUM1RSxTQUNFLGdDQUFDLGtCQUFEO0FBQVEsSUFBQSxJQUFJLEVBQUtKLElBQWpCO0FBQXdCLElBQUEsT0FBTyxFQUFLSTtBQUFwQyxLQUNFLGdDQUFDLHVCQUFELFFBQWVILEtBQWYsQ0FERixFQUVFLGdDQUFDLHlCQUFELFFBQ0lDLFFBREosQ0FGRixFQU1JQyxPQUFPLEdBQ1AsZ0NBQUMseUJBQUQsUUFDSUEsT0FESixDQURPLEdBSUwsSUFWTixDQURGO0FBZUQ7O0FBQ0RKLFFBQVEsQ0FBQ00sWUFBVCxHQUF3QjtBQUN0QkwsRUFBQUEsSUFBSSxFQUFFO0FBRGdCLENBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeURpYWxvZyh7IG9wZW4sIHRpdGxlLCBjaGlsZHJlbiwgQWN0aW9ucywgb25DbG9zZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPERpYWxvZyBvcGVuID0geyBvcGVuIH0gb25DbG9zZSA9IHsgb25DbG9zZSB9PlxuICAgICAgPERpYWxvZ1RpdGxlPnsgdGl0bGUgfTwvRGlhbG9nVGl0bGU+XG4gICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICB7XG4gICAgICAgIEFjdGlvbnMgP1xuICAgICAgICA8RGlhbG9nQWN0aW9ucz5cbiAgICAgICAgICB7IEFjdGlvbnMgfVxuICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XG4gICAgICAgIDogbnVsbFxuICAgICAgfVxuICAgIDwvRGlhbG9nPlxuICApO1xufVxuTXlEaWFsb2cuZGVmYXVsdFByb3BzID0ge1xuICBvcGVuOiBmYWxzZSxcbn1cbiJdfQ==