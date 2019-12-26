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