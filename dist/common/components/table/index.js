'use strict';

/***********************************************************************************************************************************************
 * SYP.OFFICE.COMMON.COMPONENTS.TABLE
 ***********************************************************************************************************************************************
 * @description
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactable = require('reactable');

var _reactable2 = _interopRequireDefault(_reactable);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = _reactable2.default.Table;
var Thead = _reactable2.default.Thead;
var Th = _reactable2.default.Th;
var Tr = _reactable2.default.Tr;
var Td = _reactable2.default.Td;

var Component = function (_React$Component) {
  _inherits(Component, _React$Component);

  function Component(props) {
    _classCallCheck(this, Component);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Component).call(this));

    _this.state = { data: props.data, rows: props.children, pagination: _lodash2.default.merge({ enabled: false, size: 20, counter: 3, page: 0 }, props.pagination || {}), sortable: props.sortable || !props.sortable && props.sortable !== undefined ? false : true, columns: props.columns || [],
      classlist: props.className, noDataText: props.noDataText || 'No Data Returned' };
    return _this;
  }

  _createClass(Component, [{
    key: 'render',
    value: function render() {
      var self = this;
      var dom;
      var classlist = { table: true, 'office-table': true };

      this.state.classlist.split(' ').forEach(function (clss) {
        classlist[clss] = true;
      });

      classlist = (0, _classnames2.default)(classlist);

      dom = _react2.default.createElement(
        Table,
        {
          data: !this.state.rows && this.state.data,
          itemsPerPage: this.state.pagination.enabled && this.state.pagination.size,
          pageButtonLimit: this.state.pagination.enabled && this.state.pagination.counter,
          currentPage: this.state.pagination.page,
          sortable: this.state.sortable,
          noDataText: this.state.noDataText,
          className: classlist },
        _react2.default.createElement(
          Thead,
          null,
          this.state.columns.map(function (column, idx) {
            return _react2.default.createElement(
              Th,
              { column: column.key, key: 'TH-' + idx },
              column.label
            );
          })
        ),
        function () {
          if (self.state.rows && self.state.rows.length) {
            return self.state.rows;
          }
        }()
      );

      return dom;
    }
  }]);

  return Component;
}(_react2.default.Component);

exports.default = Component;