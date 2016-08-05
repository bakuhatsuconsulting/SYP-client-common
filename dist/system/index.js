'use strict';

/***********************************************************************************************************************************************
 * SYSP.SYSTEM
 ***********************************************************************************************************************************************
 * @description
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _storage = require('./storage');

var _storage2 = _interopRequireDefault(_storage);

var _authentication = require('./authentication');

var _authentication2 = _interopRequireDefault(_authentication);

var _authorization = require('./authorization');

var _authorization2 = _interopRequireDefault(_authorization);

var _events = require('./events');

var _events2 = _interopRequireDefault(_events);

var _identity = require('./identity');

var _identity2 = _interopRequireDefault(_identity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Events
 */
exports.default = { Router: _router2.default, Storage: _storage2.default, Authentication: _authentication2.default, Authorization: _authorization2.default, Events: _events2.default, Identity: _identity2.default };