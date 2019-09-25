"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Back;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _go = _interopRequireDefault(require("../go"));

var _ArrowBack = _interopRequireDefault(require("@material-ui/icons/ArrowBack"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9uYXZpZ2F0aW9uL25hdl9iYXJfYmFjay9pbmRleC5qcyJdLCJuYW1lcyI6WyJCYWNrIiwiaGlzdG9yeSIsIm90aGVycyIsInBvcEhpc3RvcnkiLCJnb0JhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVlLFNBQVNBLElBQVQsT0FBcUM7QUFBQSxNQUFyQkMsT0FBcUIsUUFBckJBLE9BQXFCO0FBQUEsTUFBVEMsTUFBUzs7QUFFbEQsV0FBU0MsVUFBVCxHQUFxQjtBQUNuQkYsSUFBQUEsT0FBTyxDQUFDRyxNQUFSO0FBQ0Q7O0FBRUQsU0FDRSxnQ0FBQyxnQkFBRDtBQUFZLElBQUEsT0FBTyxFQUFHRCxVQUF0QjtBQUFtQyxJQUFBLEtBQUssRUFBQztBQUF6QyxLQUF3REQsTUFBeEQsR0FDRSxnQ0FBQyxxQkFBRCxPQURGLENBREY7QUFLRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJY29uQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBHbyBmcm9tIFwiLi4vZ29cIjtcbmltcG9ydCBBcnJvd0JhY2tJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhY2soeyBoaXN0b3J5LCAuLi5vdGhlcnMgfSl7XG5cbiAgZnVuY3Rpb24gcG9wSGlzdG9yeSgpe1xuICAgIGhpc3RvcnkuZ29CYWNrKCk7XG4gIH1cblxuICByZXR1cm4oXG4gICAgPEljb25CdXR0b24gb25DbGljaz17IHBvcEhpc3RvcnkgfSBjb2xvcj1cImluaGVyaXRcIiB7IC4uLm90aGVycyB9PlxuICAgICAgPEFycm93QmFja0ljb24gLz5cbiAgICA8L0ljb25CdXR0b24+XG4gIClcbn1cbiJdfQ==