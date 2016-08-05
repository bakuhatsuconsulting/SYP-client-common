'use strict';

/***********************************************************************************************************************************************
 * SYP.OFFICE.DOMAINS.WORKORDERS
 ***********************************************************************************************************************************************
 * @description
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _orders = require('../../models/orders');

var _orders2 = _interopRequireDefault(_orders);

var _details = require('./details');

var _details2 = _interopRequireDefault(_details);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 
 */
var States = {
  get: getStates
};

var find = _orders2.default.find.bind(_orders2.default);

exports.default = { States: States, get: get, query: query, open: open, filter: filter, find: find, update: update, Details: _details2.default };


function getStates() {
  return _orders2.default.States.get();
}

function get() {
  return _orders2.default.get();
}

function open() {
  return _orders2.default.get({ url: 'orders/open' });
}

function update(order) {
  delete order.address;
  delete order.items;
  order.customer = order.customer.id;

  return _orders2.default.update(order.id, order);
}

function query(obj) {
  return _orders2.default.get({ query: obj });
}

function filter(orders, state, toggle) {
  toggle = toggle || 'include';

  var filtered = orders.filter(function (order) {
    return state === 'all' || order.state === state && toggle === 'include' || order.state !== state && toggle === 'exclude';
  });

  return filtered;
}

function normalize(order) {
  return order;
}