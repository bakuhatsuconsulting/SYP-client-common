'use strict';

/***********************************************************************************************************************************************
 * SYP.PORTAL.MODELS.WORKORDERS
 ***********************************************************************************************************************************************
 * @description
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _resource = require('../../system/resource');

var _resource2 = _interopRequireDefault(_resource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * WORKORDERS RESOURCE
 */
var Orders = new _resource2.default('orders', {});
Orders.States = new _resource2.default('orders/states', {});
Orders.Types = new _resource2.default('orders/types', {});

exports.default = Orders;