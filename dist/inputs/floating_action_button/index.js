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