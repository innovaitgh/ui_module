"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MyTabs;

var _react = _interopRequireDefault(require("react"));

var _Tabs = _interopRequireDefault(require("@material-ui/core/Tabs"));

var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MyTabs(_ref) {
  var tabs = _ref.tabs,
      others = _objectWithoutProperties(_ref, ["tabs"]);

  return _react["default"].createElement(_Tabs["default"], others, tabs.map(function (tab, i) {
    return _react["default"].createElement(_Tab["default"], {
      key: i,
      label: tab
    });
  }));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YWJzL2luZGV4LmpzIl0sIm5hbWVzIjpbIk15VGFicyIsInRhYnMiLCJvdGhlcnMiLCJtYXAiLCJ0YWIiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRWUsU0FBU0EsTUFBVCxPQUFvQztBQUFBLE1BQWxCQyxJQUFrQixRQUFsQkEsSUFBa0I7QUFBQSxNQUFUQyxNQUFTOztBQUNqRCxTQUNFLGdDQUFDLGdCQUFELEVBQVdBLE1BQVgsRUFFSUQsSUFBSSxDQUFDRSxHQUFMLENBQVMsVUFBU0MsR0FBVCxFQUFjQyxDQUFkLEVBQWdCO0FBQ3ZCLFdBQ0UsZ0NBQUMsZUFBRDtBQUFLLE1BQUEsR0FBRyxFQUFHQSxDQUFYO0FBQWUsTUFBQSxLQUFLLEVBQUdEO0FBQXZCLE1BREY7QUFHRCxHQUpELENBRkosQ0FERjtBQVdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRhYnMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYnNcIjtcbmltcG9ydCBUYWIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYlwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeVRhYnMoeyB0YWJzLCAuLi5vdGhlcnMgfSl7XG4gIHJldHVybihcbiAgICA8VGFicyB7IC4uLm90aGVycyB9ID5cbiAgICAgIHtcbiAgICAgICAgdGFicy5tYXAoZnVuY3Rpb24odGFiLCBpKXtcbiAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8VGFiIGtleT17IGkgfSBsYWJlbD17IHRhYiB9IC8+XG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvVGFicz5cbiAgKVxufVxuIl19