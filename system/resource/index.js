'use strict';

/***********************************************************************************************************************************************
 * SUP.PORTAL.SYSTEM.RESOURCE
 ***********************************************************************************************************************************************
 * @description
 */
import SA from 'superagent';
import config from '/app/.env/node/config.js';
import prefix from 'superagent-prefix';
import * as Authentication from '/app/src/system/authentication';
import q from 'q';

export default class Resource {
  constructor(name, opts) {
    
    this.base = config.api.url + '/';
    this.name = name;
    this.opts = opts;

    return this;
  }

  request(action, url) {
    return SA[action](this.base+url).set('Content-Type', 'application/json').set('Accept', 'application/json').set('Authorization', 'Bearer '+ Authentication.tokens.get());
  }

  create(body, opts) {
    var def = q.defer();
    
    this.request('post', this.name).send(JSON.stringify(body))
      .then(function(data) {
        def.resolve(data.body);
      }, function(err) {
        def.reject(err);
      });

    return def.promise;
  }

  get(obj) {
    var def = q.defer();
    var url;

    obj = obj || {};

    url = obj.url || this.name;
    url += buildQueryFromObject(obj.query);

    this.request('get', url)
      .then(function(data) {
        def.resolve(data.body);
      }, function(err) {
        def.reject(err);
      });

    return def.promise;
  }

  find(id) {
    var def = q.defer();

    this.request('get', this.name + '/' + id)
      .then(function(data) {
        def.resolve(data.body);
      }, function(err) {
        def.reject(err);
      });

    return def.promise;
  }

  update(id, body) {
    var def = q.defer();

    this.request('put', this.name + '/' + id).send(body)
      .then(function(data) {
        def.resolve(data.body);
      }, function(err) {
        def.reject(err);
      });

    return def.promise;
  }

  remove(id) {
    var def = q.defer();

    this.request('delete', this.name + '/' +id)
      .then(function(data) {
        def.resolve(data.body);
      }, function(err) {
        def.reject(err);
      });

    return def.promise;
  }
}


//
// RESOURCE HELPERS
//------------------------------------------------------------------------------------------//
// @description
// 
function buildQueryFromObject(obj) {
  let query = '';

  if(obj && obj.constructor === Object) {
    query += '?';

    Object.keys(obj)
      .forEach(function(key) {
        query += (key + '=' + obj[key] + '&');
      });

    query = query.substr(0, query.length -1); 
  }

  return query;
}

