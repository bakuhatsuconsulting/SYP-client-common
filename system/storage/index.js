/***********************************************************************************************************************************************
 * SYP.PORTAL.SYSTEM.STORAGE
 ***********************************************************************************************************************************************
 * @description
 */

/**
 * Storage prefix
 * @type {string}
 */
const prefix = 'syp.office.';
const engines = {
  local: window.localStorage,
  session: window.sessionStorage
};

export default class Storage {
  constructor(opts) {
    opts = opts || {};

    this.engine = opts.engine || 'local';
  }

  static get engine() {
    return this.engine;
  }

  static set engine(engine) {
    this.engine = engine;
  }

  set(key, val) {
    return engines[this.engine].setItem(prefix+key, val);
  }

  get(key) {
    return engines[this.engine].getItem(prefix+key);
  }

  remove(key) {
    return engines[this.engine].removeItem(prefix+key);
  }
}
