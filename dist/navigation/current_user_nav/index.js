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
  var currentUser = _ref.currentUser,
      external = _ref.external;
  var classes = avatarStyles();

  if (currentUser) {
    var name = currentUser.name,
        avatar = currentUser.avatar,
        url = currentUser.url;
    var thumb = avatar.thumb;
    return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_core.IconButton, {
      component: _go["default"],
      to: url,
      external: external
    }, _react["default"].createElement(_core.Avatar, {
      alt: name,
      src: thumb,
      className: classes.avatar
    })));
  }

  return null;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9uYXZpZ2F0aW9uL2N1cnJlbnRfdXNlcl9uYXYvaW5kZXguanMiXSwibmFtZXMiOlsiYXZhdGFyU3R5bGVzIiwiYXZhdGFyIiwid2lkdGgiLCJoZWlnaHQiLCJDdXJyZW50VXNlck5hdiIsImN1cnJlbnRVc2VyIiwiZXh0ZXJuYWwiLCJjbGFzc2VzIiwibmFtZSIsInVybCIsInRodW1iIiwiR28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLFlBQVksR0FBRyx3QkFBVztBQUM5QkMsRUFBQUEsTUFBTSxFQUFFO0FBQ05DLElBQUFBLEtBQUssRUFBRSxFQUREO0FBRU5DLElBQUFBLE1BQU0sRUFBRTtBQUZGO0FBRHNCLENBQVgsQ0FBckI7O0FBT2UsU0FBU0MsY0FBVCxPQUFrRDtBQUFBLE1BQXhCQyxXQUF3QixRQUF4QkEsV0FBd0I7QUFBQSxNQUFYQyxRQUFXLFFBQVhBLFFBQVc7QUFDL0QsTUFBTUMsT0FBTyxHQUFHUCxZQUFZLEVBQTVCOztBQUNBLE1BQUdLLFdBQUgsRUFBZTtBQUFBLFFBQ0xHLElBREssR0FDaUJILFdBRGpCLENBQ0xHLElBREs7QUFBQSxRQUNDUCxNQURELEdBQ2lCSSxXQURqQixDQUNDSixNQUREO0FBQUEsUUFDU1EsR0FEVCxHQUNpQkosV0FEakIsQ0FDU0ksR0FEVDtBQUFBLFFBRUxDLEtBRkssR0FFS1QsTUFGTCxDQUVMUyxLQUZLO0FBR2IsV0FDRSxnQ0FBQyxpQkFBRCxDQUFPLFFBQVAsUUFDRSxnQ0FBQyxnQkFBRDtBQUFZLE1BQUEsU0FBUyxFQUFHQyxjQUF4QjtBQUE2QixNQUFBLEVBQUUsRUFBR0YsR0FBbEM7QUFBd0MsTUFBQSxRQUFRLEVBQUdIO0FBQW5ELE9BQ0UsZ0NBQUMsWUFBRDtBQUFRLE1BQUEsR0FBRyxFQUFHRSxJQUFkO0FBQXFCLE1BQUEsR0FBRyxFQUFHRSxLQUEzQjtBQUFtQyxNQUFBLFNBQVMsRUFBR0gsT0FBTyxDQUFDTjtBQUF2RCxNQURGLENBREYsQ0FERjtBQU9EOztBQUNELFNBQU8sSUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEljb25CdXR0b24sIEF2YXRhciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgR28gZnJvbSBcIi4uL2dvXCI7XG5cbmNvbnN0IGF2YXRhclN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICBhdmF0YXI6IHtcbiAgICB3aWR0aDogMzAsXG4gICAgaGVpZ2h0OiAzMFxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VycmVudFVzZXJOYXYoeyBjdXJyZW50VXNlciwgZXh0ZXJuYWwgfSl7XG4gIGNvbnN0IGNsYXNzZXMgPSBhdmF0YXJTdHlsZXMoKTtcbiAgaWYoY3VycmVudFVzZXIpe1xuICAgIGNvbnN0IHsgbmFtZSwgYXZhdGFyLCB1cmwgfSA9IGN1cnJlbnRVc2VyO1xuICAgIGNvbnN0IHsgdGh1bWIgfSA9IGF2YXRhcjtcbiAgICByZXR1cm4oXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxJY29uQnV0dG9uIGNvbXBvbmVudD17IEdvIH0gdG89eyB1cmwgfSBleHRlcm5hbD17IGV4dGVybmFsIH0+XG4gICAgICAgICAgPEF2YXRhciBhbHQ9eyBuYW1lIH0gc3JjPXsgdGh1bWIgfSBjbGFzc05hbWU9eyBjbGFzc2VzLmF2YXRhciB9IC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuIl19