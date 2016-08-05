'use strict';

/***********************************************************************************************************************************************
 * 
 ***********************************************************************************************************************************************
 * @description
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _orders = require('../../models/orders');

var _orders2 = _interopRequireDefault(_orders);

var _customers = require('../../models/customers');

var _customers2 = _interopRequireDefault(_customers);

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { view: view };

/**
 * [view description]
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */

function view(id) {
  var def = _q2.default.defer();
  var data = {};

  _orders2.default.find(id).then(function (order) {
    return _customers2.default.find(order.customer).then(function (customer) {
      order.customer = customer;
      return order;
    });
  }).then(function (order) {
    _orders2.default.request('get', 'orders/' + order.id + '/items').then(function (items) {
      var services = [];
      order.items = JSON.parse(items.text) || [];

      order.items.forEach(function (item) {
        item.services = [];

        services.push(_orders2.default.request('get', 'orders/' + order.id + '/items/' + item.id + '/services'));
      });

      _q2.default.all(services).then(function (services) {
        services.forEach(function (service) {

          service = service.text && JSON.parse(service.text)[0] || {};

          order.items.filter(function (item) {
            return service.item_id === item.id;
          })[0].services.push(service);
        });

        data.order = order;
      }).then(function () {
        _orders2.default.request('get', 'orders/types').then(function (types) {
          data.types = JSON.parse(types.text);

          _orders2.default.request('get', 'orders/states').then(function (states) {
            data.states = JSON.parse(states.text);
            def.resolve(data);
          });
        });
      });
    });
  }).catch(function (err) {
    def.reject(err);
  });

  return def.promise;
}