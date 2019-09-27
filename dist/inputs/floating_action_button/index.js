"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FloatingActionButton;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Fab = _interopRequireDefault(require("@material-ui/core/Fab"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    fab: {
      position: 'fixed',
      zIndex: "4",
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  };
});

function FloatingActionButton(_ref) {
  var color = _ref.color,
      icon = _ref.icon,
      others = _objectWithoutProperties(_ref, ["color", "icon"]);

  var classes = useStyles();
  return _react["default"].createElement(_Fab["default"], _extends({
    className: classes.fab,
    color: color
  }, others), icon);
}

FloatingActionButton.defaultProps = {
  color: "primary"
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbnB1dHMvZmxvYXRpbmdfYWN0aW9uX2J1dHRvbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJ0aGVtZSIsImZhYiIsInBvc2l0aW9uIiwiekluZGV4IiwiYm90dG9tIiwic3BhY2luZyIsInJpZ2h0IiwiRmxvYXRpbmdBY3Rpb25CdXR0b24iLCJjb2xvciIsImljb24iLCJvdGhlcnMiLCJjbGFzc2VzIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsd0JBQVcsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDckNDLElBQUFBLEdBQUcsRUFBRTtBQUNIQyxNQUFBQSxRQUFRLEVBQUUsT0FEUDtBQUVIQyxNQUFBQSxNQUFNLEVBQUUsR0FGTDtBQUdIQyxNQUFBQSxNQUFNLEVBQUVKLEtBQUssQ0FBQ0ssT0FBTixDQUFjLENBQWQsQ0FITDtBQUlIQyxNQUFBQSxLQUFLLEVBQUVOLEtBQUssQ0FBQ0ssT0FBTixDQUFjLENBQWQ7QUFKSjtBQURnQyxHQUFMO0FBQUEsQ0FBaEIsQ0FBbEI7O0FBU2UsU0FBU0Usb0JBQVQsT0FBMEQ7QUFBQSxNQUExQkMsS0FBMEIsUUFBMUJBLEtBQTBCO0FBQUEsTUFBbkJDLElBQW1CLFFBQW5CQSxJQUFtQjtBQUFBLE1BQVZDLE1BQVU7O0FBQ3ZFLE1BQU1DLE9BQU8sR0FBR1osU0FBUyxFQUF6QjtBQUNBLFNBQ0ksZ0NBQUMsZUFBRDtBQUFLLElBQUEsU0FBUyxFQUFHWSxPQUFPLENBQUNWLEdBQXpCO0FBQStCLElBQUEsS0FBSyxFQUFHTztBQUF2QyxLQUFvREUsTUFBcEQsR0FDSUQsSUFESixDQURKO0FBS0Q7O0FBR0RGLG9CQUFvQixDQUFDSyxZQUFyQixHQUFvQztBQUNsQ0osRUFBQUEsS0FBSyxFQUFFO0FBRDJCLENBQXBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEZhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWInO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGZhYjoge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHpJbmRleDogXCI0XCIsXG4gICAgYm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIHJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZsb2F0aW5nQWN0aW9uQnV0dG9uKHsgY29sb3IsIGljb24sIC4uLm90aGVycyB9KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICAgIDxGYWIgY2xhc3NOYW1lPXsgY2xhc3Nlcy5mYWIgfSBjb2xvcj17IGNvbG9yIH0geyAuLi5vdGhlcnMgfT5cbiAgICAgICAgeyBpY29uIH1cbiAgICAgIDwvRmFiPlxuICApO1xufVxuXG5cbkZsb2F0aW5nQWN0aW9uQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29sb3I6IFwicHJpbWFyeVwiLFxufVxuIl19