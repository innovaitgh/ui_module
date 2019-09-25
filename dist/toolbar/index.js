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

function DefaultSpacer() {
  var classes = useToolbarStyles();
  return _react["default"].createElement("div", {
    className: classes.spacer
  });
}

function MyToolbar(_ref) {
  var ToolbarLeft = _ref.ToolbarLeft,
      ToolbarLeftProps = _ref.ToolbarLeftProps,
      TitleProps = _ref.TitleProps,
      TypographyProps = _ref.TypographyProps,
      title = _ref.title,
      Spacer = _ref.Spacer,
      ToolbarRight = _ref.ToolbarRight,
      ToolbarRightProps = _ref.ToolbarRightProps;
  var classes = useToolbarStyles();
  return _react["default"].createElement(_core.Toolbar, _extends({
    className: classes.root
  }, ToolbarLeftProps), ToolbarLeft, _react["default"].createElement("div", _extends({
    className: classes.title
  }, TitleProps), _react["default"].createElement(_core.Typography, TypographyProps, title)), Spacer, _react["default"].createElement("div", _extends({
    className: classes.actions
  }, ToolbarRightProps), ToolbarRight));
}

;
MyToolbar.defaultProps = {
  TypographyProps: {
    variant: "h6"
  },
  Spacer: _react["default"].createElement(DefaultSpacer, null)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29sYmFyL2luZGV4LmpzIl0sIm5hbWVzIjpbIkRlZmF1bHRTcGFjZXIiLCJjbGFzc2VzIiwidXNlVG9vbGJhclN0eWxlcyIsInNwYWNlciIsIk15VG9vbGJhciIsIlRvb2xiYXJMZWZ0IiwiVG9vbGJhckxlZnRQcm9wcyIsIlRpdGxlUHJvcHMiLCJUeXBvZ3JhcGh5UHJvcHMiLCJ0aXRsZSIsIlNwYWNlciIsIlRvb2xiYXJSaWdodCIsIlRvb2xiYXJSaWdodFByb3BzIiwicm9vdCIsImFjdGlvbnMiLCJkZWZhdWx0UHJvcHMiLCJ2YXJpYW50IiwidGhlbWUiLCJwYWRkaW5nTGVmdCIsInNwYWNpbmciLCJwYWRkaW5nUmlnaHQiLCJmbGV4R3JvdyIsImRpc3BsYXkiLCJmbGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLFNBQVNBLGFBQVQsR0FBd0I7QUFDdEIsTUFBTUMsT0FBTyxHQUFHQyxnQkFBZ0IsRUFBaEM7QUFDQSxTQUNFO0FBQUssSUFBQSxTQUFTLEVBQUdELE9BQU8sQ0FBQ0U7QUFBekIsSUFERjtBQUdEOztBQUVjLFNBQVNDLFNBQVQsT0FBbUk7QUFBQSxNQUE5R0MsV0FBOEcsUUFBOUdBLFdBQThHO0FBQUEsTUFBakdDLGdCQUFpRyxRQUFqR0EsZ0JBQWlHO0FBQUEsTUFBL0VDLFVBQStFLFFBQS9FQSxVQUErRTtBQUFBLE1BQW5FQyxlQUFtRSxRQUFuRUEsZUFBbUU7QUFBQSxNQUFsREMsS0FBa0QsUUFBbERBLEtBQWtEO0FBQUEsTUFBM0NDLE1BQTJDLFFBQTNDQSxNQUEyQztBQUFBLE1BQW5DQyxZQUFtQyxRQUFuQ0EsWUFBbUM7QUFBQSxNQUFyQkMsaUJBQXFCLFFBQXJCQSxpQkFBcUI7QUFDaEosTUFBTVgsT0FBTyxHQUFHQyxnQkFBZ0IsRUFBaEM7QUFDQSxTQUNFLGdDQUFDLGFBQUQ7QUFBUyxJQUFBLFNBQVMsRUFBS0QsT0FBTyxDQUFDWTtBQUEvQixLQUEyQ1AsZ0JBQTNDLEdBQ0lELFdBREosRUFFRTtBQUFLLElBQUEsU0FBUyxFQUFLSixPQUFPLENBQUNRO0FBQTNCLEtBQXdDRixVQUF4QyxHQUNFLGdDQUFDLGdCQUFELEVBQWlCQyxlQUFqQixFQUNJQyxLQURKLENBREYsQ0FGRixFQU9JQyxNQVBKLEVBUUU7QUFBSyxJQUFBLFNBQVMsRUFBS1QsT0FBTyxDQUFDYTtBQUEzQixLQUEwQ0YsaUJBQTFDLEdBQ0lELFlBREosQ0FSRixDQURGO0FBY0Q7O0FBQUE7QUFFRFAsU0FBUyxDQUFDVyxZQUFWLEdBQXlCO0FBQ3ZCUCxFQUFBQSxlQUFlLEVBQUU7QUFDZlEsSUFBQUEsT0FBTyxFQUFFO0FBRE0sR0FETTtBQUl2Qk4sRUFBQUEsTUFBTSxFQUFFLGdDQUFDLGFBQUQ7QUFKZSxDQUF6QjtBQVNBLElBQU1SLGdCQUFnQixHQUFHLHdCQUFXLFVBQUFlLEtBQUs7QUFBQSxTQUFLO0FBQzVDSixJQUFBQSxJQUFJLEVBQUU7QUFDSkssTUFBQUEsV0FBVyxFQUFFRCxLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkLENBRFQ7QUFFSkMsTUFBQUEsWUFBWSxFQUFFSCxLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkO0FBRlYsS0FEc0M7QUFLNUNoQixJQUFBQSxNQUFNLEVBQUU7QUFDTmtCLE1BQUFBLFFBQVEsRUFBRTtBQURKLEtBTG9DO0FBUTVDUCxJQUFBQSxPQUFPLEVBQUU7QUFDUFEsTUFBQUEsT0FBTyxFQUFFO0FBREYsS0FSbUM7QUFXNUNiLElBQUFBLEtBQUssRUFBRTtBQUNMYyxNQUFBQSxJQUFJLEVBQUU7QUFERDtBQVhxQyxHQUFMO0FBQUEsQ0FBaEIsQ0FBekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVHlwb2dyYXBoeSwgVG9vbGJhciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmZ1bmN0aW9uIERlZmF1bHRTcGFjZXIoKXtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVRvb2xiYXJTdHlsZXMoKTtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3Nlcy5zcGFjZXIgfSAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15VG9vbGJhcih7IFRvb2xiYXJMZWZ0LCBUb29sYmFyTGVmdFByb3BzLCBUaXRsZVByb3BzLCBUeXBvZ3JhcGh5UHJvcHMsIHRpdGxlLCBTcGFjZXIsIFRvb2xiYXJSaWdodCwgVG9vbGJhclJpZ2h0UHJvcHMgfSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlVG9vbGJhclN0eWxlcygpO1xuICByZXR1cm4gKFxuICAgIDxUb29sYmFyIGNsYXNzTmFtZSA9IHsgY2xhc3Nlcy5yb290IH0geyAuLi5Ub29sYmFyTGVmdFByb3BzIH0+XG4gICAgICB7IFRvb2xiYXJMZWZ0IH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lID0geyBjbGFzc2VzLnRpdGxlIH0geyAuLi5UaXRsZVByb3BzIH0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHsgLi4uVHlwb2dyYXBoeVByb3BzIH0+XG4gICAgICAgICAgeyB0aXRsZSB9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvZGl2PlxuICAgICAgeyBTcGFjZXIgfVxuICAgICAgPGRpdiBjbGFzc05hbWUgPSB7IGNsYXNzZXMuYWN0aW9ucyB9IHsgLi4uVG9vbGJhclJpZ2h0UHJvcHMgfT5cbiAgICAgICAgeyBUb29sYmFyUmlnaHQgfVxuICAgICAgPC9kaXY+XG4gICAgPC9Ub29sYmFyPlxuICApO1xufTtcblxuTXlUb29sYmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgVHlwb2dyYXBoeVByb3BzOiB7XG4gICAgdmFyaWFudDogXCJoNlwiXG4gIH0sXG4gIFNwYWNlcjogPERlZmF1bHRTcGFjZXIgLz5cbn1cblxuXG5cbmNvbnN0IHVzZVRvb2xiYXJTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZygyKSxcbiAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXG4gIH0sXG4gIHNwYWNlcjoge1xuICAgIGZsZXhHcm93OiAxLFxuICB9LFxuICBhY3Rpb25zOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZmxleDogJzAgMCBhdXRvJyxcbiAgfSxcbn0pKTtcbiJdfQ==