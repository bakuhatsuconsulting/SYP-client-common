'use strict';

/***********************************************************************************************************************************************
 * SYP.PORTAL.COMMON.COMPONENTS.LOADER
 ***********************************************************************************************************************************************
 * @description
 */
import React from 'react';

export default class Loader extends React.Component {
  constructor() {
    super();
  }

  render() {
    let styles = {
      'transform': 'scale(0.6)'
    };

    return (
      <div ref="loader"> 
        <img src="images/loader.gif" width="80px" />
      </div>
    )
  }
}

