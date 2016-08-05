'use strict';

/***********************************************************************************************************************************************
 * SYP.PORTAL.COMMON.COMPONENTS.SIGNOUT
 ***********************************************************************************************************************************************
 * @description
 */
import React from 'react';
import Storage from '../../../storage';

export default class Signout extends React.Component {
  constructor() {
    super();
    this.storage = new Storage();
  }

  signout() {
    this.storage.remove('token');
    window.location.hash = '#/login';
  }
  
  render() {
    return (<button className="btn btn-default" onClick={this.signout.bind(this)}>Signout</button>);
  }
}