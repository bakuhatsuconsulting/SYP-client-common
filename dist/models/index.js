'use strict';

/***********************************************************************************************************************************************
 * SYP.CLIENT-COMMON.MODELS
 ***********************************************************************************************************************************************
 * @description
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _customers = require('./customers');

var _customers2 = _interopRequireDefault(_customers);

var _emails = require('./emails');

var _emails2 = _interopRequireDefault(_emails);

var _orders = require('./orders');

var _orders2 = _interopRequireDefault(_orders);

var _sessions = require('./sessions');

var _sessions2 = _interopRequireDefault(_sessions);

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 
 */
exports.default = { Customers: _customers2.default, Emails: _emails2.default, Orders: _orders2.default, Sessions: _sessions2.default, Users: _users2.default };