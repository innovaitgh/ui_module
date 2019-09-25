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
    _react["default"].createElement(_Tab["default"], {
      key: i,
      label: tab
    });
  }));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YWJzL2luZGV4LmpzIl0sIm5hbWVzIjpbIk15VGFicyIsInRhYnMiLCJvdGhlcnMiLCJtYXAiLCJ0YWIiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRWUsU0FBU0EsTUFBVCxPQUFvQztBQUFBLE1BQWxCQyxJQUFrQixRQUFsQkEsSUFBa0I7QUFBQSxNQUFUQyxNQUFTOztBQUNqRCxTQUNFLGdDQUFDLGdCQUFELEVBQVdBLE1BQVgsRUFFSUQsSUFBSSxDQUFDRSxHQUFMLENBQVMsVUFBU0MsR0FBVCxFQUFjQyxDQUFkLEVBQWdCO0FBQ3ZCLG9DQUFDLGVBQUQ7QUFBSyxNQUFBLEdBQUcsRUFBR0EsQ0FBWDtBQUFlLE1BQUEsS0FBSyxFQUFHRDtBQUF2QjtBQUNELEdBRkQsQ0FGSixDQURGO0FBU0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVGFicyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFic1wiO1xuaW1wb3J0IFRhYiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15VGFicyh7IHRhYnMsIC4uLm90aGVycyB9KXtcbiAgcmV0dXJuKFxuICAgIDxUYWJzIHsgLi4ub3RoZXJzIH0gPlxuICAgICAge1xuICAgICAgICB0YWJzLm1hcChmdW5jdGlvbih0YWIsIGkpe1xuICAgICAgICAgIDxUYWIga2V5PXsgaSB9IGxhYmVsPXsgdGFiIH0gLz5cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICA8L1RhYnM+XG4gIClcbn1cbiJdfQ==