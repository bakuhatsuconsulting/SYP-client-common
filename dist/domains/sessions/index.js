'use strict';

/***********************************************************************************************************************************************
 * SYP.PORTAL.DOMAINS.SESSIONS
 ***********************************************************************************************************************************************
 * @description
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;

var _sessions = require('../../models/sessions');

var _sessions2 = _interopRequireDefault(_sessions);

var _authentication = require('../../system/authentication');

var Authentication = _interopRequireWildcard(_authentication);

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function create(user) {
  var def = _q2.default.defer();

  _sessions2.default.create(user).then(function (session) {
    def.resolve(Authentication.tokens.set(session.token));
  }, function (err) {
    def.reject(err);
  });

  return def.promise;
}