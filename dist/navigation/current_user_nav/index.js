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
      src: avatar.url,
      className: classes.avatar
    })));
  }

  return null;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9uYXZpZ2F0aW9uL2N1cnJlbnRfdXNlcl9uYXYvaW5kZXguanMiXSwibmFtZXMiOlsiYXZhdGFyU3R5bGVzIiwiYXZhdGFyIiwid2lkdGgiLCJoZWlnaHQiLCJDdXJyZW50VXNlck5hdiIsImN1cnJlbnRVc2VyIiwiY2xhc3NlcyIsIm5hbWUiLCJ1cmwiLCJHbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLHdCQUFXO0FBQzlCQyxFQUFBQSxNQUFNLEVBQUU7QUFDTkMsSUFBQUEsS0FBSyxFQUFFLEVBREQ7QUFFTkMsSUFBQUEsTUFBTSxFQUFFO0FBRkY7QUFEc0IsQ0FBWCxDQUFyQjs7QUFPZSxTQUFTQyxjQUFULE9BQXdDO0FBQUEsTUFBZEMsV0FBYyxRQUFkQSxXQUFjO0FBQ3JELE1BQU1DLE9BQU8sR0FBR04sWUFBWSxFQUE1Qjs7QUFDQSxNQUFHSyxXQUFILEVBQWU7QUFBQSxRQUNMRSxJQURLLEdBQ2lCRixXQURqQixDQUNMRSxJQURLO0FBQUEsUUFDQ04sTUFERCxHQUNpQkksV0FEakIsQ0FDQ0osTUFERDtBQUFBLFFBQ1NPLEdBRFQsR0FDaUJILFdBRGpCLENBQ1NHLEdBRFQ7QUFFYixXQUNFLGdDQUFDLGlCQUFELENBQU8sUUFBUCxRQUNFLGdDQUFDLGdCQUFEO0FBQVksTUFBQSxTQUFTLEVBQUdDLGNBQXhCO0FBQTZCLE1BQUEsRUFBRSxFQUFHRCxHQUFsQztBQUF3QyxNQUFBLFFBQVEsRUFBRztBQUFuRCxPQUNFLGdDQUFDLFlBQUQ7QUFBUSxNQUFBLEdBQUcsRUFBR0QsSUFBZDtBQUFxQixNQUFBLEdBQUcsRUFBR04sTUFBTSxDQUFDTyxHQUFsQztBQUF3QyxNQUFBLFNBQVMsRUFBR0YsT0FBTyxDQUFDTDtBQUE1RCxNQURGLENBREYsQ0FERjtBQU9EOztBQUNELFNBQU8sSUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEljb25CdXR0b24sIEF2YXRhciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgR28gZnJvbSBcIi4uL2dvXCI7XG5cbmNvbnN0IGF2YXRhclN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICBhdmF0YXI6IHtcbiAgICB3aWR0aDogMzAsXG4gICAgaGVpZ2h0OiAzMFxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VycmVudFVzZXJOYXYoeyBjdXJyZW50VXNlciB9KXtcbiAgY29uc3QgY2xhc3NlcyA9IGF2YXRhclN0eWxlcygpO1xuICBpZihjdXJyZW50VXNlcil7XG4gICAgY29uc3QgeyBuYW1lLCBhdmF0YXIsIHVybCB9ID0gY3VycmVudFVzZXI7XG4gICAgcmV0dXJuKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8SWNvbkJ1dHRvbiBjb21wb25lbnQ9eyBHbyB9IHRvPXsgdXJsIH0gZXh0ZXJuYWw9eyB0cnVlIH0+XG4gICAgICAgICAgPEF2YXRhciBhbHQ9eyBuYW1lIH0gc3JjPXsgYXZhdGFyLnVybCB9IGNsYXNzTmFtZT17IGNsYXNzZXMuYXZhdGFyIH0gLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG4iXX0=