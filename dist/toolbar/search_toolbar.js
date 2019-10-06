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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29sYmFyL3NlYXJjaF90b29sYmFyLmpzIl0sIm5hbWVzIjpbIlNlYXJjaFRvb2xiYXJSaWdodCIsIlRvb2xiYXJSaWdodCIsIk15VG9vbGJhciIsIm9uQ2xpY2siLCJvbkNoYW5nZSIsInNlYXJjaCIsInF1ZXJ5IiwicGxhY2Vob2xkZXIiLCJvdGhlcnMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsU0FBU0Esa0JBQVQsT0FBNkM7QUFBQSxNQUFmQyxZQUFlLFFBQWZBLFlBQWU7QUFDM0MsU0FDRSxnQ0FBQyxpQkFBRCxDQUFPLFFBQVAsUUFDRSxnQ0FBQyxzQkFBRCxRQUNFLGdDQUFDLGtCQUFELE9BREYsQ0FERixFQUlJQSxZQUpKLENBREY7QUFRRDs7QUFFYyxTQUFTQyxTQUFULFFBQWdHO0FBQUEsTUFBM0VDLE9BQTJFLFNBQTNFQSxPQUEyRTtBQUFBLE1BQWxFQyxRQUFrRSxTQUFsRUEsUUFBa0U7QUFBQSxNQUF4REMsTUFBd0QsU0FBeERBLE1BQXdEO0FBQUEsTUFBL0NDLEtBQStDLFNBQS9DQSxLQUErQztBQUFBLE1BQXhDQyxXQUF3QyxTQUF4Q0EsV0FBd0M7QUFBQSxNQUEzQk4sWUFBMkIsU0FBM0JBLFlBQTJCO0FBQUEsTUFBVk8sTUFBVTs7QUFDN0csU0FDRSxnQ0FBQyxpQkFBRCxDQUFPLFFBQVAsUUFFSUgsTUFBTSxLQUFLLE1BQVgsR0FDQSxnQ0FBQyxpQkFBRDtBQUNFLElBQUEsV0FBVyxFQUNULGdDQUFDLElBQUQ7QUFBTSxNQUFBLE9BQU8sRUFBR0YsT0FBaEI7QUFBMEIsc0JBQWMsUUFBeEM7QUFBa0Qsb0JBQWE7QUFBL0QsTUFGSjtBQUlFLElBQUEsTUFBTSxFQUNKLGdDQUFDLDRCQUFEO0FBQ0UsTUFBQSxLQUFLLEVBQUMsU0FEUjtBQUVFLE1BQUEsUUFBUSxFQUFHQyxRQUZiO0FBR0UsTUFBQSxPQUFPLEVBQUcsVUFIWjtBQUlFLE1BQUEsSUFBSSxFQUFFLE9BSlI7QUFLRSxNQUFBLEtBQUssRUFBR0UsS0FMVjtBQU1FLE1BQUEsV0FBVyxFQUFHQztBQU5oQjtBQUxKLElBREEsR0FpQkEsZ0NBQUMsaUJBQUQsQ0FBTyxRQUFQLFFBQ0UsZ0NBQUMsaUJBQUQsZUFDT0MsTUFEUDtBQUVFLElBQUEsWUFBWSxFQUFHLGdDQUFDLGtCQUFEO0FBQW9CLE1BQUEsWUFBWSxFQUFHUDtBQUFuQztBQUZqQixLQURGLEVBS0lRLFFBTEosQ0FuQkosQ0FERjtBQThCRDs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUb29sYmFyIGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgU2VhcmNoQmFyRmllbGQgZnJvbSBcIi4uL2lucHV0cy9zZWFyY2hfYmFyX2ZpZWxkXCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xuaW1wb3J0IFNlYXJjaEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIjtcblxuZnVuY3Rpb24gU2VhcmNoVG9vbGJhclJpZ2h0KHsgVG9vbGJhclJpZ2h0IH0pe1xuICByZXR1cm4oXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEljb25CdXR0b24+XG4gICAgICAgIDxTZWFyY2hJY29uIC8+XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgICB7IFRvb2xiYXJSaWdodCB9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeVRvb2xiYXIoeyBvbkNsaWNrLCBvbkNoYW5nZSwgc2VhcmNoICwgcXVlcnksIHBsYWNlaG9sZGVyLCBUb29sYmFyUmlnaHQsIC4uLm90aGVycyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAge1xuICAgICAgICBzZWFyY2ggPT09IFwidHJ1ZVwiID9cbiAgICAgICAgPFRvb2xiYXJcbiAgICAgICAgICBUb29sYmFyTGVmdD17XG4gICAgICAgICAgICA8QmFjayBvbkNsaWNrPXsgb25DbGljayB9IGRhdGEtcGF0dGVybj17XCJzZWFyY2hcIn0gZGF0YS12YWx1ZT17IFwiZmFsc2VcIiB9IC8+XG4gICAgICAgICAgfVxuICAgICAgICAgIFNwYWNlcj17XG4gICAgICAgICAgICA8U2VhcmNoQmFyRmllbGRcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyBvbkNoYW5nZSB9XG4gICAgICAgICAgICAgIHZhcmlhbnQ9eyBcInN0YW5kYXJkXCIgfVxuICAgICAgICAgICAgICBuYW1lPXtcInF1ZXJ5XCJ9XG4gICAgICAgICAgICAgIHZhbHVlPXsgcXVlcnkgfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17IHBsYWNlaG9sZGVyIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICA6XG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8VG9vbGJhclxuICAgICAgICAgICAgeyAuLi5vdGhlcnMgfVxuICAgICAgICAgICAgVG9vbGJhclJpZ2h0PXsgPFNlYXJjaFRvb2xiYXJSaWdodCBUb29sYmFyUmlnaHQ9eyBUb29sYmFyUmlnaHQgfSAvPiB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgIH1cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcbiJdfQ==