"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MyFormHelperText;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MyFormHelperText(_ref) {
  var help = _ref.help,
      others = _objectWithoutProperties(_ref, ["help"]);

  return _react["default"].createElement(_react["default"].Fragment, null, help ? _react["default"].createElement(_core.FormHelperText, others, help) : null);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtX2hlbHBlcl90ZXh0L2luZGV4LmpzIl0sIm5hbWVzIjpbIk15Rm9ybUhlbHBlclRleHQiLCJoZWxwIiwib3RoZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O0FBRWUsU0FBU0EsZ0JBQVQsT0FBOEM7QUFBQSxNQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsTUFBVEMsTUFBUzs7QUFDM0QsU0FDRSxnQ0FBQyxpQkFBRCxDQUFPLFFBQVAsUUFFSUQsSUFBSSxHQUNKLGdDQUFDLG9CQUFELEVBQXFCQyxNQUFyQixFQUFpQ0QsSUFBakMsQ0FESSxHQUVGLElBSk4sQ0FERjtBQVNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm1IZWxwZXJUZXh0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUZvcm1IZWxwZXJUZXh0KHsgaGVscCwgLi4ub3RoZXJzIH0pe1xuICByZXR1cm4oXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAge1xuICAgICAgICBoZWxwID9cbiAgICAgICAgPEZvcm1IZWxwZXJUZXh0IHsgLi4ub3RoZXJzIH0gPnsgaGVscCB9PC9Gb3JtSGVscGVyVGV4dD5cbiAgICAgICAgOiBudWxsXG4gICAgICB9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG59XG4iXX0=