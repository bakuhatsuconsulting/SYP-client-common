'use strict';

/***********************************************************************************************************************************************
 * SYP.PORTAL.DOMAINS.CUSTOMERS
 ***********************************************************************************************************************************************
 * @description
 */

import Customers from '/app/src/models/customers';
import q from 'q';

export function create(user) {
  var def = q.defer();

  Customers.create(user)
    .then(function(user) {
      def.resolve(user);
    }, function(err) {
      def.reject(err);
    });

  return def.promise;
}