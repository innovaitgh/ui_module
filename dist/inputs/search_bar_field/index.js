"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBarField = void 0;

var _react = _interopRequireDefault(require("react"));

var _text_field = _interopRequireDefault(require("../text_field"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SearchBarField = (0, _styles.withStyles)({
  root: {
    '& .MuiInput-underline:before': {
      borderBottom: 'none'
    },
    '& .MuiInput-underline:hover:before': {
      borderBottom: 'none'
    },
    '& .MuiInputBase-root': {
      color: "white"
    }
  }
})(_text_field["default"]);
exports.SearchBarField = SearchBarField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbnB1dHMvc2VhcmNoX2Jhcl9maWVsZC9pbmRleC5qcyJdLCJuYW1lcyI6WyJTZWFyY2hCYXJGaWVsZCIsInJvb3QiLCJib3JkZXJCb3R0b20iLCJjb2xvciIsIlRleHRGaWVsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBRU8sSUFBTUEsY0FBYyxHQUFHLHdCQUFXO0FBQ3ZDQyxFQUFBQSxJQUFJLEVBQUU7QUFDSixvQ0FBZ0M7QUFDOUJDLE1BQUFBLFlBQVksRUFBRTtBQURnQixLQUQ1QjtBQUlKLDBDQUFzQztBQUNwQ0EsTUFBQUEsWUFBWSxFQUFFO0FBRHNCLEtBSmxDO0FBT0osNEJBQXdCO0FBQ3RCQyxNQUFBQSxLQUFLLEVBQUU7QUFEZTtBQVBwQjtBQURpQyxDQUFYLEVBWTNCQyxzQkFaMkIsQ0FBdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCIuLi90ZXh0X2ZpZWxkXCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuZXhwb3J0IGNvbnN0IFNlYXJjaEJhckZpZWxkID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICAnJiAuTXVpSW5wdXQtdW5kZXJsaW5lOmJlZm9yZSc6IHtcbiAgICAgIGJvcmRlckJvdHRvbTogJ25vbmUnXG4gICAgfSxcbiAgICAnJiAuTXVpSW5wdXQtdW5kZXJsaW5lOmhvdmVyOmJlZm9yZSc6IHtcbiAgICAgIGJvcmRlckJvdHRvbTogJ25vbmUnXG4gICAgfSxcbiAgICAnJiAuTXVpSW5wdXRCYXNlLXJvb3QnOiB7XG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiXG4gICAgfVxuICB9XG59KShUZXh0RmllbGQpO1xuIl19