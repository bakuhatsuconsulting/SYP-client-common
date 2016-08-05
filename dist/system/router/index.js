'use strict';

/***********************************************************************************************************************************************
 * SYP.SYSTEM.ROUTER
 ***********************************************************************************************************************************************
 * @description
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _director = require('director');

var Director = _interopRequireWildcard(_director);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 *
 * @type {{}}
 */
Director.Router.routes = {};

/**
 * Parse args
 */
Director.Router.current = function (args) {
  args = Array.prototype.slice.call(args);

  return {
    hash: window.location.hash,
    next: args.pop(),
    params: args };
};

/**
 *
 */
exports.default = Director.Router;

/**
 *
 * @param route
 */

Director.Router.hashify = function (route) {
  return Director.Router;
};