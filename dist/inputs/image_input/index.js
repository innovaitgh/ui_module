"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ImageInput;

var _react = _interopRequireDefault(require("react"));

var _form_helper_text = _interopRequireDefault(require("../../form_helper_text"));

var _form_control = _interopRequireDefault(require("../../form_control"));

var _button = _interopRequireDefault(require("../button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ImageInput(_ref) {
  var FormControlProps = _ref.FormControlProps,
      ImageButton = _ref.ImageButton,
      FormHelperTextProps = _ref.FormHelperTextProps,
      help = _ref.help,
      others = _objectWithoutProperties(_ref, ["FormControlProps", "ImageButton", "FormHelperTextProps", "help"]);

  return _react["default"].createElement(_form_control["default"], FormControlProps, _react["default"].createElement("input", others), _react["default"].createElement("label", null, ImageButton), _react["default"].createElement(_form_helper_text["default"], _extends({
    help: help
  }, FormControlProps)));
}

ImageInput.defaultProps = {
  type: "file",
  accept: "image/*",
  style: {
    display: "none"
  },
  ImageButton: _react["default"].createElement(_button["default"], {
    component: "span"
  })
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbnB1dHMvaW1hZ2VfaW5wdXQvaW5kZXguanMiXSwibmFtZXMiOlsiSW1hZ2VJbnB1dCIsIkZvcm1Db250cm9sUHJvcHMiLCJJbWFnZUJ1dHRvbiIsIkZvcm1IZWxwZXJUZXh0UHJvcHMiLCJoZWxwIiwib3RoZXJzIiwiZGVmYXVsdFByb3BzIiwidHlwZSIsImFjY2VwdCIsInN0eWxlIiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBR2UsU0FBU0EsVUFBVCxPQUE0RjtBQUFBLE1BQXRFQyxnQkFBc0UsUUFBdEVBLGdCQUFzRTtBQUFBLE1BQXBEQyxXQUFvRCxRQUFwREEsV0FBb0Q7QUFBQSxNQUF2Q0MsbUJBQXVDLFFBQXZDQSxtQkFBdUM7QUFBQSxNQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsTUFBVEMsTUFBUzs7QUFDekcsU0FDRSxnQ0FBQyx3QkFBRCxFQUFrQkosZ0JBQWxCLEVBQ0UseUNBQVlJLE1BQVosQ0FERixFQUVFLCtDQUNJSCxXQURKLENBRkYsRUFLRSxnQ0FBQyw0QkFBRDtBQUFnQixJQUFBLElBQUksRUFBR0U7QUFBdkIsS0FBbUNILGdCQUFuQyxFQUxGLENBREY7QUFTRDs7QUFFREQsVUFBVSxDQUFDTSxZQUFYLEdBQTBCO0FBQ3hCQyxFQUFBQSxJQUFJLEVBQUUsTUFEa0I7QUFFeEJDLEVBQUFBLE1BQU0sRUFBRSxTQUZnQjtBQUd4QkMsRUFBQUEsS0FBSyxFQUFFO0FBQUVDLElBQUFBLE9BQU8sRUFBRTtBQUFYLEdBSGlCO0FBSXhCUixFQUFBQSxXQUFXLEVBQUUsZ0NBQUMsa0JBQUQ7QUFBUSxJQUFBLFNBQVMsRUFBQztBQUFsQjtBQUpXLENBQTFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtSGVscGVyVGV4dCBmcm9tICcuLi8uLi9mb3JtX2hlbHBlcl90ZXh0JztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICcuLi8uLi9mb3JtX2NvbnRyb2wnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlSW5wdXQoeyBGb3JtQ29udHJvbFByb3BzLCBJbWFnZUJ1dHRvbiwgRm9ybUhlbHBlclRleHRQcm9wcywgaGVscCwgLi4ub3RoZXJzIH0pe1xuICByZXR1cm4oXG4gICAgPEZvcm1Db250cm9sIHsgLi4uRm9ybUNvbnRyb2xQcm9wcyB9PlxuICAgICAgPGlucHV0IHsgLi4ub3RoZXJzIH0gLz5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgeyBJbWFnZUJ1dHRvbiB9XG4gICAgICA8L2xhYmVsPlxuICAgICAgPEZvcm1IZWxwZXJUZXh0IGhlbHA9eyBoZWxwIH0geyAuLi5Gb3JtQ29udHJvbFByb3BzIH0gLz5cbiAgICA8L0Zvcm1Db250cm9sPlxuICApXG59XG5cbkltYWdlSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICB0eXBlOiBcImZpbGVcIixcbiAgYWNjZXB0OiBcImltYWdlLypcIixcbiAgc3R5bGU6IHsgZGlzcGxheTogXCJub25lXCIgfSxcbiAgSW1hZ2VCdXR0b246IDxCdXR0b24gY29tcG9uZW50PVwic3BhblwiIC8+XG59XG4iXX0=