'use strict';

/***********************************************************************************************************************************************
 * SYP.PORTAL.DOMAINS.CUSTOMERS
 ***********************************************************************************************************************************************
 * @description
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;

var _customers = require('../../models/customers');

var _customers2 = _interopRequireDefault(_customers);

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function create(user) {
  var def = _q2.default.defer();

  _customers2.default.create(user).then(function (user) {
    def.resolve(user);
  }, function (err) {
    def.reject(err);
  });

  return def.promise;
}