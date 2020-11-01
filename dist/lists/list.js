"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _ui = require("ui");

var _item = _interopRequireDefault(require("./item"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var MyList = function MyList(props) {
  var title = props.title,
      _props$actions = props.actions,
      actions = _props$actions === void 0 ? [] : _props$actions,
      RenderItem = props.RenderItem,
      state = props.state,
      activity = props.activity;
  if (!state) return null;
  var data = state.data;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_core.Toolbar, {
    style: {
      justifyContent: "space-between"
    }
  }, _react["default"].createElement(_core.Typography, null, title), _react["default"].createElement("div", null, actions.map(function (_ref, i) {
    var name = _ref.name,
        onClick = _ref.onClick;
    return _react["default"].createElement(_core.Button, _extends({
      key: i
    }, {
      onClick: onClick
    }), name);
  }))), activity ? _react["default"].createElement(_ui.Activity, null) : _react["default"].createElement(_core.List, null, data.map(function (item, i) {
    return _react["default"].createElement(_item["default"], _extends({
      key: i
    }, props, {
      index: i
    }, {
      item: item
    }));
  })));
};

var _default = MyList;
exports["default"] = _default;