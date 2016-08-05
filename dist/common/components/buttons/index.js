'use strict';

/***********************************************************************************************************************************************
 * SYP BUTTONS
 ***********************************************************************************************************************************************
 * @description
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * SYP Button
 */
var SYPButton = function (_React$Component) {
  _inherits(SYPButton, _React$Component);

  function SYPButton(props) {
    _classCallCheck(this, SYPButton);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SYPButton).call(this));

    _this.text = props.children || 'Default button text';
    _this.navigate = props.navigate || null;
    _this.style = props.style || 'default';
    _this.action = props.action || null;
    _this.disabled = props.disabled || function () {
      return false;
    };
    _this.classes = props.className;
    return _this;
  }

  _createClass(SYPButton, [{
    key: 'clickHandler',
    value: function clickHandler(e) {
      if (this.action) {
        return this.action(e);
      } else if (this.navigate) {
        window.location.hash = this.navigate;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Button,
        { className: this.classes, bsStyle: this.style, onClick: this.clickHandler.bind(this), disabled: this.disabled() },
        this.text
      );
    }
  }]);

  return SYPButton;
}(_react2.default.Component);

exports.default = SYPButton;