'use strict';

/***********************************************************************************************************************************************
 * SYP.PORTAL.SYSTEM.AUTHORIZATION
 ***********************************************************************************************************************************************
 * @description
 */
import Authentication from '/app/src/system/authentication';

let Authorizations = Object.create({find: find});


export {Authorizations};

export default class Authorization {
  constructor(route) {
    Authorizations[route] = this;

    this.requires = {authenticated: false};
    this.on = {fail: null, success: null};
    return this;
  }

  require(opts) {
    var self = this;

    opts = opts || {};

    Object.keys(opts)
      .forEach(function(key) {
        self.requires[key] = opts[key];
      });

    return this;
  }

  fail(route) {
    this.on.fail = route;
    return this;
  }

  success(route) {
    this.on.success = route;
    return this;
  }
}

function find(current) {
  let authorization = Authorizations[current.hash.slice(1)];

  if(!authorization) {
    var route = Object.keys(Authorizations)
      .filter(function(def) {
        return def.match(':');
      }).filter(function(def) {
        let url = def;

        (def.match(/(:[a-z])\w+/ig) || [])
          .forEach(function(seg, idx) {
            url = url.replace(seg, current.params[idx]);
          });

        return url === current.hash.slice(1);
      })[0];
    
    authorization = Authorizations[route];
  }
  
  return authorization;
}