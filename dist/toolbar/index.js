"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MyToolbar;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function MyToolbar(_ref) {
  var AppBarLeft = _ref.AppBarLeft,
      ToolBarProps = _ref.ToolBarProps,
      TitleProps = _ref.TitleProps,
      TypographyProps = _ref.TypographyProps,
      title = _ref.title,
      SpacerProps = _ref.SpacerProps,
      ActionProps = _ref.ActionProps,
      ToolBarActions = _ref.ToolBarActions;
  var classes = useToolbarStyles();
  return _react["default"].createElement(_core.Toolbar, _extends({
    className: classes.root
  }, ToolBarProps), AppBarLeft ? AppBarLeft : null, _react["default"].createElement("div", _extends({
    className: classes.title
  }, TitleProps), _react["default"].createElement(_core.Typography, TypographyProps, title)), _react["default"].createElement("div", _extends({
    className: classes.spacer
  }, SpacerProps)), _react["default"].createElement("div", _extends({
    className: classes.actions
  }, ActionProps), ToolBarActions ? ToolBarActions : null));
}

;

MyToolbar.defaultProps = function () {
  return {
    TypographyProps: {
      variant: "h6"
    }
  };
};

var useToolbarStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1)
    },
    spacer: {
      flex: '1 1 100%'
    },
    actions: {
      color: theme.palette.text.secondary,
      display: "flex"
    },
    title: {
      flex: '0 0 auto'
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29sYmFyL2luZGV4LmpzIl0sIm5hbWVzIjpbIk15VG9vbGJhciIsIkFwcEJhckxlZnQiLCJUb29sQmFyUHJvcHMiLCJUaXRsZVByb3BzIiwiVHlwb2dyYXBoeVByb3BzIiwidGl0bGUiLCJTcGFjZXJQcm9wcyIsIkFjdGlvblByb3BzIiwiVG9vbEJhckFjdGlvbnMiLCJjbGFzc2VzIiwidXNlVG9vbGJhclN0eWxlcyIsInJvb3QiLCJzcGFjZXIiLCJhY3Rpb25zIiwiZGVmYXVsdFByb3BzIiwidmFyaWFudCIsInRoZW1lIiwicGFkZGluZ0xlZnQiLCJzcGFjaW5nIiwicGFkZGluZ1JpZ2h0IiwiZmxleCIsImNvbG9yIiwicGFsZXR0ZSIsInRleHQiLCJzZWNvbmRhcnkiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVlLFNBQVNBLFNBQVQsT0FBK0g7QUFBQSxNQUExR0MsVUFBMEcsUUFBMUdBLFVBQTBHO0FBQUEsTUFBOUZDLFlBQThGLFFBQTlGQSxZQUE4RjtBQUFBLE1BQWhGQyxVQUFnRixRQUFoRkEsVUFBZ0Y7QUFBQSxNQUFwRUMsZUFBb0UsUUFBcEVBLGVBQW9FO0FBQUEsTUFBbkRDLEtBQW1ELFFBQW5EQSxLQUFtRDtBQUFBLE1BQTVDQyxXQUE0QyxRQUE1Q0EsV0FBNEM7QUFBQSxNQUEvQkMsV0FBK0IsUUFBL0JBLFdBQStCO0FBQUEsTUFBbEJDLGNBQWtCLFFBQWxCQSxjQUFrQjtBQUM1SSxNQUFNQyxPQUFPLEdBQUdDLGdCQUFnQixFQUFoQztBQUNBLFNBQ0UsZ0NBQUMsYUFBRDtBQUFTLElBQUEsU0FBUyxFQUFLRCxPQUFPLENBQUNFO0FBQS9CLEtBQTJDVCxZQUEzQyxHQUVJRCxVQUFVLEdBQ1JBLFVBRFEsR0FFUixJQUpOLEVBTUU7QUFBSyxJQUFBLFNBQVMsRUFBS1EsT0FBTyxDQUFDSjtBQUEzQixLQUF3Q0YsVUFBeEMsR0FDRSxnQ0FBQyxnQkFBRCxFQUFpQkMsZUFBakIsRUFDSUMsS0FESixDQURGLENBTkYsRUFXRTtBQUFLLElBQUEsU0FBUyxFQUFLSSxPQUFPLENBQUNHO0FBQTNCLEtBQXlDTixXQUF6QyxFQVhGLEVBWUU7QUFBSyxJQUFBLFNBQVMsRUFBS0csT0FBTyxDQUFDSTtBQUEzQixLQUEwQ04sV0FBMUMsR0FFSUMsY0FBYyxHQUNaQSxjQURZLEdBRVosSUFKTixDQVpGLENBREY7QUFzQkQ7O0FBQUE7O0FBRURSLFNBQVMsQ0FBQ2MsWUFBVixHQUF5QixZQUFNO0FBQzdCLFNBQ0U7QUFDRVYsSUFBQUEsZUFBZSxFQUFFO0FBQ2ZXLE1BQUFBLE9BQU8sRUFBRTtBQURNO0FBRG5CLEdBREY7QUFPRCxDQVJEOztBQVlBLElBQU1MLGdCQUFnQixHQUFHLHdCQUFXLFVBQUFNLEtBQUs7QUFBQSxTQUFLO0FBQzVDTCxJQUFBQSxJQUFJLEVBQUU7QUFDSk0sTUFBQUEsV0FBVyxFQUFFRCxLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkLENBRFQ7QUFFSkMsTUFBQUEsWUFBWSxFQUFFSCxLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkO0FBRlYsS0FEc0M7QUFLNUNOLElBQUFBLE1BQU0sRUFBRTtBQUNOUSxNQUFBQSxJQUFJLEVBQUU7QUFEQSxLQUxvQztBQVE1Q1AsSUFBQUEsT0FBTyxFQUFFO0FBQ1BRLE1BQUFBLEtBQUssRUFBRUwsS0FBSyxDQUFDTSxPQUFOLENBQWNDLElBQWQsQ0FBbUJDLFNBRG5CO0FBRVBDLE1BQUFBLE9BQU8sRUFBRTtBQUZGLEtBUm1DO0FBWTVDcEIsSUFBQUEsS0FBSyxFQUFFO0FBQ0xlLE1BQUFBLElBQUksRUFBRTtBQUREO0FBWnFDLEdBQUw7QUFBQSxDQUFoQixDQUF6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBUb29sYmFyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlUb29sYmFyKHsgQXBwQmFyTGVmdCwgVG9vbEJhclByb3BzLCBUaXRsZVByb3BzLCBUeXBvZ3JhcGh5UHJvcHMsIHRpdGxlLCBTcGFjZXJQcm9wcywgQWN0aW9uUHJvcHMsIFRvb2xCYXJBY3Rpb25zIH0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVRvb2xiYXJTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8VG9vbGJhciBjbGFzc05hbWUgPSB7IGNsYXNzZXMucm9vdCB9IHsgLi4uVG9vbEJhclByb3BzIH0+XG4gICAgICB7XG4gICAgICAgIEFwcEJhckxlZnQgP1xuICAgICAgICAgIEFwcEJhckxlZnRcbiAgICAgICAgOiBudWxsXG4gICAgICB9XG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IHsgY2xhc3Nlcy50aXRsZSB9IHsgLi4uVGl0bGVQcm9wcyB9PlxuICAgICAgICA8VHlwb2dyYXBoeSB7IC4uLlR5cG9ncmFwaHlQcm9wcyB9PlxuICAgICAgICAgIHsgdGl0bGUgfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lID0geyBjbGFzc2VzLnNwYWNlciB9IHsgLi4uU3BhY2VyUHJvcHMgfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWUgPSB7IGNsYXNzZXMuYWN0aW9ucyB9IHsgLi4uQWN0aW9uUHJvcHMgfT5cbiAgICAgICAge1xuICAgICAgICAgIFRvb2xCYXJBY3Rpb25zID9cbiAgICAgICAgICAgIFRvb2xCYXJBY3Rpb25zXG4gICAgICAgICAgOiBudWxsXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvVG9vbGJhcj5cbiAgKTtcbn07XG5cbk15VG9vbGJhci5kZWZhdWx0UHJvcHMgPSAoKSA9PiB7XG4gIHJldHVybihcbiAgICB7XG4gICAgICBUeXBvZ3JhcGh5UHJvcHM6IHtcbiAgICAgICAgdmFyaWFudDogXCJoNlwiXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cblxuXG5jb25zdCB1c2VUb29sYmFyU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9LFxuICBzcGFjZXI6IHtcbiAgICBmbGV4OiAnMSAxIDEwMCUnLFxuICB9LFxuICBhY3Rpb25zOiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZmxleDogJzAgMCBhdXRvJyxcbiAgfSxcbn0pKTtcbiJdfQ==