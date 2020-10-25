"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _with_async_action_confirm_dialog = _interopRequireDefault(require("with_async_action_confirm_dialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Item = function Item(props) {
  var RenderItem = props.RenderItem,
      item = props.item,
      removeItem = props.removeItem,
      onClick = props.onClick,
      withAsyncActionResult = props.withAsyncActionResult;

  _react["default"].useEffect(function () {
    if (!withAsyncActionResult) return;
    var status = withAsyncActionResult.status;
    if (status === 200) onDelete();
  }, [withAsyncActionResult]);

  var onDelete = function onDelete() {
    return removeItem(item);
  };

  return _react["default"].createElement(RenderItem, _extends({}, props, {
    onDelete: onClick
  }));
};

var _default = (0, _with_async_action_confirm_dialog["default"])(Item);

exports["default"] = _default;