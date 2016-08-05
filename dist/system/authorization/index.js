'use strict';

/***********************************************************************************************************************************************
 * SYP.PORTAL.SYSTEM.AUTHORIZATION
 ***********************************************************************************************************************************************
 * @description
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Authorizations = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _authentication = require('../system/authentication');

var _authentication2 = _interopRequireDefault(_authentication);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Authorizations = Object.create({ find: find });

exports.Authorizations = Authorizations;

var Authorization = function () {
  function Authorization(route) {
    _classCallCheck(this, Authorization);

    Authorizations[route] = this;

    this.requires = { authenticated: false };
    this.on = { fail: null, success: null };
    return this;
  }

  _createClass(Authorization, [{
    key: 'require',
    value: function require(opts) {
      var self = this;

      opts = opts || {};

      Object.keys(opts).forEach(function (key) {
        self.requires[key] = opts[key];
      });

      return this;
    }
  }, {
    key: 'fail',
    value: function fail(route) {
      this.on.fail = route;
      return this;
    }
  }, {
    key: 'success',
    value: function success(route) {
      this.on.success = route;
      return this;
    }
  }]);

  return Authorization;
}();

exports.default = Authorization;


function find(current) {
  var authorization = Authorizations[current.hash.slice(1)];

  if (!authorization) {
    var route = Object.keys(Authorizations).filter(function (def) {
      return def.match(':');
    }).filter(function (def) {
      var url = def;

      (def.match(/(:[a-z])\w+/ig) || []).forEach(function (seg, idx) {
        url = url.replace(seg, current.params[idx]);
      });

      return url === current.hash.slice(1);
    })[0];

    authorization = Authorizations[route];
  }

  return authorization;
}