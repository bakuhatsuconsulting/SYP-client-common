'use strict';

/***********************************************************************************************************************************************
 * SYP.PORTAL.DOMAINS.USERS
 ***********************************************************************************************************************************************
 * @description
 */

import Users from '../../models/users';
import q from 'q';

export function create(user) {
  var def = q.defer();

  delete user._errors;
  delete user._success;
  
  Users.create(user)
    .then(function(user) {
      def.resolve(user);
    }, function(err) {
      def.reject(err);
    });

  return def.promise;
}