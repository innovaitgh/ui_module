"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBarField = void 0;

var _react = _interopRequireDefault(require("react"));

var _text_field = require("../text_field");

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
})(_text_field.TextField);
exports.SearchBarField = SearchBarField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbnB1dHMvc2VhcmNoX2Jhcl9maWVsZC9pbmRleC5qcyJdLCJuYW1lcyI6WyJTZWFyY2hCYXJGaWVsZCIsInJvb3QiLCJib3JkZXJCb3R0b20iLCJjb2xvciIsIlRleHRGaWVsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBRU8sSUFBTUEsY0FBYyxHQUFHLHdCQUFXO0FBQ3ZDQyxFQUFBQSxJQUFJLEVBQUU7QUFDSixvQ0FBZ0M7QUFDOUJDLE1BQUFBLFlBQVksRUFBRTtBQURnQixLQUQ1QjtBQUlKLDBDQUFzQztBQUNwQ0EsTUFBQUEsWUFBWSxFQUFFO0FBRHNCLEtBSmxDO0FBT0osNEJBQXdCO0FBQ3RCQyxNQUFBQSxLQUFLLEVBQUU7QUFEZTtBQVBwQjtBQURpQyxDQUFYLEVBWTNCQyxxQkFaMkIsQ0FBdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwiLi4vdGV4dF9maWVsZFwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hCYXJGaWVsZCA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgJyYgLk11aUlucHV0LXVuZGVybGluZTpiZWZvcmUnOiB7XG4gICAgICBib3JkZXJCb3R0b206ICdub25lJ1xuICAgIH0sXG4gICAgJyYgLk11aUlucHV0LXVuZGVybGluZTpob3ZlcjpiZWZvcmUnOiB7XG4gICAgICBib3JkZXJCb3R0b206ICdub25lJ1xuICAgIH0sXG4gICAgJyYgLk11aUlucHV0QmFzZS1yb290Jzoge1xuICAgICAgY29sb3I6IFwid2hpdGVcIlxuICAgIH1cbiAgfVxufSkoVGV4dEZpZWxkKTtcbiJdfQ==