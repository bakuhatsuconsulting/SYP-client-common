'use strict';

/***********************************************************************************************************************************************
 * SYP.PORTAL.SYSTEM.IDENTITY 
 ***********************************************************************************************************************************************
 * @description
 */
import jwt from 'jsonwebtoken';
import * as Authentication from '/app/src/system/authentication';

const secret = 'SYPSOOPERSECRETS';

export default function Identity() {
    let token = Authentication.tokens.get();

    return jwt.verify(token, secret);
}
