"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ProgressiveWrap;

var _react = _interopRequireDefault(require("react"));

var _circular_progress = _interopRequireDefault(require("../feedback/circular_progress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ProgressiveWrap(_ref) {
  var isLoading = _ref.isLoading,
      children = _ref.children,
      others = _objectWithoutProperties(_ref, ["isLoading", "children"]);

  return _react["default"].createElement(_react["default"].Fragment, null, isLoading ? _react["default"].createElement("div", {
    style: {
      width: "100%",
      textAlign: "center"
    }
  }, _react["default"].createElement(_circular_progress["default"], others)) : children);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9ncmVzc2l2ZV93cmFwL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb2dyZXNzaXZlV3JhcCIsImlzTG9hZGluZyIsImNoaWxkcmVuIiwib3RoZXJzIiwid2lkdGgiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7QUFFZSxTQUFTQSxlQUFULE9BQTREO0FBQUEsTUFBakNDLFNBQWlDLFFBQWpDQSxTQUFpQztBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7QUFBQSxNQUFUQyxNQUFTOztBQUN6RSxTQUNFLGdDQUFDLGlCQUFELENBQU8sUUFBUCxRQUVJRixTQUFTLEdBQ1A7QUFBSyxJQUFBLEtBQUssRUFBRztBQUFFRyxNQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQkMsTUFBQUEsU0FBUyxFQUFFO0FBQTVCO0FBQWIsS0FDRSxnQ0FBQyw2QkFBRCxFQUF1QkYsTUFBdkIsQ0FERixDQURPLEdBS1BELFFBUE4sQ0FERjtBQVlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIi4uL2ZlZWRiYWNrL2NpcmN1bGFyX3Byb2dyZXNzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2dyZXNzaXZlV3JhcCh7IGlzTG9hZGluZywgY2hpbGRyZW4sIC4uLm90aGVycyB9KXtcbiAgcmV0dXJuKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIHtcbiAgICAgICAgaXNMb2FkaW5nID9cbiAgICAgICAgICA8ZGl2IHN0eWxlPXsgeyB3aWR0aDogXCIxMDAlXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9IH0+XG4gICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyB7IC4uLm90aGVycyB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDpcbiAgICAgICAgICBjaGlsZHJlblxuICAgICAgfVxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cbiJdfQ==