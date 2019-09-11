"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MySelect;

var _react = _interopRequireDefault(require("react"));

var _form_helper_text = _interopRequireDefault(require("../../form_helper_text"));

var _form_control = _interopRequireDefault(require("../../form_control"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _OutlinedInput = _interopRequireDefault(require("@material-ui/core/OutlinedInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MySelect(_ref) {
  var FormControlProps = _ref.FormControlProps,
      FormHelperTextProps = _ref.FormHelperTextProps,
      fieldName = _ref.fieldName,
      valueName = _ref.valueName,
      options = _ref.options,
      help = _ref.help,
      others = _objectWithoutProperties(_ref, ["FormControlProps", "FormHelperTextProps", "fieldName", "valueName", "options", "help"]);

  return _react["default"].createElement(_form_control["default"], FormControlProps, _react["default"].createElement(_Select["default"], others, options.map(function (option, i) {
    if (_typeof(option) === "object") {
      return _react["default"].createElement("option", {
        key: i,
        value: option[valueName]
      }, option[fieldName]);
    }

    return _react["default"].createElement("option", {
      key: i,
      value: option
    }, option);
  })), _react["default"].createElement(_form_helper_text["default"], _extends({
    help: help
  }, FormHelperTextProps)));
}

MySelect.defaultProps = {
  "native": true,
  input: _react["default"].createElement(_OutlinedInput["default"], {
    fullWidth: true
  }),
  options: [],
  fieldName: "name",
  valueName: "value"
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbnB1dHMvc2VsZWN0L2luZGV4LmpzIl0sIm5hbWVzIjpbIk15U2VsZWN0IiwiRm9ybUNvbnRyb2xQcm9wcyIsIkZvcm1IZWxwZXJUZXh0UHJvcHMiLCJmaWVsZE5hbWUiLCJ2YWx1ZU5hbWUiLCJvcHRpb25zIiwiaGVscCIsIm90aGVycyIsIm1hcCIsIm9wdGlvbiIsImkiLCJkZWZhdWx0UHJvcHMiLCJpbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFZSxTQUFTQSxRQUFULE9BQTRHO0FBQUEsTUFBeEZDLGdCQUF3RixRQUF4RkEsZ0JBQXdGO0FBQUEsTUFBdEVDLG1CQUFzRSxRQUF0RUEsbUJBQXNFO0FBQUEsTUFBakRDLFNBQWlELFFBQWpEQSxTQUFpRDtBQUFBLE1BQXRDQyxTQUFzQyxRQUF0Q0EsU0FBc0M7QUFBQSxNQUEzQkMsT0FBMkIsUUFBM0JBLE9BQTJCO0FBQUEsTUFBbEJDLElBQWtCLFFBQWxCQSxJQUFrQjtBQUFBLE1BQVRDLE1BQVM7O0FBQ3pILFNBQ0UsZ0NBQUMsd0JBQUQsRUFBa0JOLGdCQUFsQixFQUNFLGdDQUFDLGtCQUFELEVBQWFNLE1BQWIsRUFFSUYsT0FBTyxDQUFDRyxHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFTQyxDQUFULEVBQWU7QUFDMUIsUUFBRyxRQUFPRCxNQUFQLE1BQWtCLFFBQXJCLEVBQThCO0FBQzVCLGFBQ0U7QUFBUSxRQUFBLEdBQUcsRUFBR0MsQ0FBZDtBQUFrQixRQUFBLEtBQUssRUFBR0QsTUFBTSxDQUFDTCxTQUFEO0FBQWhDLFNBQWdESyxNQUFNLENBQUNOLFNBQUQsQ0FBdEQsQ0FERjtBQUdEOztBQUNELFdBQ0U7QUFBUSxNQUFBLEdBQUcsRUFBR08sQ0FBZDtBQUFrQixNQUFBLEtBQUssRUFBR0Q7QUFBMUIsT0FBcUNBLE1BQXJDLENBREY7QUFHRCxHQVRBLENBRkosQ0FERixFQWVFLGdDQUFDLDRCQUFEO0FBQWdCLElBQUEsSUFBSSxFQUFHSDtBQUF2QixLQUFtQ0osbUJBQW5DLEVBZkYsQ0FERjtBQW1CRDs7QUFFREYsUUFBUSxDQUFDVyxZQUFULEdBQXdCO0FBQ3RCLFlBQVEsSUFEYztBQUV0QkMsRUFBQUEsS0FBSyxFQUFFLGdDQUFDLHlCQUFEO0FBQWUsSUFBQSxTQUFTO0FBQXhCLElBRmU7QUFHdEJQLEVBQUFBLE9BQU8sRUFBRSxFQUhhO0FBSXRCRixFQUFBQSxTQUFTLEVBQUUsTUFKVztBQUt0QkMsRUFBQUEsU0FBUyxFQUFFO0FBTFcsQ0FBeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm1IZWxwZXJUZXh0IGZyb20gJy4uLy4uL2Zvcm1faGVscGVyX3RleHQnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJy4uLy4uL2Zvcm1fY29udHJvbCc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XG5pbXBvcnQgT3V0bGluZWRJbnB1dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvT3V0bGluZWRJbnB1dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeVNlbGVjdCh7IEZvcm1Db250cm9sUHJvcHMsIEZvcm1IZWxwZXJUZXh0UHJvcHMsIGZpZWxkTmFtZSwgdmFsdWVOYW1lLCBvcHRpb25zLCBoZWxwLCAuLi5vdGhlcnMgfSl7XG4gIHJldHVybihcbiAgICA8Rm9ybUNvbnRyb2wgeyAuLi5Gb3JtQ29udHJvbFByb3BzIH0+XG4gICAgICA8U2VsZWN0IHsgLi4ub3RoZXJzIH0+XG4gICAgICAgIHtcbiAgICAgICAgICBvcHRpb25zLm1hcCgob3B0aW9uLCBpKSA9PiB7XG4gICAgICAgICAgIGlmKHR5cGVvZiBvcHRpb24gPT09IFwib2JqZWN0XCIpe1xuICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXsgaSB9IHZhbHVlPXsgb3B0aW9uW3ZhbHVlTmFtZV0gfT57IG9wdGlvbltmaWVsZE5hbWVdIH08L29wdGlvbj5cbiAgICAgICAgICAgICApXG4gICAgICAgICAgIH1cbiAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgIDxvcHRpb24ga2V5PXsgaSB9IHZhbHVlPXsgb3B0aW9uIH0+eyBvcHRpb24gfTwvb3B0aW9uPlxuICAgICAgICAgICApXG4gICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L1NlbGVjdD5cbiAgICAgIDxGb3JtSGVscGVyVGV4dCBoZWxwPXsgaGVscCB9IHsgLi4uRm9ybUhlbHBlclRleHRQcm9wcyB9IC8+XG4gICAgPC9Gb3JtQ29udHJvbD5cbiAgKVxufVxuXG5NeVNlbGVjdC5kZWZhdWx0UHJvcHMgPSB7XG4gIG5hdGl2ZTogdHJ1ZSxcbiAgaW5wdXQ6IDxPdXRsaW5lZElucHV0IGZ1bGxXaWR0aCAvPixcbiAgb3B0aW9uczogW10sXG4gIGZpZWxkTmFtZTogXCJuYW1lXCIsXG4gIHZhbHVlTmFtZTogXCJ2YWx1ZVwiXG59XG4iXX0=