"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MyFormControl;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MyFormControl(_ref) {
  var children = _ref.children,
      others = _objectWithoutProperties(_ref, ["children"]);

  return _react["default"].createElement(_core.FormControl, others, children);
}

MyFormControl.defaultProps = {
  fullWidth: true,
  margin: "normal"
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtX2NvbnRyb2wvaW5kZXguanMiXSwibmFtZXMiOlsiTXlGb3JtQ29udHJvbCIsImNoaWxkcmVuIiwib3RoZXJzIiwiZGVmYXVsdFByb3BzIiwiZnVsbFdpZHRoIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O0FBR2UsU0FBU0EsYUFBVCxPQUErQztBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7QUFBQSxNQUFUQyxNQUFTOztBQUM1RCxTQUNFLGdDQUFDLGlCQUFELEVBQWtCQSxNQUFsQixFQUNJRCxRQURKLENBREY7QUFLRDs7QUFFREQsYUFBYSxDQUFDRyxZQUFkLEdBQTZCO0FBQzNCQyxFQUFBQSxTQUFTLEVBQUUsSUFEZ0I7QUFFM0JDLEVBQUFBLE1BQU0sRUFBRTtBQUZtQixDQUE3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUZvcm1Db250cm9sKHsgY2hpbGRyZW4sIC4uLm90aGVycyB9KXtcbiAgcmV0dXJuKFxuICAgIDxGb3JtQ29udHJvbCB7IC4uLm90aGVycyB9PlxuICAgICAgeyBjaGlsZHJlbiB9XG4gICAgPC9Gb3JtQ29udHJvbD5cbiAgKVxufVxuXG5NeUZvcm1Db250cm9sLmRlZmF1bHRQcm9wcyA9IHtcbiAgZnVsbFdpZHRoOiB0cnVlLFxuICBtYXJnaW46IFwibm9ybWFsXCJcbn1cbiJdfQ==