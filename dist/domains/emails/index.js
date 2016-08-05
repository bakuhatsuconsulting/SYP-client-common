'use strict';

/***********************************************************************************************************************************************
 * SYP.PORTAL.DOMAINS.EMAILS
 ***********************************************************************************************************************************************
 * @description
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.send = send;

var _emails = require('../../models/emails');

var _emails2 = _interopRequireDefault(_emails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function send(config) {
  return _emails2.default.create(config).then(function (data) {
    return data;
  }, function (err) {
    return err;
  });
}