'use strict';

/***********************************************************************************************************************************************
 * SYP.PORTAL.DOMAINS.SESSIONS
 ***********************************************************************************************************************************************
 * @description
 */

import Sessions from '../../models/sessions';
import * as Authentication from '../../system/authentication';
import q from 'q';

export function create(user) {
  var def = q.defer();

  Sessions.create(user)
    .then(function(session) {
      def.resolve(Authentication.tokens.set(session.token));
    }, function(err) {
      def.reject(err);
    });

  return def.promise;
}