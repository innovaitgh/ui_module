"use strict";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9uYXZpZ2F0aW9uL2N1cnJlbnRfdXNlcl9uYXYvaW5kZXguanMiXSwibmFtZXMiOlsiYXZhdGFyU3R5bGVzIiwiYXZhdGFyIiwid2lkdGgiLCJoZWlnaHQiLCJDdXJyZW50VXNlck5hdiIsImN1cnJlbnRVc2VyIiwiZXh0ZXJuYWwiLCJjbGFzc2VzIiwibmFtZSIsInVybCIsInRodW1iIiwiR28iXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsd0JBQVc7QUFDOUJDLEVBQUFBLE1BQU0sRUFBRTtBQUNOQyxJQUFBQSxLQUFLLEVBQUUsRUFERDtBQUVOQyxJQUFBQSxNQUFNLEVBQUU7QUFGRjtBQURzQixDQUFYLENBQXJCOztBQU9BLFNBQVNDLGNBQVQsT0FBa0Q7QUFBQSxNQUF4QkMsV0FBd0IsUUFBeEJBLFdBQXdCO0FBQUEsTUFBWEMsUUFBVyxRQUFYQSxRQUFXO0FBQ2hELE1BQU1DLE9BQU8sR0FBR1AsWUFBWSxFQUE1Qjs7QUFDQSxNQUFHSyxXQUFILEVBQWU7QUFBQSxRQUNMRyxJQURLLEdBQ2lCSCxXQURqQixDQUNMRyxJQURLO0FBQUEsUUFDQ1AsTUFERCxHQUNpQkksV0FEakIsQ0FDQ0osTUFERDtBQUFBLFFBQ1NRLEdBRFQsR0FDaUJKLFdBRGpCLENBQ1NJLEdBRFQ7QUFBQSxRQUVMQyxLQUZLLEdBRUtULE1BRkwsQ0FFTFMsS0FGSztBQUdiLFdBQ0UsZ0NBQUMsaUJBQUQsQ0FBTyxRQUFQLFFBQ0UsZ0NBQUMsZ0JBQUQ7QUFBWSxNQUFBLFNBQVMsRUFBR0MsY0FBeEI7QUFBNkIsTUFBQSxFQUFFLEVBQUdGLEdBQWxDO0FBQXdDLE1BQUEsUUFBUSxFQUFHSDtBQUFuRCxPQUNFLGdDQUFDLFlBQUQ7QUFBUSxNQUFBLEdBQUcsRUFBR0UsSUFBZDtBQUFxQixNQUFBLEdBQUcsRUFBR0UsS0FBM0I7QUFBbUMsTUFBQSxTQUFTLEVBQUdILE9BQU8sQ0FBQ047QUFBdkQsTUFERixDQURGLENBREY7QUFPRDs7QUFDRCxTQUFPLElBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJY29uQnV0dG9uLCBBdmF0YXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEdvIGZyb20gXCIuLi9nb1wiO1xuXG5jb25zdCBhdmF0YXJTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgYXZhdGFyOiB7XG4gICAgd2lkdGg6IDMwLFxuICAgIGhlaWdodDogMzBcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIEN1cnJlbnRVc2VyTmF2KHsgY3VycmVudFVzZXIsIGV4dGVybmFsIH0pe1xuICBjb25zdCBjbGFzc2VzID0gYXZhdGFyU3R5bGVzKCk7XG4gIGlmKGN1cnJlbnRVc2VyKXtcbiAgICBjb25zdCB7IG5hbWUsIGF2YXRhciwgdXJsIH0gPSBjdXJyZW50VXNlcjtcbiAgICBjb25zdCB7IHRodW1iIH0gPSBhdmF0YXI7XG4gICAgcmV0dXJuKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8SWNvbkJ1dHRvbiBjb21wb25lbnQ9eyBHbyB9IHRvPXsgdXJsIH0gZXh0ZXJuYWw9eyBleHRlcm5hbCB9PlxuICAgICAgICAgIDxBdmF0YXIgYWx0PXsgbmFtZSB9IHNyYz17IHRodW1iIH0gY2xhc3NOYW1lPXsgY2xhc3Nlcy5hdmF0YXIgfSAvPlxuICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbiJdfQ==