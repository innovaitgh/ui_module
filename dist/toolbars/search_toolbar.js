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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SearchToolbarRight(_ref) {
  var ToolbarRight = _ref.ToolbarRight;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_IconButton["default"], null, _react["default"].createElement(_Search["default"], null)), ToolbarRight);
}

function MyToolbar(_ref2) {
  var onClick = _ref2.onClick,
      onChange = _ref2.onChange,
      search = _ref2.search,
      query = _ref2.query,
      placeholder = _ref2.placeholder,
      ToolbarRight = _ref2.ToolbarRight,
      others = _objectWithoutProperties(_ref2, ["onClick", "onChange", "search", "query", "placeholder", "ToolbarRight"]);

  return _react["default"].createElement(_react["default"].Fragment, null, search === "true" ? _react["default"].createElement(_index["default"], {
    ToolbarLeft: _react["default"].createElement(Back, {
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
      ToolbarRight: ToolbarRight
    })
  })), children));
}

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29sYmFycy9zZWFyY2hfdG9vbGJhci5qcyJdLCJuYW1lcyI6WyJTZWFyY2hUb29sYmFyUmlnaHQiLCJUb29sYmFyUmlnaHQiLCJNeVRvb2xiYXIiLCJvbkNsaWNrIiwib25DaGFuZ2UiLCJzZWFyY2giLCJxdWVyeSIsInBsYWNlaG9sZGVyIiwib3RoZXJzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLFNBQVNBLGtCQUFULE9BQTZDO0FBQUEsTUFBZkMsWUFBZSxRQUFmQSxZQUFlO0FBQzNDLFNBQ0UsZ0NBQUMsaUJBQUQsQ0FBTyxRQUFQLFFBQ0UsZ0NBQUMsc0JBQUQsUUFDRSxnQ0FBQyxrQkFBRCxPQURGLENBREYsRUFJSUEsWUFKSixDQURGO0FBUUQ7O0FBRWMsU0FBU0MsU0FBVCxRQUFnRztBQUFBLE1BQTNFQyxPQUEyRSxTQUEzRUEsT0FBMkU7QUFBQSxNQUFsRUMsUUFBa0UsU0FBbEVBLFFBQWtFO0FBQUEsTUFBeERDLE1BQXdELFNBQXhEQSxNQUF3RDtBQUFBLE1BQS9DQyxLQUErQyxTQUEvQ0EsS0FBK0M7QUFBQSxNQUF4Q0MsV0FBd0MsU0FBeENBLFdBQXdDO0FBQUEsTUFBM0JOLFlBQTJCLFNBQTNCQSxZQUEyQjtBQUFBLE1BQVZPLE1BQVU7O0FBQzdHLFNBQ0UsZ0NBQUMsaUJBQUQsQ0FBTyxRQUFQLFFBRUlILE1BQU0sS0FBSyxNQUFYLEdBQ0EsZ0NBQUMsaUJBQUQ7QUFDRSxJQUFBLFdBQVcsRUFDVCxnQ0FBQyxJQUFEO0FBQU0sTUFBQSxPQUFPLEVBQUdGLE9BQWhCO0FBQTBCLHNCQUFjLFFBQXhDO0FBQWtELG9CQUFhO0FBQS9ELE1BRko7QUFJRSxJQUFBLE1BQU0sRUFDSixnQ0FBQyw0QkFBRDtBQUNFLE1BQUEsS0FBSyxFQUFDLFNBRFI7QUFFRSxNQUFBLFFBQVEsRUFBR0MsUUFGYjtBQUdFLE1BQUEsT0FBTyxFQUFHLFVBSFo7QUFJRSxNQUFBLElBQUksRUFBRSxPQUpSO0FBS0UsTUFBQSxLQUFLLEVBQUdFLEtBTFY7QUFNRSxNQUFBLFdBQVcsRUFBR0M7QUFOaEI7QUFMSixJQURBLEdBaUJBLGdDQUFDLGlCQUFELENBQU8sUUFBUCxRQUNFLGdDQUFDLGlCQUFELGVBQ09DLE1BRFA7QUFFRSxJQUFBLFlBQVksRUFBRyxnQ0FBQyxrQkFBRDtBQUFvQixNQUFBLFlBQVksRUFBR1A7QUFBbkM7QUFGakIsS0FERixFQUtJUSxRQUxKLENBbkJKLENBREY7QUE4QkQ7O0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IFNlYXJjaEJhckZpZWxkIGZyb20gXCIuLi9pbnB1dHMvc2VhcmNoX2Jhcl9maWVsZFwiO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCI7XG5cbmZ1bmN0aW9uIFNlYXJjaFRvb2xiYXJSaWdodCh7IFRvb2xiYXJSaWdodCB9KXtcbiAgcmV0dXJuKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxJY29uQnV0dG9uPlxuICAgICAgICA8U2VhcmNoSWNvbiAvPlxuICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgeyBUb29sYmFyUmlnaHQgfVxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlUb29sYmFyKHsgb25DbGljaywgb25DaGFuZ2UsIHNlYXJjaCAsIHF1ZXJ5LCBwbGFjZWhvbGRlciwgVG9vbGJhclJpZ2h0LCAuLi5vdGhlcnMgfSkge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIHtcbiAgICAgICAgc2VhcmNoID09PSBcInRydWVcIiA/XG4gICAgICAgIDxUb29sYmFyXG4gICAgICAgICAgVG9vbGJhckxlZnQ9e1xuICAgICAgICAgICAgPEJhY2sgb25DbGljaz17IG9uQ2xpY2sgfSBkYXRhLXBhdHRlcm49e1wic2VhcmNoXCJ9IGRhdGEtdmFsdWU9eyBcImZhbHNlXCIgfSAvPlxuICAgICAgICAgIH1cbiAgICAgICAgICBTcGFjZXI9e1xuICAgICAgICAgICAgPFNlYXJjaEJhckZpZWxkXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsgb25DaGFuZ2UgfVxuICAgICAgICAgICAgICB2YXJpYW50PXsgXCJzdGFuZGFyZFwiIH1cbiAgICAgICAgICAgICAgbmFtZT17XCJxdWVyeVwifVxuICAgICAgICAgICAgICB2YWx1ZT17IHF1ZXJ5IH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eyBwbGFjZWhvbGRlciB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICAgOlxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPFRvb2xiYXJcbiAgICAgICAgICAgIHsgLi4ub3RoZXJzIH1cbiAgICAgICAgICAgIFRvb2xiYXJSaWdodD17IDxTZWFyY2hUb29sYmFyUmlnaHQgVG9vbGJhclJpZ2h0PXsgVG9vbGJhclJpZ2h0IH0gLz4gfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICB9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG4iXX0=