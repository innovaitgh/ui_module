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

function Back(_ref) {
  var history = _ref.history;

  function popHistory() {
    history.goBack();
  }

  return _react["default"].createElement(_core.IconButton, {
    onClick: popHistory,
    color: "inherit"
  }, _react["default"].createElement(_ArrowBack["default"], null));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9uYXZpZ2F0aW9uL25hdl9iYXJfYmFjay9pbmRleC5qcyJdLCJuYW1lcyI6WyJCYWNrIiwiaGlzdG9yeSIsInBvcEhpc3RvcnkiLCJnb0JhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVlLFNBQVNBLElBQVQsT0FBMEI7QUFBQSxNQUFWQyxPQUFVLFFBQVZBLE9BQVU7O0FBRXZDLFdBQVNDLFVBQVQsR0FBcUI7QUFDbkJELElBQUFBLE9BQU8sQ0FBQ0UsTUFBUjtBQUNEOztBQUVELFNBQ0UsZ0NBQUMsZ0JBQUQ7QUFBWSxJQUFBLE9BQU8sRUFBR0QsVUFBdEI7QUFBbUMsSUFBQSxLQUFLLEVBQUM7QUFBekMsS0FDRSxnQ0FBQyxxQkFBRCxPQURGLENBREY7QUFLRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJY29uQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBHbyBmcm9tIFwiLi4vZ29cIjtcbmltcG9ydCBBcnJvd0JhY2tJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhY2soeyBoaXN0b3J5IH0pe1xuXG4gIGZ1bmN0aW9uIHBvcEhpc3RvcnkoKXtcbiAgICBoaXN0b3J5LmdvQmFjaygpO1xuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eyBwb3BIaXN0b3J5IH0gY29sb3I9XCJpbmhlcml0XCI+XG4gICAgICA8QXJyb3dCYWNrSWNvbiAvPlxuICAgIDwvSWNvbkJ1dHRvbj5cbiAgKVxufVxuIl19