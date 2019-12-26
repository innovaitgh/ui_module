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