"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _go = _interopRequireDefault(require("../go"));

var _ArrowBack = _interopRequireDefault(require("@material-ui/icons/ArrowBack"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Back(_ref) {
  var history = _ref.history,
      others = _objectWithoutProperties(_ref, ["history"]);

  function popHistory() {
    history.goBack();
  }

  return _react["default"].createElement(_core.IconButton, _extends({
    onClick: popHistory,
    color: "inherit"
  }, others), _react["default"].createElement(_ArrowBack["default"], null));
}

var _default = (0, _reactRouterDom.withRouter)(Back);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9uYXZpZ2F0aW9uL25hdl9iYXJfYmFjay9pbmRleC5qcyJdLCJuYW1lcyI6WyJCYWNrIiwiaGlzdG9yeSIsIm90aGVycyIsInBvcEhpc3RvcnkiLCJnb0JhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLFNBQVNBLElBQVQsT0FBcUM7QUFBQSxNQUFyQkMsT0FBcUIsUUFBckJBLE9BQXFCO0FBQUEsTUFBVEMsTUFBUzs7QUFFbkMsV0FBU0MsVUFBVCxHQUFxQjtBQUNuQkYsSUFBQUEsT0FBTyxDQUFDRyxNQUFSO0FBQ0Q7O0FBRUQsU0FDRSxnQ0FBQyxnQkFBRDtBQUFZLElBQUEsT0FBTyxFQUFHRCxVQUF0QjtBQUFtQyxJQUFBLEtBQUssRUFBQztBQUF6QyxLQUF3REQsTUFBeEQsR0FDRSxnQ0FBQyxxQkFBRCxPQURGLENBREY7QUFLRDs7ZUFFYyxnQ0FBV0YsSUFBWCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEdvIGZyb20gXCIuLi9nb1wiO1xuaW1wb3J0IEFycm93QmFja0ljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2tcIjtcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5mdW5jdGlvbiBCYWNrKHsgaGlzdG9yeSwgLi4ub3RoZXJzIH0pe1xuXG4gIGZ1bmN0aW9uIHBvcEhpc3RvcnkoKXtcbiAgICBoaXN0b3J5LmdvQmFjaygpO1xuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eyBwb3BIaXN0b3J5IH0gY29sb3I9XCJpbmhlcml0XCIgeyAuLi5vdGhlcnMgfT5cbiAgICAgIDxBcnJvd0JhY2tJY29uIC8+XG4gICAgPC9JY29uQnV0dG9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQmFjayk7XG4iXX0=