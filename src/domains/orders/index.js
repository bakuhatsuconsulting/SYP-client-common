'use strict';

/***********************************************************************************************************************************************
 * SYP.OFFICE.DOMAINS.WORKORDERS
 ***********************************************************************************************************************************************
 * @description
 */
import Model from '../../models/orders';
import Details from './details';

/**
 * 
 */
let States = {
  get: getStates
};

let find = Model.find.bind(Model);

export default {States, get, query, open, filter, find, update, Details};

function getStates() {
  return Model.States.get();
}

function get() {
  return Model.get();
}

function open() {
  return Model.get({url: 'orders/open'}); 
}

function update(order) {
  delete order.address;
  delete order.items;
  order.customer = order.customer.id;

  return Model.update(order.id, order);
}

function query(obj) {
  return Model.get({query: obj});
}

function filter(orders, state, toggle) {
  toggle = toggle || 'include';

  let filtered = orders.filter(function(order) {
    return (state === 'all') || (order.state === state && toggle === 'include') || (order.state !== state && toggle === 'exclude');
  });

  return filtered;
}

function normalize(order) {
  return order;
}