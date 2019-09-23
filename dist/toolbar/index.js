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
      display: "flex"
    },
    title: {
      flex: '0 0 auto'
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29sYmFyL2luZGV4LmpzIl0sIm5hbWVzIjpbIk15VG9vbGJhciIsIkFwcEJhckxlZnQiLCJUb29sQmFyUHJvcHMiLCJUaXRsZVByb3BzIiwiVHlwb2dyYXBoeVByb3BzIiwidGl0bGUiLCJTcGFjZXJQcm9wcyIsIkFjdGlvblByb3BzIiwiVG9vbEJhckFjdGlvbnMiLCJjbGFzc2VzIiwidXNlVG9vbGJhclN0eWxlcyIsInJvb3QiLCJzcGFjZXIiLCJhY3Rpb25zIiwiZGVmYXVsdFByb3BzIiwidmFyaWFudCIsInRoZW1lIiwicGFkZGluZ0xlZnQiLCJzcGFjaW5nIiwicGFkZGluZ1JpZ2h0IiwiZmxleEdyb3ciLCJkaXNwbGF5IiwiZmxleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFZSxTQUFTQSxTQUFULE9BQStIO0FBQUEsTUFBMUdDLFVBQTBHLFFBQTFHQSxVQUEwRztBQUFBLE1BQTlGQyxZQUE4RixRQUE5RkEsWUFBOEY7QUFBQSxNQUFoRkMsVUFBZ0YsUUFBaEZBLFVBQWdGO0FBQUEsTUFBcEVDLGVBQW9FLFFBQXBFQSxlQUFvRTtBQUFBLE1BQW5EQyxLQUFtRCxRQUFuREEsS0FBbUQ7QUFBQSxNQUE1Q0MsV0FBNEMsUUFBNUNBLFdBQTRDO0FBQUEsTUFBL0JDLFdBQStCLFFBQS9CQSxXQUErQjtBQUFBLE1BQWxCQyxjQUFrQixRQUFsQkEsY0FBa0I7QUFDNUksTUFBTUMsT0FBTyxHQUFHQyxnQkFBZ0IsRUFBaEM7QUFDQSxTQUNFLGdDQUFDLGFBQUQ7QUFBUyxJQUFBLFNBQVMsRUFBS0QsT0FBTyxDQUFDRTtBQUEvQixLQUEyQ1QsWUFBM0MsR0FFSUQsVUFBVSxHQUNSQSxVQURRLEdBRVIsSUFKTixFQU1FO0FBQUssSUFBQSxTQUFTLEVBQUtRLE9BQU8sQ0FBQ0o7QUFBM0IsS0FBd0NGLFVBQXhDLEdBQ0UsZ0NBQUMsZ0JBQUQsRUFBaUJDLGVBQWpCLEVBQ0lDLEtBREosQ0FERixDQU5GLEVBV0U7QUFBSyxJQUFBLFNBQVMsRUFBS0ksT0FBTyxDQUFDRztBQUEzQixLQUF5Q04sV0FBekMsRUFYRixFQVlFO0FBQUssSUFBQSxTQUFTLEVBQUtHLE9BQU8sQ0FBQ0k7QUFBM0IsS0FBMENOLFdBQTFDLEdBRUlDLGNBQWMsR0FDWkEsY0FEWSxHQUVaLElBSk4sQ0FaRixDQURGO0FBc0JEOztBQUFBOztBQUVEUixTQUFTLENBQUNjLFlBQVYsR0FBeUIsWUFBTTtBQUM3QixTQUNFO0FBQ0VWLElBQUFBLGVBQWUsRUFBRTtBQUNmVyxNQUFBQSxPQUFPLEVBQUU7QUFETTtBQURuQixHQURGO0FBT0QsQ0FSRDs7QUFZQSxJQUFNTCxnQkFBZ0IsR0FBRyx3QkFBVyxVQUFBTSxLQUFLO0FBQUEsU0FBSztBQUM1Q0wsSUFBQUEsSUFBSSxFQUFFO0FBQ0pNLE1BQUFBLFdBQVcsRUFBRUQsS0FBSyxDQUFDRSxPQUFOLENBQWMsQ0FBZCxDQURUO0FBRUpDLE1BQUFBLFlBQVksRUFBRUgsS0FBSyxDQUFDRSxPQUFOLENBQWMsQ0FBZDtBQUZWLEtBRHNDO0FBSzVDTixJQUFBQSxNQUFNLEVBQUU7QUFDTlEsTUFBQUEsUUFBUSxFQUFFO0FBREosS0FMb0M7QUFRNUNQLElBQUFBLE9BQU8sRUFBRTtBQUNQUSxNQUFBQSxPQUFPLEVBQUU7QUFERixLQVJtQztBQVc1Q2hCLElBQUFBLEtBQUssRUFBRTtBQUNMaUIsTUFBQUEsSUFBSSxFQUFFO0FBREQ7QUFYcUMsR0FBTDtBQUFBLENBQWhCLENBQXpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFR5cG9ncmFwaHksIFRvb2xiYXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeVRvb2xiYXIoeyBBcHBCYXJMZWZ0LCBUb29sQmFyUHJvcHMsIFRpdGxlUHJvcHMsIFR5cG9ncmFwaHlQcm9wcywgdGl0bGUsIFNwYWNlclByb3BzLCBBY3Rpb25Qcm9wcywgVG9vbEJhckFjdGlvbnMgfSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlVG9vbGJhclN0eWxlcygpO1xuICByZXR1cm4gKFxuICAgIDxUb29sYmFyIGNsYXNzTmFtZSA9IHsgY2xhc3Nlcy5yb290IH0geyAuLi5Ub29sQmFyUHJvcHMgfT5cbiAgICAgIHtcbiAgICAgICAgQXBwQmFyTGVmdCA/XG4gICAgICAgICAgQXBwQmFyTGVmdFxuICAgICAgICA6IG51bGxcbiAgICAgIH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lID0geyBjbGFzc2VzLnRpdGxlIH0geyAuLi5UaXRsZVByb3BzIH0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHsgLi4uVHlwb2dyYXBoeVByb3BzIH0+XG4gICAgICAgICAgeyB0aXRsZSB9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWUgPSB7IGNsYXNzZXMuc3BhY2VyIH0geyAuLi5TcGFjZXJQcm9wcyB9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IHsgY2xhc3Nlcy5hY3Rpb25zIH0geyAuLi5BY3Rpb25Qcm9wcyB9PlxuICAgICAgICB7XG4gICAgICAgICAgVG9vbEJhckFjdGlvbnMgP1xuICAgICAgICAgICAgVG9vbEJhckFjdGlvbnNcbiAgICAgICAgICA6IG51bGxcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9Ub29sYmFyPlxuICApO1xufTtcblxuTXlUb29sYmFyLmRlZmF1bHRQcm9wcyA9ICgpID0+IHtcbiAgcmV0dXJuKFxuICAgIHtcbiAgICAgIFR5cG9ncmFwaHlQcm9wczoge1xuICAgICAgICB2YXJpYW50OiBcImg2XCJcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuXG5cbmNvbnN0IHVzZVRvb2xiYXJTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZygyKSxcbiAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXG4gIH0sXG4gIHNwYWNlcjoge1xuICAgIGZsZXhHcm93OiAxLFxuICB9LFxuICBhY3Rpb25zOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZmxleDogJzAgMCBhdXRvJyxcbiAgfSxcbn0pKTtcbiJdfQ==