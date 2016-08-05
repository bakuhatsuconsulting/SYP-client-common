'use strict';

/***********************************************************************************************************************************************
 * SYP.PORTAL.DOMAINS
 ***********************************************************************************************************************************************
 * @description
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _customers = require('./customers');

var Customers = _interopRequireWildcard(_customers);

var _sessions = require('./sessions');

var Sessions = _interopRequireWildcard(_sessions);

var _emails = require('./emails');

var Emails = _interopRequireWildcard(_emails);

var _users = require('./users');

var Users = _interopRequireWildcard(_users);

var _orders = require('./orders');

var _orders2 = _interopRequireDefault(_orders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = { Customers: Customers, Sessions: Sessions, Emails: Emails, Users: Users, Orders: _orders2.default };