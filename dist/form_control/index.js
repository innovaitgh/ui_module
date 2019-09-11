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
  fullWidth: true
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtX2NvbnRyb2wvaW5kZXguanMiXSwibmFtZXMiOlsiTXlGb3JtQ29udHJvbCIsImNoaWxkcmVuIiwib3RoZXJzIiwiZGVmYXVsdFByb3BzIiwiZnVsbFdpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O0FBR2UsU0FBU0EsYUFBVCxPQUErQztBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7QUFBQSxNQUFUQyxNQUFTOztBQUM1RCxTQUNFLGdDQUFDLGlCQUFELEVBQWtCQSxNQUFsQixFQUNJRCxRQURKLENBREY7QUFLRDs7QUFFREQsYUFBYSxDQUFDRyxZQUFkLEdBQTZCO0FBQzNCQyxFQUFBQSxTQUFTLEVBQUU7QUFEZ0IsQ0FBN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlGb3JtQ29udHJvbCh7IGNoaWxkcmVuLCAuLi5vdGhlcnMgfSl7XG4gIHJldHVybihcbiAgICA8Rm9ybUNvbnRyb2wgeyAuLi5vdGhlcnMgfT5cbiAgICAgIHsgY2hpbGRyZW4gfVxuICAgIDwvRm9ybUNvbnRyb2w+XG4gIClcbn1cblxuTXlGb3JtQ29udHJvbC5kZWZhdWx0UHJvcHMgPSB7XG4gIGZ1bGxXaWR0aDogdHJ1ZVxufVxuIl19