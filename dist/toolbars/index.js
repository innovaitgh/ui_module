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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29sYmFycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJEZWZhdWx0U3BhY2VyIiwiY2xhc3NlcyIsInVzZVRvb2xiYXJTdHlsZXMiLCJzcGFjZXIiLCJNeVRvb2xiYXIiLCJUb29sYmFyTGVmdCIsIlRvb2xiYXJMZWZ0UHJvcHMiLCJUaXRsZVByb3BzIiwiVHlwb2dyYXBoeVByb3BzIiwidGl0bGUiLCJTcGFjZXIiLCJUb29sYmFyUmlnaHQiLCJUb29sYmFyUmlnaHRQcm9wcyIsInJvb3QiLCJhY3Rpb25zIiwiZGVmYXVsdFByb3BzIiwidmFyaWFudCIsInRoZW1lIiwicGFkZGluZ0xlZnQiLCJzcGFjaW5nIiwicGFkZGluZ1JpZ2h0IiwiZmxleEdyb3ciLCJkaXNwbGF5IiwiZmxleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxTQUFTQSxhQUFULEdBQXdCO0FBQ3RCLE1BQU1DLE9BQU8sR0FBR0MsZ0JBQWdCLEVBQWhDO0FBQ0EsU0FDRTtBQUFLLElBQUEsU0FBUyxFQUFHRCxPQUFPLENBQUNFO0FBQXpCLElBREY7QUFHRDs7QUFFYyxTQUFTQyxTQUFULE9BQW1JO0FBQUEsTUFBOUdDLFdBQThHLFFBQTlHQSxXQUE4RztBQUFBLE1BQWpHQyxnQkFBaUcsUUFBakdBLGdCQUFpRztBQUFBLE1BQS9FQyxVQUErRSxRQUEvRUEsVUFBK0U7QUFBQSxNQUFuRUMsZUFBbUUsUUFBbkVBLGVBQW1FO0FBQUEsTUFBbERDLEtBQWtELFFBQWxEQSxLQUFrRDtBQUFBLE1BQTNDQyxNQUEyQyxRQUEzQ0EsTUFBMkM7QUFBQSxNQUFuQ0MsWUFBbUMsUUFBbkNBLFlBQW1DO0FBQUEsTUFBckJDLGlCQUFxQixRQUFyQkEsaUJBQXFCO0FBQ2hKLE1BQU1YLE9BQU8sR0FBR0MsZ0JBQWdCLEVBQWhDO0FBQ0EsU0FDRSxnQ0FBQyxhQUFEO0FBQVMsSUFBQSxTQUFTLEVBQUtELE9BQU8sQ0FBQ1k7QUFBL0IsS0FBMkNQLGdCQUEzQyxHQUNJRCxXQURKLEVBRUU7QUFBSyxJQUFBLFNBQVMsRUFBS0osT0FBTyxDQUFDUTtBQUEzQixLQUF3Q0YsVUFBeEMsR0FDRSxnQ0FBQyxnQkFBRCxFQUFpQkMsZUFBakIsRUFDSUMsS0FESixDQURGLENBRkYsRUFPSUMsTUFQSixFQVFFO0FBQUssSUFBQSxTQUFTLEVBQUtULE9BQU8sQ0FBQ2E7QUFBM0IsS0FBMENGLGlCQUExQyxHQUNJRCxZQURKLENBUkYsQ0FERjtBQWNEOztBQUFBO0FBRURQLFNBQVMsQ0FBQ1csWUFBVixHQUF5QjtBQUN2QlAsRUFBQUEsZUFBZSxFQUFFO0FBQ2ZRLElBQUFBLE9BQU8sRUFBRTtBQURNLEdBRE07QUFJdkJOLEVBQUFBLE1BQU0sRUFBRSxnQ0FBQyxhQUFEO0FBSmUsQ0FBekI7QUFTQSxJQUFNUixnQkFBZ0IsR0FBRyx3QkFBVyxVQUFBZSxLQUFLO0FBQUEsU0FBSztBQUM1Q0osSUFBQUEsSUFBSSxFQUFFO0FBQ0pLLE1BQUFBLFdBQVcsRUFBRUQsS0FBSyxDQUFDRSxPQUFOLENBQWMsQ0FBZCxDQURUO0FBRUpDLE1BQUFBLFlBQVksRUFBRUgsS0FBSyxDQUFDRSxPQUFOLENBQWMsQ0FBZDtBQUZWLEtBRHNDO0FBSzVDaEIsSUFBQUEsTUFBTSxFQUFFO0FBQ05rQixNQUFBQSxRQUFRLEVBQUU7QUFESixLQUxvQztBQVE1Q1AsSUFBQUEsT0FBTyxFQUFFO0FBQ1BRLE1BQUFBLE9BQU8sRUFBRTtBQURGLEtBUm1DO0FBVzVDYixJQUFBQSxLQUFLLEVBQUU7QUFDTGMsTUFBQUEsSUFBSSxFQUFFO0FBREQ7QUFYcUMsR0FBTDtBQUFBLENBQWhCLENBQXpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFR5cG9ncmFwaHksIFRvb2xiYXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5mdW5jdGlvbiBEZWZhdWx0U3BhY2VyKCl7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VUb29sYmFyU3R5bGVzKCk7XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMuc3BhY2VyIH0gLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeVRvb2xiYXIoeyBUb29sYmFyTGVmdCwgVG9vbGJhckxlZnRQcm9wcywgVGl0bGVQcm9wcywgVHlwb2dyYXBoeVByb3BzLCB0aXRsZSwgU3BhY2VyLCBUb29sYmFyUmlnaHQsIFRvb2xiYXJSaWdodFByb3BzIH0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVRvb2xiYXJTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8VG9vbGJhciBjbGFzc05hbWUgPSB7IGNsYXNzZXMucm9vdCB9IHsgLi4uVG9vbGJhckxlZnRQcm9wcyB9PlxuICAgICAgeyBUb29sYmFyTGVmdCB9XG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IHsgY2xhc3Nlcy50aXRsZSB9IHsgLi4uVGl0bGVQcm9wcyB9PlxuICAgICAgICA8VHlwb2dyYXBoeSB7IC4uLlR5cG9ncmFwaHlQcm9wcyB9PlxuICAgICAgICAgIHsgdGl0bGUgfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsgU3BhY2VyIH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lID0geyBjbGFzc2VzLmFjdGlvbnMgfSB7IC4uLlRvb2xiYXJSaWdodFByb3BzIH0+XG4gICAgICAgIHsgVG9vbGJhclJpZ2h0IH1cbiAgICAgIDwvZGl2PlxuICAgIDwvVG9vbGJhcj5cbiAgKTtcbn07XG5cbk15VG9vbGJhci5kZWZhdWx0UHJvcHMgPSB7XG4gIFR5cG9ncmFwaHlQcm9wczoge1xuICAgIHZhcmlhbnQ6IFwiaDZcIlxuICB9LFxuICBTcGFjZXI6IDxEZWZhdWx0U3BhY2VyIC8+XG59XG5cblxuXG5jb25zdCB1c2VUb29sYmFyU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9LFxuICBzcGFjZXI6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZsZXg6ICcwIDAgYXV0bycsXG4gIH0sXG59KSk7XG4iXX0=