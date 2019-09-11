"use strict";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9uYXZpZ2F0aW9uL25hdl9iYXJfYmFjay9pbmRleC5qcyJdLCJuYW1lcyI6WyJCYWNrIiwiaGlzdG9yeSIsInBvcEhpc3RvcnkiLCJnb0JhY2siXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxTQUFTQSxJQUFULE9BQTBCO0FBQUEsTUFBVkMsT0FBVSxRQUFWQSxPQUFVOztBQUV4QixXQUFTQyxVQUFULEdBQXFCO0FBQ25CRCxJQUFBQSxPQUFPLENBQUNFLE1BQVI7QUFDRDs7QUFFRCxTQUNFLGdDQUFDLGdCQUFEO0FBQVksSUFBQSxPQUFPLEVBQUdELFVBQXRCO0FBQW1DLElBQUEsS0FBSyxFQUFDO0FBQXpDLEtBQ0UsZ0NBQUMscUJBQUQsT0FERixDQURGO0FBS0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgR28gZnJvbSBcIi4uL2dvXCI7XG5pbXBvcnQgQXJyb3dCYWNrSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93QmFja1wiO1xuXG5mdW5jdGlvbiBCYWNrKHsgaGlzdG9yeSB9KXtcblxuICBmdW5jdGlvbiBwb3BIaXN0b3J5KCl7XG4gICAgaGlzdG9yeS5nb0JhY2soKTtcbiAgfVxuICBcbiAgcmV0dXJuKFxuICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eyBwb3BIaXN0b3J5IH0gY29sb3I9XCJpbmhlcml0XCI+XG4gICAgICA8QXJyb3dCYWNrSWNvbiAvPlxuICAgIDwvSWNvbkJ1dHRvbj5cbiAgKVxufVxuIl19