"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CurrentUserNav;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _go = _interopRequireDefault(require("../go"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var avatarStyles = (0, _styles.makeStyles)({
  avatar: {
    width: 30,
    height: 30
  }
});

function CurrentUserNav(_ref) {
  var currentUser = _ref.currentUser;
  var classes = avatarStyles();

  if (currentUser) {
    var name = currentUser.name,
        avatar = currentUser.avatar,
        url = currentUser.url;
    return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_core.IconButton, {
      component: _go["default"],
      to: url,
      external: true
    }, _react["default"].createElement(_core.Avatar, {
      alt: name,
      src: "https://auth.innovaitgh.com".concat(avatar.url),
      className: classes.avatar
    })));
  }

  return null;
}