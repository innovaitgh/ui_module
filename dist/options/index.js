"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Options;

var _react = _interopRequireDefault(require("react"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Options(_ref) {
  var list = _ref.list,
      open = _ref.open,
      handleClose = _ref.handleClose;
  return _react["default"].createElement(_Dialog["default"], {
    onClose: handleClose,
    open: open
  }, _react["default"].createElement(_DialogTitle["default"], null, "Options"), _react["default"].createElement(_List["default"], null, list.map(function (option, i) {
    var name = option.name,
        optionProps = option.optionProps;
    return _react["default"].createElement(_ListItem["default"], _extends({
      key: i
    }, optionProps), _react["default"].createElement(_ListItemText["default"], {
      primary: name
    }));
  })));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbIk9wdGlvbnMiLCJsaXN0Iiwib3BlbiIsImhhbmRsZUNsb3NlIiwibWFwIiwib3B0aW9uIiwiaSIsIm5hbWUiLCJvcHRpb25Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFZSxTQUFTQSxPQUFULE9BQTZDO0FBQUEsTUFBMUJDLElBQTBCLFFBQTFCQSxJQUEwQjtBQUFBLE1BQXBCQyxJQUFvQixRQUFwQkEsSUFBb0I7QUFBQSxNQUFkQyxXQUFjLFFBQWRBLFdBQWM7QUFDMUQsU0FDRSxnQ0FBQyxrQkFBRDtBQUFRLElBQUEsT0FBTyxFQUFHQSxXQUFsQjtBQUFnQyxJQUFBLElBQUksRUFBR0Q7QUFBdkMsS0FDRSxnQ0FBQyx1QkFBRCxRQUFlLFNBQWYsQ0FERixFQUVFLGdDQUFDLGdCQUFELFFBRUlELElBQUksQ0FBQ0csR0FBTCxDQUFTLFVBQVNDLE1BQVQsRUFBaUJDLENBQWpCLEVBQW1CO0FBQUEsUUFDbEJDLElBRGtCLEdBQ0lGLE1BREosQ0FDbEJFLElBRGtCO0FBQUEsUUFDWkMsV0FEWSxHQUNJSCxNQURKLENBQ1pHLFdBRFk7QUFFMUIsV0FDRSxnQ0FBQyxvQkFBRDtBQUFVLE1BQUEsR0FBRyxFQUFHRjtBQUFoQixPQUF5QkUsV0FBekIsR0FDRSxnQ0FBQyx3QkFBRDtBQUFjLE1BQUEsT0FBTyxFQUFHRDtBQUF4QixNQURGLENBREY7QUFLRCxHQVBELENBRkosQ0FGRixDQURGO0FBaUJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCI7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9wdGlvbnMoeyBsaXN0LCBvcGVuLCBoYW5kbGVDbG9zZSB9KXtcbiAgcmV0dXJuKFxuICAgIDxEaWFsb2cgb25DbG9zZT17IGhhbmRsZUNsb3NlIH0gb3Blbj17IG9wZW59ID5cbiAgICAgIDxEaWFsb2dUaXRsZT57IFwiT3B0aW9uc1wiIH08L0RpYWxvZ1RpdGxlPlxuICAgICAgPExpc3Q+XG4gICAgICAgIHtcbiAgICAgICAgICBsaXN0Lm1hcChmdW5jdGlvbihvcHRpb24sIGkpe1xuICAgICAgICAgICAgY29uc3QgeyBuYW1lLCBvcHRpb25Qcm9wcyB9ID0gb3B0aW9uO1xuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXsgaSB9IHsgLi4ub3B0aW9uUHJvcHMgfSA+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXsgbmFtZSB9IC8+XG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC9MaXN0PlxuICAgIDwvRGlhbG9nPlxuICApXG59XG4iXX0=