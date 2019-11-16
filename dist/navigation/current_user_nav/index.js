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
    var _avatar$thumb = avatar.thumb,
        thumb = _avatar$thumb === void 0 ? {} : _avatar$thumb;
    return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_core.IconButton, {
      component: _go["default"],
      to: url,
      external: external
    }, _react["default"].createElement(_core.Avatar, {
      alt: name,
      src: thumb.url,
      className: classes.avatar
    })));
  }

  return null;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9uYXZpZ2F0aW9uL2N1cnJlbnRfdXNlcl9uYXYvaW5kZXguanMiXSwibmFtZXMiOlsiYXZhdGFyU3R5bGVzIiwiYXZhdGFyIiwid2lkdGgiLCJoZWlnaHQiLCJDdXJyZW50VXNlck5hdiIsImN1cnJlbnRVc2VyIiwiZXh0ZXJuYWwiLCJjbGFzc2VzIiwibmFtZSIsInVybCIsInRodW1iIiwiR28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLFlBQVksR0FBRyx3QkFBVztBQUM5QkMsRUFBQUEsTUFBTSxFQUFFO0FBQ05DLElBQUFBLEtBQUssRUFBRSxFQUREO0FBRU5DLElBQUFBLE1BQU0sRUFBRTtBQUZGO0FBRHNCLENBQVgsQ0FBckI7O0FBT2UsU0FBU0MsY0FBVCxPQUFrRDtBQUFBLE1BQXhCQyxXQUF3QixRQUF4QkEsV0FBd0I7QUFBQSxNQUFYQyxRQUFXLFFBQVhBLFFBQVc7QUFDL0QsTUFBTUMsT0FBTyxHQUFHUCxZQUFZLEVBQTVCOztBQUNBLE1BQUdLLFdBQUgsRUFBZTtBQUFBLFFBQ0xHLElBREssR0FDaUJILFdBRGpCLENBQ0xHLElBREs7QUFBQSxRQUNDUCxNQURELEdBQ2lCSSxXQURqQixDQUNDSixNQUREO0FBQUEsUUFDU1EsR0FEVCxHQUNpQkosV0FEakIsQ0FDU0ksR0FEVDtBQUFBLHdCQUVZUixNQUZaLENBRUxTLEtBRks7QUFBQSxRQUVMQSxLQUZLLDhCQUVHLEVBRkg7QUFHYixXQUNFLGdDQUFDLGlCQUFELENBQU8sUUFBUCxRQUNFLGdDQUFDLGdCQUFEO0FBQVksTUFBQSxTQUFTLEVBQUdDLGNBQXhCO0FBQTZCLE1BQUEsRUFBRSxFQUFHRixHQUFsQztBQUF3QyxNQUFBLFFBQVEsRUFBR0g7QUFBbkQsT0FDRSxnQ0FBQyxZQUFEO0FBQVEsTUFBQSxHQUFHLEVBQUdFLElBQWQ7QUFBcUIsTUFBQSxHQUFHLEVBQUdFLEtBQUssQ0FBQ0QsR0FBakM7QUFBdUMsTUFBQSxTQUFTLEVBQUdGLE9BQU8sQ0FBQ047QUFBM0QsTUFERixDQURGLENBREY7QUFPRDs7QUFDRCxTQUFPLElBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJY29uQnV0dG9uLCBBdmF0YXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEdvIGZyb20gXCIuLi9nb1wiO1xuXG5jb25zdCBhdmF0YXJTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgYXZhdGFyOiB7XG4gICAgd2lkdGg6IDMwLFxuICAgIGhlaWdodDogMzBcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1cnJlbnRVc2VyTmF2KHsgY3VycmVudFVzZXIsIGV4dGVybmFsIH0pe1xuICBjb25zdCBjbGFzc2VzID0gYXZhdGFyU3R5bGVzKCk7XG4gIGlmKGN1cnJlbnRVc2VyKXtcbiAgICBjb25zdCB7IG5hbWUsIGF2YXRhciwgdXJsIH0gPSBjdXJyZW50VXNlcjtcbiAgICBjb25zdCB7IHRodW1iID0geyAgfSB9ID0gYXZhdGFyO1xuICAgIHJldHVybihcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEljb25CdXR0b24gY29tcG9uZW50PXsgR28gfSB0bz17IHVybCB9IGV4dGVybmFsPXsgZXh0ZXJuYWwgfT5cbiAgICAgICAgICA8QXZhdGFyIGFsdD17IG5hbWUgfSBzcmM9eyB0aHVtYi51cmwgfSBjbGFzc05hbWU9eyBjbGFzc2VzLmF2YXRhciB9IC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuIl19