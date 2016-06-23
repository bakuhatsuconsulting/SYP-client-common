'use strict';

/***********************************************************************************************************************************************
 * SYP.PORTAL.SYSTEM.EVENTS
 ***********************************************************************************************************************************************
 * @description
 */

let Events = {
  'Component:Mounted': []
};

let publish = pub.bind(window);
let subscribe = sub.bind(window);

export default { publish, subscribe};

/**
 * [publish description]
 * @param  {[type]} name [description]
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
function pub(name, data) {
  (Events[name] || []).forEach(function(event) {
    (event || function() {})(data);
  });
}

/**
 * [subscribe description]
 * @param  {[type]}   name [description]
 * @param  {Function} fn   [description]
 * @return {[type]}        [description]
 */
function sub(name, fn) {
  if(!Events[name]) { Events[name] = []; }

  Events[name].push(fn);
}