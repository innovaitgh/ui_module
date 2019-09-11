"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MainGridContainer;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function MainGridContainer(_ref) {
  var children = _ref.children,
      MainGridContainerProps = _ref.MainGridContainerProps,
      BarHeaderProps = _ref.BarHeaderProps;
  var classes = useStyles();
  return _react["default"].createElement(_core.Grid, MainGridContainerProps, _react["default"].createElement("div", _extends({
    className: classes.drawerHeader
  }, BarHeaderProps)), children);
}

MainGridContainer.defaultProps = {
  MainGridContainerProps: {
    justify: "center",
    align: "center",
    container: true
  },
  BarHeaderProps: {}
};
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    drawerHeader: _objectSpread({
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1)
    }, theme.mixins.toolbar, {
      justifyContent: 'flex-end'
    })
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYWluX2dyaWRfY29udGFpbmVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIk1haW5HcmlkQ29udGFpbmVyIiwiY2hpbGRyZW4iLCJNYWluR3JpZENvbnRhaW5lclByb3BzIiwiQmFySGVhZGVyUHJvcHMiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwiZHJhd2VySGVhZGVyIiwiZGVmYXVsdFByb3BzIiwianVzdGlmeSIsImFsaWduIiwiY29udGFpbmVyIiwidGhlbWUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJzcGFjaW5nIiwibWl4aW5zIiwidG9vbGJhciIsImp1c3RpZnlDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVlLFNBQVNBLGlCQUFULE9BQWdGO0FBQUEsTUFBbkRDLFFBQW1ELFFBQW5EQSxRQUFtRDtBQUFBLE1BQXpDQyxzQkFBeUMsUUFBekNBLHNCQUF5QztBQUFBLE1BQWpCQyxjQUFpQixRQUFqQkEsY0FBaUI7QUFDN0YsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBQ0EsU0FDRSxnQ0FBQyxVQUFELEVBQVdILHNCQUFYLEVBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBR0UsT0FBTyxDQUFDRTtBQUF6QixLQUE2Q0gsY0FBN0MsRUFERixFQUVJRixRQUZKLENBREY7QUFNRDs7QUFFREQsaUJBQWlCLENBQUNPLFlBQWxCLEdBQWlDO0FBQy9CTCxFQUFBQSxzQkFBc0IsRUFBRTtBQUN0Qk0sSUFBQUEsT0FBTyxFQUFFLFFBRGE7QUFFdEJDLElBQUFBLEtBQUssRUFBRSxRQUZlO0FBR3RCQyxJQUFBQSxTQUFTLEVBQUU7QUFIVyxHQURPO0FBTS9CUCxFQUFBQSxjQUFjLEVBQUU7QUFOZSxDQUFqQztBQVdBLElBQU1FLFNBQVMsR0FBRyx3QkFBVyxVQUFBTSxLQUFLO0FBQUEsU0FBSztBQUNyQ0wsSUFBQUEsWUFBWTtBQUNWTSxNQUFBQSxPQUFPLEVBQUUsTUFEQztBQUVWQyxNQUFBQSxVQUFVLEVBQUUsUUFGRjtBQUdWQyxNQUFBQSxPQUFPLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakI7QUFIQyxPQUlQSixLQUFLLENBQUNLLE1BQU4sQ0FBYUMsT0FKTjtBQUtWQyxNQUFBQSxjQUFjLEVBQUU7QUFMTjtBQUR5QixHQUFMO0FBQUEsQ0FBaEIsQ0FBbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHcmlkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbkdyaWRDb250YWluZXIoeyBjaGlsZHJlbiwgTWFpbkdyaWRDb250YWluZXJQcm9wcywgQmFySGVhZGVyUHJvcHMgfSl7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuKFxuICAgIDxHcmlkIHsgLi4uTWFpbkdyaWRDb250YWluZXJQcm9wcyB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzLmRyYXdlckhlYWRlciB9IHsgLi4uQmFySGVhZGVyUHJvcHMgfSAvPlxuICAgICAgeyBjaGlsZHJlbiB9XG4gICAgPC9HcmlkPlxuICApXG59XG5cbk1haW5HcmlkQ29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgTWFpbkdyaWRDb250YWluZXJQcm9wczoge1xuICAgIGp1c3RpZnk6IFwiY2VudGVyXCIsXG4gICAgYWxpZ246IFwiY2VudGVyXCIsXG4gICAgY29udGFpbmVyOiB0cnVlXG4gIH0sXG4gIEJhckhlYWRlclByb3BzOiB7XG5cbiAgfVxufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGRyYXdlckhlYWRlcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDEpLFxuICAgIC4uLnRoZW1lLm1peGlucy50b29sYmFyLFxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuICB9LFxufSkpO1xuIl19