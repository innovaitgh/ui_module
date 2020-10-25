"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _list = _interopRequireDefault(require("./list"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(props) {
  var state = props.state,
      changePage = props.changePage,
      changePerPage = props.changePerPage,
      listParams = props.listParams;
  var length = state.total_entries;
  var per_page = listParams.per_page,
      page = listParams.page;
  var paginationPage = page - 1;
  var emptyRows = per_page - Math.min(per_page, length - paginationPage * per_page);

  var RenderEmptyRows = function RenderEmptyRows() {
    if (emptyRows > 0) return _react["default"].createElement("div", {
      style: {
        height: 49 * emptyRows
      }
    });
    return null;
  };

  return _react["default"].createElement(_core.Paper, {
    className: "grid"
  }, _react["default"].createElement(_list["default"], props), _react["default"].createElement(RenderEmptyRows, null), _react["default"].createElement(_core.TablePagination, {
    rowsPerPageOptions: [5, 10, 25, 30],
    component: "div",
    count: length,
    rowsPerPage: per_page,
    onChangePage: changePage,
    onChangeRowsPerPage: changePerPage,
    page: paginationPage
  }));
};

exports["default"] = _default;