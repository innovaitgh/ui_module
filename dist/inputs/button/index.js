"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MyButton;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MyButton(_ref) {
  var value = _ref.value,
      others = _objectWithoutProperties(_ref, ["value"]);

  return _react["default"].createElement(_core.Button, others, value);
}

MyButton.defaultProps = {
  variant: "contained",
  type: "submit",
  color: "primary",
  margin: "normal",
  fullWidth: true
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbnB1dHMvYnV0dG9uL2luZGV4LmpzIl0sIm5hbWVzIjpbIk15QnV0dG9uIiwidmFsdWUiLCJvdGhlcnMiLCJkZWZhdWx0UHJvcHMiLCJ2YXJpYW50IiwidHlwZSIsImNvbG9yIiwibWFyZ2luIiwiZnVsbFdpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O0FBRWUsU0FBU0EsUUFBVCxPQUF1QztBQUFBLE1BQW5CQyxLQUFtQixRQUFuQkEsS0FBbUI7QUFBQSxNQUFUQyxNQUFTOztBQUNwRCxTQUNFLGdDQUFDLFlBQUQsRUFBYUEsTUFBYixFQUNJRCxLQURKLENBREY7QUFLRDs7QUFFREQsUUFBUSxDQUFDRyxZQUFULEdBQXdCO0FBQ3RCQyxFQUFBQSxPQUFPLEVBQUUsV0FEYTtBQUV0QkMsRUFBQUEsSUFBSSxFQUFFLFFBRmdCO0FBR3RCQyxFQUFBQSxLQUFLLEVBQUUsU0FIZTtBQUl0QkMsRUFBQUEsTUFBTSxFQUFFLFFBSmM7QUFLdEJDLEVBQUFBLFNBQVMsRUFBRTtBQUxXLENBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlCdXR0b24oeyB2YWx1ZSwgLi4ub3RoZXJzIH0pe1xuICByZXR1cm4oXG4gICAgPEJ1dHRvbiB7IC4uLm90aGVycyB9PlxuICAgICAgeyB2YWx1ZSB9XG4gICAgPC9CdXR0b24+XG4gIClcbn1cblxuTXlCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICB2YXJpYW50OiBcImNvbnRhaW5lZFwiLFxuICB0eXBlOiBcInN1Ym1pdFwiLFxuICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gIG1hcmdpbjogXCJub3JtYWxcIixcbiAgZnVsbFdpZHRoOiB0cnVlXG59O1xuIl19