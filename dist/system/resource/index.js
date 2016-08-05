'use strict';

/***********************************************************************************************************************************************
 * SUP.PORTAL.SYSTEM.RESOURCE
 ***********************************************************************************************************************************************
 * @description
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _config = require('/app/.env/node/config.js');

var _config2 = _interopRequireDefault(_config);

var _superagentPrefix = require('superagent-prefix');

var _superagentPrefix2 = _interopRequireDefault(_superagentPrefix);

var _authentication = require('../system/authentication');

var Authentication = _interopRequireWildcard(_authentication);

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Resource = function () {
  function Resource(name, opts) {
    _classCallCheck(this, Resource);

    this.base = _config2.default.api.url + '/';
    this.name = name;
    this.opts = opts;

    return this;
  }

  _createClass(Resource, [{
    key: 'request',
    value: function request(action, url) {
      return _superagent2.default[action](this.base + url).set('Content-Type', 'application/json').set('Accept', 'application/json').set('Authorization', 'Bearer ' + Authentication.tokens.get());
    }
  }, {
    key: 'create',
    value: function create(body, opts) {
      var def = _q2.default.defer();

      this.request('post', this.name).send(JSON.stringify(body)).then(function (data) {
        def.resolve(data.body);
      }, function (err) {
        def.reject(err);
      });

      return def.promise;
    }
  }, {
    key: 'get',
    value: function get(obj) {
      var def = _q2.default.defer();
      var url;

      obj = obj || {};

      url = obj.url || this.name;
      url += buildQueryFromObject(obj.query);

      this.request('get', url).then(function (data) {
        def.resolve(data.body);
      }, function (err) {
        def.reject(err);
      });

      return def.promise;
    }
  }, {
    key: 'find',
    value: function find(id) {
      var def = _q2.default.defer();

      this.request('get', this.name + '/' + id).then(function (data) {
        def.resolve(data.body);
      }, function (err) {
        def.reject(err);
      });

      return def.promise;
    }
  }, {
    key: 'update',
    value: function update(id, body) {
      var def = _q2.default.defer();

      this.request('put', this.name + '/' + id).send(body).then(function (data) {
        def.resolve(data.body);
      }, function (err) {
        def.reject(err);
      });

      return def.promise;
    }
  }, {
    key: 'remove',
    value: function remove(id) {
      var def = _q2.default.defer();

      this.request('delete', this.name + '/' + id).then(function (data) {
        def.resolve(data.body);
      }, function (err) {
        def.reject(err);
      });

      return def.promise;
    }
  }]);

  return Resource;
}();

//
// RESOURCE HELPERS
//------------------------------------------------------------------------------------------//
// @description
// 


exports.default = Resource;
function buildQueryFromObject(obj) {
  var query = '';

  if (obj && obj.constructor === Object) {
    query += '?';

    Object.keys(obj).forEach(function (key) {
      query += key + '=' + obj[key] + '&';
    });

    query = query.substr(0, query.length - 1);
  }

  return query;
}