'use strict';

/***********************************************************************************************************************************************
 * SYP.PORTAL.DOMAINS.EMAILS
 ***********************************************************************************************************************************************
 * @description
 */

import Emails from '../../models/emails';

export function send(config) {
  return Emails.create(config)
    .then(function(data) {
      return data;
    }, function(err) {
      return err;
    });
}