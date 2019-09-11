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
      position: 'absolute',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbnB1dHMvZmxvYXRpbmdfYWN0aW9uX2J1dHRvbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJ0aGVtZSIsImZhYiIsInBvc2l0aW9uIiwiYm90dG9tIiwic3BhY2luZyIsInJpZ2h0IiwiRmxvYXRpbmdBY3Rpb25CdXR0b24iLCJjb2xvciIsImljb24iLCJvdGhlcnMiLCJjbGFzc2VzIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsd0JBQVcsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDckNDLElBQUFBLEdBQUcsRUFBRTtBQUNIQyxNQUFBQSxRQUFRLEVBQUUsVUFEUDtBQUVIQyxNQUFBQSxNQUFNLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsQ0FGTDtBQUdIQyxNQUFBQSxLQUFLLEVBQUVMLEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQ7QUFISjtBQURnQyxHQUFMO0FBQUEsQ0FBaEIsQ0FBbEI7O0FBUWUsU0FBU0Usb0JBQVQsT0FBMEQ7QUFBQSxNQUExQkMsS0FBMEIsUUFBMUJBLEtBQTBCO0FBQUEsTUFBbkJDLElBQW1CLFFBQW5CQSxJQUFtQjtBQUFBLE1BQVZDLE1BQVU7O0FBQ3ZFLE1BQU1DLE9BQU8sR0FBR1gsU0FBUyxFQUF6QjtBQUNBLFNBQ0ksZ0NBQUMsZUFBRDtBQUFLLElBQUEsU0FBUyxFQUFHVyxPQUFPLENBQUNULEdBQXpCO0FBQStCLElBQUEsS0FBSyxFQUFHTTtBQUF2QyxLQUFvREUsTUFBcEQsR0FDSUQsSUFESixDQURKO0FBS0Q7O0FBR0RGLG9CQUFvQixDQUFDSyxZQUFyQixHQUFvQztBQUNsQ0osRUFBQUEsS0FBSyxFQUFFO0FBRDJCLENBQXBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEZhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWInO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGZhYjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcbiAgICByaWdodDogdGhlbWUuc3BhY2luZygyKSxcbiAgfVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGbG9hdGluZ0FjdGlvbkJ1dHRvbih7IGNvbG9yLCBpY29uLCAuLi5vdGhlcnMgfSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiAoXG4gICAgICA8RmFiIGNsYXNzTmFtZT17IGNsYXNzZXMuZmFiIH0gY29sb3I9eyBjb2xvciB9IHsgLi4ub3RoZXJzIH0+XG4gICAgICAgIHsgaWNvbiB9XG4gICAgICA8L0ZhYj5cbiAgKTtcbn1cblxuXG5GbG9hdGluZ0FjdGlvbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbG9yOiBcInByaW1hcnlcIixcbn1cbiJdfQ==