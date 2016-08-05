'use strict';

/***********************************************************************************************************************************************
 * SYP.PORTAL.SYSTEM.AUTH
 ***********************************************************************************************************************************************
 * @description
 */
import Storage from '../storage';
import {Authorizations} from '../system/authorization';
import Session from '../../models/sessions';
import Events from '../system/events';

import q from 'q';

let storage = new Storage();
let tokens = {
  set: setToken,
  get: getToken };

const key = 'token';
let strategies = {
  authenticated: checkAuth
};

export default function(Router, current) {
  var authorization = Authorizations.find(current);

  if(!authorization) { return; }

  Object.keys(authorization.requires)
    .filter(function(strat) {
      return strategies[strat] || authorization.requires[strat].constructor === Function
    }).map(function(strat) {
      return strategies[strat] || authorization.requires[strat];
    }).forEach(function(stratFn) {
      stratFn(Router, authorization, current);
    });
}

export { tokens };

function setToken(token, fn) {
  storage.set(key, token);

  (fn || function() {})(token);
}

function getToken() {
  return storage.get(key);
}

function checkAuth(Router, definition, current) {
  var def = q.defer();
  var token = tokens.get();
  var required = definition.requires.authenticated;

  if(required) {
    if(!token || token === 'null') {
      Router.setRoute(definition.on.fail);
    } else {
      Session.get(token)
        .then(function(session) {
          Events.publish('Session:Valid', session);
          current.next();
        }, function(err) {
          tokens.set(null);
          Router.setRoute(definition.on.fail);
        }).done();
    }
  } else {
    if(token && token !== 'null') {
      Session.get(token)
        .then(function(session) {
          Events.publish('Session:Valid', session);
          Router.setRoute('/');
          current.next();
        }, function(err) {
          tokens.set(null);
          current.next();
        }).done();
    } else {
      current.next();
    }
  }

  return def.promise;
}

export function signout() {
  setToken(null, function() {
    window.location.hash = '#/login';
  });
}