"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FormButton;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index.js"));

var _progressive_wrap = _interopRequireDefault(require("../../progressive_wrap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function FormButton(_ref) {
  var isLoading = _ref.isLoading,
      CircularProgressProps = _ref.CircularProgressProps,
      value = _ref.value,
      others = _objectWithoutProperties(_ref, ["isLoading", "CircularProgressProps", "value"]);

  return _react["default"].createElement(_progressive_wrap["default"], _extends({
    isLoading: isLoading
  }, CircularProgressProps), _react["default"].createElement(_index["default"], _extends({
    value: value
  }, others)));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbnB1dHMvYnV0dG9uL2Zvcm1fYnV0dG9uLmpzIl0sIm5hbWVzIjpbIkZvcm1CdXR0b24iLCJpc0xvYWRpbmciLCJDaXJjdWxhclByb2dyZXNzUHJvcHMiLCJ2YWx1ZSIsIm90aGVycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRWUsU0FBU0EsVUFBVCxPQUEyRTtBQUFBLE1BQXJEQyxTQUFxRCxRQUFyREEsU0FBcUQ7QUFBQSxNQUExQ0MscUJBQTBDLFFBQTFDQSxxQkFBMEM7QUFBQSxNQUFuQkMsS0FBbUIsUUFBbkJBLEtBQW1CO0FBQUEsTUFBVEMsTUFBUzs7QUFDdEYsU0FDRSxnQ0FBQyw0QkFBRCxXQUFzQjtBQUFDSCxJQUFBQSxTQUFTLEVBQVRBO0FBQUQsR0FBdEIsRUFBMkNDLHFCQUEzQyxHQUNFLGdDQUFDLGlCQUFELFdBQWE7QUFBRUMsSUFBQUEsS0FBSyxFQUFMQTtBQUFGLEdBQWIsRUFBOEJDLE1BQTlCLEVBREYsQ0FERjtBQUtIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCBQcm9ncmVzc2l2ZVdyYXAgZnJvbSBcIi4uLy4uL3Byb2dyZXNzaXZlX3dyYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybUJ1dHRvbih7IGlzTG9hZGluZywgQ2lyY3VsYXJQcm9ncmVzc1Byb3BzLCB2YWx1ZSwgLi4ub3RoZXJzIH0pe1xuICAgIHJldHVybihcbiAgICAgIDxQcm9ncmVzc2l2ZVdyYXAgeyAuLi57aXNMb2FkaW5nIH0gfSAgeyAuLi5DaXJjdWxhclByb2dyZXNzUHJvcHMgfT5cbiAgICAgICAgPEJ1dHRvbiB7IC4uLnsgdmFsdWUgfSB9IHsgLi4ub3RoZXJzIH0gLz5cbiAgICAgIDwvUHJvZ3Jlc3NpdmVXcmFwPlxuICAgIClcbn1cbiJdfQ==