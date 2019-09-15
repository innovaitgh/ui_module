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
      flexGrow: 1
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29sYmFyL2luZGV4LmpzIl0sIm5hbWVzIjpbIk15VG9vbGJhciIsIkFwcEJhckxlZnQiLCJUb29sQmFyUHJvcHMiLCJUaXRsZVByb3BzIiwiVHlwb2dyYXBoeVByb3BzIiwidGl0bGUiLCJTcGFjZXJQcm9wcyIsIkFjdGlvblByb3BzIiwiVG9vbEJhckFjdGlvbnMiLCJjbGFzc2VzIiwidXNlVG9vbGJhclN0eWxlcyIsInJvb3QiLCJzcGFjZXIiLCJhY3Rpb25zIiwiZGVmYXVsdFByb3BzIiwidmFyaWFudCIsInRoZW1lIiwicGFkZGluZ0xlZnQiLCJzcGFjaW5nIiwicGFkZGluZ1JpZ2h0IiwiZmxleEdyb3ciLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiZGlzcGxheSIsImZsZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRWUsU0FBU0EsU0FBVCxPQUErSDtBQUFBLE1BQTFHQyxVQUEwRyxRQUExR0EsVUFBMEc7QUFBQSxNQUE5RkMsWUFBOEYsUUFBOUZBLFlBQThGO0FBQUEsTUFBaEZDLFVBQWdGLFFBQWhGQSxVQUFnRjtBQUFBLE1BQXBFQyxlQUFvRSxRQUFwRUEsZUFBb0U7QUFBQSxNQUFuREMsS0FBbUQsUUFBbkRBLEtBQW1EO0FBQUEsTUFBNUNDLFdBQTRDLFFBQTVDQSxXQUE0QztBQUFBLE1BQS9CQyxXQUErQixRQUEvQkEsV0FBK0I7QUFBQSxNQUFsQkMsY0FBa0IsUUFBbEJBLGNBQWtCO0FBQzVJLE1BQU1DLE9BQU8sR0FBR0MsZ0JBQWdCLEVBQWhDO0FBQ0EsU0FDRSxnQ0FBQyxhQUFEO0FBQVMsSUFBQSxTQUFTLEVBQUtELE9BQU8sQ0FBQ0U7QUFBL0IsS0FBMkNULFlBQTNDLEdBRUlELFVBQVUsR0FDUkEsVUFEUSxHQUVSLElBSk4sRUFNRTtBQUFLLElBQUEsU0FBUyxFQUFLUSxPQUFPLENBQUNKO0FBQTNCLEtBQXdDRixVQUF4QyxHQUNFLGdDQUFDLGdCQUFELEVBQWlCQyxlQUFqQixFQUNJQyxLQURKLENBREYsQ0FORixFQVdFO0FBQUssSUFBQSxTQUFTLEVBQUtJLE9BQU8sQ0FBQ0c7QUFBM0IsS0FBeUNOLFdBQXpDLEVBWEYsRUFZRTtBQUFLLElBQUEsU0FBUyxFQUFLRyxPQUFPLENBQUNJO0FBQTNCLEtBQTBDTixXQUExQyxHQUVJQyxjQUFjLEdBQ1pBLGNBRFksR0FFWixJQUpOLENBWkYsQ0FERjtBQXNCRDs7QUFBQTs7QUFFRFIsU0FBUyxDQUFDYyxZQUFWLEdBQXlCLFlBQU07QUFDN0IsU0FDRTtBQUNFVixJQUFBQSxlQUFlLEVBQUU7QUFDZlcsTUFBQUEsT0FBTyxFQUFFO0FBRE07QUFEbkIsR0FERjtBQU9ELENBUkQ7O0FBWUEsSUFBTUwsZ0JBQWdCLEdBQUcsd0JBQVcsVUFBQU0sS0FBSztBQUFBLFNBQUs7QUFDNUNMLElBQUFBLElBQUksRUFBRTtBQUNKTSxNQUFBQSxXQUFXLEVBQUVELEtBQUssQ0FBQ0UsT0FBTixDQUFjLENBQWQsQ0FEVDtBQUVKQyxNQUFBQSxZQUFZLEVBQUVILEtBQUssQ0FBQ0UsT0FBTixDQUFjLENBQWQ7QUFGVixLQURzQztBQUs1Q04sSUFBQUEsTUFBTSxFQUFFO0FBQ05RLE1BQUFBLFFBQVEsRUFBRTtBQURKLEtBTG9DO0FBUTVDUCxJQUFBQSxPQUFPLEVBQUU7QUFDUFEsTUFBQUEsS0FBSyxFQUFFTCxLQUFLLENBQUNNLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQkMsU0FEbkI7QUFFUEMsTUFBQUEsT0FBTyxFQUFFO0FBRkYsS0FSbUM7QUFZNUNwQixJQUFBQSxLQUFLLEVBQUU7QUFDTHFCLE1BQUFBLElBQUksRUFBRTtBQUREO0FBWnFDLEdBQUw7QUFBQSxDQUFoQixDQUF6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBUb29sYmFyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlUb29sYmFyKHsgQXBwQmFyTGVmdCwgVG9vbEJhclByb3BzLCBUaXRsZVByb3BzLCBUeXBvZ3JhcGh5UHJvcHMsIHRpdGxlLCBTcGFjZXJQcm9wcywgQWN0aW9uUHJvcHMsIFRvb2xCYXJBY3Rpb25zIH0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVRvb2xiYXJTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8VG9vbGJhciBjbGFzc05hbWUgPSB7IGNsYXNzZXMucm9vdCB9IHsgLi4uVG9vbEJhclByb3BzIH0+XG4gICAgICB7XG4gICAgICAgIEFwcEJhckxlZnQgP1xuICAgICAgICAgIEFwcEJhckxlZnRcbiAgICAgICAgOiBudWxsXG4gICAgICB9XG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IHsgY2xhc3Nlcy50aXRsZSB9IHsgLi4uVGl0bGVQcm9wcyB9PlxuICAgICAgICA8VHlwb2dyYXBoeSB7IC4uLlR5cG9ncmFwaHlQcm9wcyB9PlxuICAgICAgICAgIHsgdGl0bGUgfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lID0geyBjbGFzc2VzLnNwYWNlciB9IHsgLi4uU3BhY2VyUHJvcHMgfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWUgPSB7IGNsYXNzZXMuYWN0aW9ucyB9IHsgLi4uQWN0aW9uUHJvcHMgfT5cbiAgICAgICAge1xuICAgICAgICAgIFRvb2xCYXJBY3Rpb25zID9cbiAgICAgICAgICAgIFRvb2xCYXJBY3Rpb25zXG4gICAgICAgICAgOiBudWxsXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvVG9vbGJhcj5cbiAgKTtcbn07XG5cbk15VG9vbGJhci5kZWZhdWx0UHJvcHMgPSAoKSA9PiB7XG4gIHJldHVybihcbiAgICB7XG4gICAgICBUeXBvZ3JhcGh5UHJvcHM6IHtcbiAgICAgICAgdmFyaWFudDogXCJoNlwiXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cblxuXG5jb25zdCB1c2VUb29sYmFyU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9LFxuICBzcGFjZXI6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZsZXg6ICcwIDAgYXV0bycsXG4gIH0sXG59KSk7XG4iXX0=