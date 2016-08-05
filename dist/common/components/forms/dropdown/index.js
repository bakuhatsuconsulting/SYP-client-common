'use strict';

/***********************************************************************************************************************************************
 * 
 ***********************************************************************************************************************************************
 * @description
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 
 */
var Dropdown = function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dropdown).call(this));

    _this.props = props || {};
    _this.state = { selected: undefined };
    return _this;
  }

  _createClass(Dropdown, [{
    key: 'select',
    value: function select(e) {
      e.persist();
      this.setState({ selected: e.target.value }, function () {
        (this.props.onSelect || function () {})(e);
      });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.selected) {
        this.state.selected = this.getSelected();
      }
    }
  }, {
    key: 'getSelected',
    value: function getSelected() {
      var self = this;

      var matched = this.props.options.filter(function (option) {
        return Object.keys(self.props.selected || {}).filter(function (prop) {
          return self.props.selected[prop] === option[prop];
        }).length === Object.keys(self.props.selected).length;
      })[0];

      return matched && matched[this.props.value];
    }
  }, {
    key: 'render',
    value: function render() {
      var self = this;
      var dom = _react2.default.createElement('select', { className: 'form-control' });

      try {

        var rows = this.props.options.map(function (option, idx) {
          return _react2.default.createElement(Option, _extends({}, self.props, { data: option, key: idx + 1 }));
        });

        if (this.props.initEmpty) {
          rows.unshift(_react2.default.createElement(Option, _extends({}, this.props, { key: 0, data: { name: "" } })));
        }

        dom = _react2.default.createElement(
          'select',
          { ref: 'dd', className: 'form-control', name: this.props.name || 'SYP-dropdown-' + Date.now(), onChange: this.select.bind(this) },
          rows
        );

        if (this.props.selected && this.state.selected) {
          dom = _react2.default.createElement(
            'select',
            { ref: 'dd', value: this.state.selected, className: 'form-control', name: this.props.name || 'SYP-dropdown-' + Date.now(), onChange: this.select.bind(this) },
            rows
          );
        }
      } catch (err) {
        console.error(err);
      }

      return dom;
    }
  }]);

  return Dropdown;
}(_react2.default.Component);

exports.default = Dropdown;

var Option = function (_React$Component2) {
  _inherits(Option, _React$Component2);

  function Option(props) {
    _classCallCheck(this, Option);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Option).call(this));

    _this2.props = props;
    return _this2;
  }

  _createClass(Option, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'option',
        { value: this.props.data[this.props.value] },
        this.props.data[this.props.display]
      );
    }
  }]);

  return Option;
}(_react2.default.Component);