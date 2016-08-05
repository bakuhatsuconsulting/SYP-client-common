'use strict';

/***********************************************************************************************************************************************
 * SYP.SYSTEM.ROUTER
 ***********************************************************************************************************************************************
 * @description
 */

import * as Director from 'director';


/**
 *
 * @type {{}}
 */
Director.Router.routes = {};


/**
 * Parse args
 */
Director.Router.current = function(args) {
  args = Array.prototype.slice.call(args);

  return { 
    hash: window.location.hash,
    next: args.pop(),
    params: args};
};

/**
 *
 */
export default Director.Router;

/**
 *
 * @param route
 */
Director.Router.hashify = function(route) {
  return Director.Router;
};

