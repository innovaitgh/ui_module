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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9uYXZpZ2F0aW9uL2N1cnJlbnRfdXNlcl9uYXYvaW5kZXguanMiXSwibmFtZXMiOlsiYXZhdGFyU3R5bGVzIiwiYXZhdGFyIiwid2lkdGgiLCJoZWlnaHQiLCJDdXJyZW50VXNlck5hdiIsImN1cnJlbnRVc2VyIiwiY2xhc3NlcyIsIm5hbWUiLCJ1cmwiLCJHbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLHdCQUFXO0FBQzlCQyxFQUFBQSxNQUFNLEVBQUU7QUFDTkMsSUFBQUEsS0FBSyxFQUFFLEVBREQ7QUFFTkMsSUFBQUEsTUFBTSxFQUFFO0FBRkY7QUFEc0IsQ0FBWCxDQUFyQjs7QUFPZSxTQUFTQyxjQUFULE9BQXdDO0FBQUEsTUFBZEMsV0FBYyxRQUFkQSxXQUFjO0FBQ3JELE1BQU1DLE9BQU8sR0FBR04sWUFBWSxFQUE1Qjs7QUFDQSxNQUFHSyxXQUFILEVBQWU7QUFBQSxRQUNMRSxJQURLLEdBQ2lCRixXQURqQixDQUNMRSxJQURLO0FBQUEsUUFDQ04sTUFERCxHQUNpQkksV0FEakIsQ0FDQ0osTUFERDtBQUFBLFFBQ1NPLEdBRFQsR0FDaUJILFdBRGpCLENBQ1NHLEdBRFQ7QUFFYixXQUNFLGdDQUFDLGlCQUFELENBQU8sUUFBUCxRQUNFLGdDQUFDLGdCQUFEO0FBQVksTUFBQSxTQUFTLEVBQUdDLGNBQXhCO0FBQTZCLE1BQUEsRUFBRSxFQUFHRCxHQUFsQztBQUF3QyxNQUFBLFFBQVEsRUFBRztBQUFuRCxPQUNFLGdDQUFDLFlBQUQ7QUFBUSxNQUFBLEdBQUcsRUFBR0QsSUFBZDtBQUFxQixNQUFBLEdBQUcsdUNBQWlDTixNQUFNLENBQUNPLEdBQXhDLENBQXhCO0FBQXdFLE1BQUEsU0FBUyxFQUFHRixPQUFPLENBQUNMO0FBQTVGLE1BREYsQ0FERixDQURGO0FBT0Q7O0FBQ0QsU0FBTyxJQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiwgQXZhdGFyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBHbyBmcm9tIFwiLi4vZ29cIjtcblxuY29uc3QgYXZhdGFyU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIGF2YXRhcjoge1xuICAgIHdpZHRoOiAzMCxcbiAgICBoZWlnaHQ6IDMwXG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXJyZW50VXNlck5hdih7IGN1cnJlbnRVc2VyIH0pe1xuICBjb25zdCBjbGFzc2VzID0gYXZhdGFyU3R5bGVzKCk7XG4gIGlmKGN1cnJlbnRVc2VyKXtcbiAgICBjb25zdCB7IG5hbWUsIGF2YXRhciwgdXJsIH0gPSBjdXJyZW50VXNlcjtcbiAgICByZXR1cm4oXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxJY29uQnV0dG9uIGNvbXBvbmVudD17IEdvIH0gdG89eyB1cmwgfSBleHRlcm5hbD17IHRydWUgfT5cbiAgICAgICAgICA8QXZhdGFyIGFsdD17IG5hbWUgfSBzcmM9eyBgaHR0cHM6Ly9hdXRoLmlubm92YWl0Z2guY29tJHthdmF0YXIudXJsfWAgfSBjbGFzc05hbWU9eyBjbGFzc2VzLmF2YXRhciB9IC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuIl19