'use strict';

/***********************************************************************************************************************************************
 * SYP BUTTONS
 ***********************************************************************************************************************************************
 * @description
 */

import React from 'react';
import { Button } from 'react-bootstrap';

/**
 * SYP Button
 */
export default class SYPButton extends React.Component {
  constructor(props) {
    super();

    this.text = props.children || 'Default button text';
    this.navigate = props.navigate || null;
    this.style = props.style || 'default';
    this.action = props.action || null;
    this.disabled = props.disabled || function() { return false; };
    this.classes = props.className;
  }

  clickHandler(e) {
    if(this.action) {
      return this.action(e);
    } else if(this.navigate) {
      window.location.hash = this.navigate;
    }
  }

  render() {
    return (
      <Button className={this.classes} bsStyle={this.style} onClick={this.clickHandler.bind(this)} disabled={this.disabled()}>{this.text}</Button>
    )
  }
}

