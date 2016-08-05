'use strict';

/***********************************************************************************************************************************************
 * SYP.PORTAL.SYSTEM.EVENTS
 ***********************************************************************************************************************************************
 * @description
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Events = {
  'Component:Mounted': []
};

var publish = pub.bind(window);
var subscribe = sub.bind(window);

exports.default = { publish: publish, subscribe: subscribe };

/**
 * [publish description]
 * @param  {[type]} name [description]
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */

function pub(name, data) {
  (Events[name] || []).forEach(function (event) {
    (event || function () {})(data);
  });
}

/**
 * [subscribe description]
 * @param  {[type]}   name [description]
 * @param  {Function} fn   [description]
 * @return {[type]}        [description]
 */
function sub(name, fn) {
  if (!Events[name]) {
    Events[name] = [];
  }

  Events[name].push(fn);
}