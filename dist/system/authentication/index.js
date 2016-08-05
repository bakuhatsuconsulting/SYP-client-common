'use strict';

/***********************************************************************************************************************************************
 * SYP.PORTAL.SYSTEM.AUTH
 ***********************************************************************************************************************************************
 * @description
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tokens = undefined;

exports.default = function (Router, current) {
  var authorization = _authorization.Authorizations.find(current);

  if (!authorization) {
    return;
  }

  Object.keys(authorization.requires).filter(function (strat) {
    return strategies[strat] || authorization.requires[strat].constructor === Function;
  }).map(function (strat) {
    return strategies[strat] || authorization.requires[strat];
  }).forEach(function (stratFn) {
    stratFn(Router, authorization, current);
  });
};

exports.signout = signout;

var _storage = require('../storage');

var _storage2 = _interopRequireDefault(_storage);

var _authorization = require('../system/authorization');

var _sessions = require('../../models/sessions');

var _sessions2 = _interopRequireDefault(_sessions);

var _events = require('../system/events');

var _events2 = _interopRequireDefault(_events);

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = new _storage2.default();
var tokens = {
  set: setToken,
  get: getToken };

var key = 'token';
var strategies = {
  authenticated: checkAuth
};

exports.tokens = tokens;


function setToken(token, fn) {
  storage.set(key, token);

  (fn || function () {})(token);
}

function getToken() {
  return storage.get(key);
}

function checkAuth(Router, definition, current) {
  var def = _q2.default.defer();
  var token = tokens.get();
  var required = definition.requires.authenticated;

  if (required) {
    if (!token || token === 'null') {
      Router.setRoute(definition.on.fail);
    } else {
      _sessions2.default.get(token).then(function (session) {
        _events2.default.publish('Session:Valid', session);
        current.next();
      }, function (err) {
        tokens.set(null);
        Router.setRoute(definition.on.fail);
      }).done();
    }
  } else {
    if (token && token !== 'null') {
      _sessions2.default.get(token).then(function (session) {
        _events2.default.publish('Session:Valid', session);
        Router.setRoute('/');
        current.next();
      }, function (err) {
        tokens.set(null);
        current.next();
      }).done();
    } else {
      current.next();
    }
  }

  return def.promise;
}

function signout() {
  setToken(null, function () {
    window.location.hash = '#/login';
  });
}