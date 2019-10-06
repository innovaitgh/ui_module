"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MyToolbar;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index.js"));

var _search_bar_field = _interopRequireDefault(require("../inputs/search_bar_field"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _nav_bar_back = _interopRequireDefault(require("../navigation/nav_bar_back"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SearchToolbarRight(_ref) {
  var ToolbarRight = _ref.ToolbarRight,
      onClick = _ref.onClick;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_IconButton["default"], {
    color: "inherit",
    onClick: onClick,
    "data-pattern": "search",
    "data-value": "true"
  }, _react["default"].createElement(_Search["default"], null)), ToolbarRight);
}

function MyToolbar(_ref2) {
  var onClick = _ref2.onClick,
      onChange = _ref2.onChange,
      search = _ref2.search,
      query = _ref2.query,
      placeholder = _ref2.placeholder,
      ToolbarRight = _ref2.ToolbarRight,
      children = _ref2.children,
      others = _objectWithoutProperties(_ref2, ["onClick", "onChange", "search", "query", "placeholder", "ToolbarRight", "children"]);

  return _react["default"].createElement(_react["default"].Fragment, null, search === "true" ? _react["default"].createElement(_index["default"], {
    ToolbarLeft: _react["default"].createElement(_nav_bar_back["default"], {
      onClick: onClick,
      "data-pattern": "search",
      "data-value": "false"
    }),
    Spacer: _react["default"].createElement(_search_bar_field["default"], {
      color: "inherit",
      onChange: onChange,
      variant: "standard",
      name: "query",
      value: query,
      placeholder: placeholder
    })
  }) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_index["default"], _extends({}, others, {
    ToolbarRight: _react["default"].createElement(SearchToolbarRight, {
      ToolbarRight: ToolbarRight,
      onClick: onClick
    })
  })), children));
}

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29sYmFycy9zZWFyY2hfdG9vbGJhci5qcyJdLCJuYW1lcyI6WyJTZWFyY2hUb29sYmFyUmlnaHQiLCJUb29sYmFyUmlnaHQiLCJvbkNsaWNrIiwiTXlUb29sYmFyIiwib25DaGFuZ2UiLCJzZWFyY2giLCJxdWVyeSIsInBsYWNlaG9sZGVyIiwiY2hpbGRyZW4iLCJvdGhlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLFNBQVNBLGtCQUFULE9BQXNEO0FBQUEsTUFBeEJDLFlBQXdCLFFBQXhCQSxZQUF3QjtBQUFBLE1BQVZDLE9BQVUsUUFBVkEsT0FBVTtBQUNwRCxTQUNFLGdDQUFDLGlCQUFELENBQU8sUUFBUCxRQUNFLGdDQUFDLHNCQUFEO0FBQVksSUFBQSxLQUFLLEVBQUUsU0FBbkI7QUFBOEIsSUFBQSxPQUFPLEVBQUdBLE9BQXhDO0FBQWtELG9CQUFlLFFBQWpFO0FBQTRFLGtCQUFhO0FBQXpGLEtBQ0UsZ0NBQUMsa0JBQUQsT0FERixDQURGLEVBSUlELFlBSkosQ0FERjtBQVFEOztBQUVjLFNBQVNFLFNBQVQsUUFBMEc7QUFBQSxNQUFyRkQsT0FBcUYsU0FBckZBLE9BQXFGO0FBQUEsTUFBNUVFLFFBQTRFLFNBQTVFQSxRQUE0RTtBQUFBLE1BQWxFQyxNQUFrRSxTQUFsRUEsTUFBa0U7QUFBQSxNQUF6REMsS0FBeUQsU0FBekRBLEtBQXlEO0FBQUEsTUFBbERDLFdBQWtELFNBQWxEQSxXQUFrRDtBQUFBLE1BQXJDTixZQUFxQyxTQUFyQ0EsWUFBcUM7QUFBQSxNQUF2Qk8sUUFBdUIsU0FBdkJBLFFBQXVCO0FBQUEsTUFBVkMsTUFBVTs7QUFDdkgsU0FDRSxnQ0FBQyxpQkFBRCxDQUFPLFFBQVAsUUFFSUosTUFBTSxLQUFLLE1BQVgsR0FDQSxnQ0FBQyxpQkFBRDtBQUNFLElBQUEsV0FBVyxFQUNULGdDQUFDLHdCQUFEO0FBQU0sTUFBQSxPQUFPLEVBQUdILE9BQWhCO0FBQTBCLHNCQUFjLFFBQXhDO0FBQWtELG9CQUFhO0FBQS9ELE1BRko7QUFJRSxJQUFBLE1BQU0sRUFDSixnQ0FBQyw0QkFBRDtBQUNFLE1BQUEsS0FBSyxFQUFDLFNBRFI7QUFFRSxNQUFBLFFBQVEsRUFBR0UsUUFGYjtBQUdFLE1BQUEsT0FBTyxFQUFHLFVBSFo7QUFJRSxNQUFBLElBQUksRUFBRSxPQUpSO0FBS0UsTUFBQSxLQUFLLEVBQUdFLEtBTFY7QUFNRSxNQUFBLFdBQVcsRUFBR0M7QUFOaEI7QUFMSixJQURBLEdBaUJBLGdDQUFDLGlCQUFELENBQU8sUUFBUCxRQUNFLGdDQUFDLGlCQUFELGVBQ09FLE1BRFA7QUFFRSxJQUFBLFlBQVksRUFBRyxnQ0FBQyxrQkFBRDtBQUFvQixNQUFBLFlBQVksRUFBR1IsWUFBbkM7QUFBa0QsTUFBQSxPQUFPLEVBQUdDO0FBQTVEO0FBRmpCLEtBREYsRUFLSU0sUUFMSixDQW5CSixDQURGO0FBOEJEOztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCBTZWFyY2hCYXJGaWVsZCBmcm9tIFwiLi4vaW5wdXRzL3NlYXJjaF9iYXJfZmllbGRcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiO1xuaW1wb3J0IEJhY2sgZnJvbSBcIi4uL25hdmlnYXRpb24vbmF2X2Jhcl9iYWNrXCI7XG5cbmZ1bmN0aW9uIFNlYXJjaFRvb2xiYXJSaWdodCh7IFRvb2xiYXJSaWdodCwgb25DbGljayB9KXtcbiAgcmV0dXJuKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxJY29uQnV0dG9uIGNvbG9yPXtcImluaGVyaXRcIn0gb25DbGljaz17IG9uQ2xpY2sgfSBkYXRhLXBhdHRlcm49eyBcInNlYXJjaFwiIH0gZGF0YS12YWx1ZT17IFwidHJ1ZVwiIH0+XG4gICAgICAgIDxTZWFyY2hJY29uIC8+XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgICB7IFRvb2xiYXJSaWdodCB9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeVRvb2xiYXIoeyBvbkNsaWNrLCBvbkNoYW5nZSwgc2VhcmNoICwgcXVlcnksIHBsYWNlaG9sZGVyLCBUb29sYmFyUmlnaHQsIGNoaWxkcmVuLCAuLi5vdGhlcnMgfSkge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIHtcbiAgICAgICAgc2VhcmNoID09PSBcInRydWVcIiA/XG4gICAgICAgIDxUb29sYmFyXG4gICAgICAgICAgVG9vbGJhckxlZnQ9e1xuICAgICAgICAgICAgPEJhY2sgb25DbGljaz17IG9uQ2xpY2sgfSBkYXRhLXBhdHRlcm49e1wic2VhcmNoXCJ9IGRhdGEtdmFsdWU9eyBcImZhbHNlXCIgfSAvPlxuICAgICAgICAgIH1cbiAgICAgICAgICBTcGFjZXI9e1xuICAgICAgICAgICAgPFNlYXJjaEJhckZpZWxkXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsgb25DaGFuZ2UgfVxuICAgICAgICAgICAgICB2YXJpYW50PXsgXCJzdGFuZGFyZFwiIH1cbiAgICAgICAgICAgICAgbmFtZT17XCJxdWVyeVwifVxuICAgICAgICAgICAgICB2YWx1ZT17IHF1ZXJ5IH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eyBwbGFjZWhvbGRlciB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICAgOlxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPFRvb2xiYXJcbiAgICAgICAgICAgIHsgLi4ub3RoZXJzIH1cbiAgICAgICAgICAgIFRvb2xiYXJSaWdodD17IDxTZWFyY2hUb29sYmFyUmlnaHQgVG9vbGJhclJpZ2h0PXsgVG9vbGJhclJpZ2h0IH0gb25DbGljaz17IG9uQ2xpY2sgfSAvPiB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgIH1cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcbiJdfQ==