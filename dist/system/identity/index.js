'use strict';

/***********************************************************************************************************************************************
 * SYP.PORTAL.SYSTEM.IDENTITY 
 ***********************************************************************************************************************************************
 * @description
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Identity;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _authentication = require('../system/authentication');

var Authentication = _interopRequireWildcard(_authentication);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var secret = 'SYPSOOPERSECRETS';

function Identity() {
    var token = Authentication.tokens.get();

    return _jsonwebtoken2.default.verify(token, secret);
}