'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/***********************************************************************************************************************************************
 * SYP.PORTAL.SYSTEM.STORAGE
 ***********************************************************************************************************************************************
 * @description
 */

/**
 * Storage prefix
 * @type {string}
 */
var prefix = 'syp.office.';
var engines = {
  local: window.localStorage,
  session: window.sessionStorage
};

var Storage = function () {
  function Storage(opts) {
    _classCallCheck(this, Storage);

    opts = opts || {};

    this.engine = opts.engine || 'local';
  }

  _createClass(Storage, [{
    key: 'set',
    value: function set(key, val) {
      return engines[this.engine].setItem(prefix + key, val);
    }
  }, {
    key: 'get',
    value: function get(key) {
      return engines[this.engine].getItem(prefix + key);
    }
  }, {
    key: 'remove',
    value: function remove(key) {
      return engines[this.engine].removeItem(prefix + key);
    }
  }], [{
    key: 'engine',
    get: function get() {
      return this.engine;
    },
    set: function set(engine) {
      this.engine = engine;
    }
  }]);

  return Storage;
}();

exports.default = Storage;