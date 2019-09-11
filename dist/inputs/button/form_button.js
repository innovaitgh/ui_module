"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FormButton;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index.js"));

var _form_control = _interopRequireDefault(require("../../form_control"));

var _form_helper_text = _interopRequireDefault(require("../../form_helper_text"));

var _progressive_wrap = _interopRequireDefault(require("../../progressive_wrap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FormButton(_ref) {
  var FormControlProps = _ref.FormControlProps,
      isLoading = _ref.isLoading,
      CircularProgressProps = _ref.CircularProgressProps,
      value = _ref.value,
      ButtonProps = _ref.ButtonProps,
      FormHelperTextProps = _ref.FormHelperTextProps,
      help = _ref.help;
  return _react["default"].createElement(_form_control["default"], FormControlProps, _react["default"].createElement(_progressive_wrap["default"], _extends({
    isLoading: isLoading
  }, CircularProgressProps), _react["default"].createElement(_index["default"], _extends({
    value: value
  }, ButtonProps))), _react["default"].createElement(_form_helper_text["default"], _extends({
    help: help
  }, FormHelperTextProps)));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbnB1dHMvYnV0dG9uL2Zvcm1fYnV0dG9uLmpzIl0sIm5hbWVzIjpbIkZvcm1CdXR0b24iLCJGb3JtQ29udHJvbFByb3BzIiwiaXNMb2FkaW5nIiwiQ2lyY3VsYXJQcm9ncmVzc1Byb3BzIiwidmFsdWUiLCJCdXR0b25Qcm9wcyIsIkZvcm1IZWxwZXJUZXh0UHJvcHMiLCJoZWxwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVlLFNBQVNBLFVBQVQsT0FBeUg7QUFBQSxNQUFuR0MsZ0JBQW1HLFFBQW5HQSxnQkFBbUc7QUFBQSxNQUFqRkMsU0FBaUYsUUFBakZBLFNBQWlGO0FBQUEsTUFBdEVDLHFCQUFzRSxRQUF0RUEscUJBQXNFO0FBQUEsTUFBL0NDLEtBQStDLFFBQS9DQSxLQUErQztBQUFBLE1BQXhDQyxXQUF3QyxRQUF4Q0EsV0FBd0M7QUFBQSxNQUEzQkMsbUJBQTJCLFFBQTNCQSxtQkFBMkI7QUFBQSxNQUFOQyxJQUFNLFFBQU5BLElBQU07QUFDcEksU0FDRSxnQ0FBQyx3QkFBRCxFQUFrQk4sZ0JBQWxCLEVBQ0UsZ0NBQUMsNEJBQUQ7QUFBaUIsSUFBQSxTQUFTLEVBQUdDO0FBQTdCLEtBQThDQyxxQkFBOUMsR0FDRSxnQ0FBQyxpQkFBRDtBQUFRLElBQUEsS0FBSyxFQUFHQztBQUFoQixLQUE2QkMsV0FBN0IsRUFERixDQURGLEVBSUUsZ0NBQUMsNEJBQUQ7QUFBZ0IsSUFBQSxJQUFJLEVBQUdFO0FBQXZCLEtBQW1DRCxtQkFBbkMsRUFKRixDQURGO0FBUUgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCIuLi8uLi9mb3JtX2NvbnRyb2xcIjtcbmltcG9ydCBGb3JtSGVscGVyVGV4dCBmcm9tIFwiLi4vLi4vZm9ybV9oZWxwZXJfdGV4dFwiO1xuaW1wb3J0IFByb2dyZXNzaXZlV3JhcCBmcm9tIFwiLi4vLi4vcHJvZ3Jlc3NpdmVfd3JhcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtQnV0dG9uKHsgRm9ybUNvbnRyb2xQcm9wcywgaXNMb2FkaW5nLCBDaXJjdWxhclByb2dyZXNzUHJvcHMsIHZhbHVlLCBCdXR0b25Qcm9wcywgRm9ybUhlbHBlclRleHRQcm9wcywgaGVscH0pe1xuICAgIHJldHVybihcbiAgICAgIDxGb3JtQ29udHJvbCB7IC4uLkZvcm1Db250cm9sUHJvcHMgfT5cbiAgICAgICAgPFByb2dyZXNzaXZlV3JhcCBpc0xvYWRpbmc9eyBpc0xvYWRpbmcgfSB7IC4uLkNpcmN1bGFyUHJvZ3Jlc3NQcm9wcyB9PlxuICAgICAgICAgIDxCdXR0b24gdmFsdWU9eyB2YWx1ZSB9IHsgLi4uQnV0dG9uUHJvcHMgfSAvPlxuICAgICAgICA8L1Byb2dyZXNzaXZlV3JhcD5cbiAgICAgICAgPEZvcm1IZWxwZXJUZXh0IGhlbHA9eyBoZWxwIH0geyAuLi5Gb3JtSGVscGVyVGV4dFByb3BzIH0gLz5cbiAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgKVxufVxuIl19