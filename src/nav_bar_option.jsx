import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {navBarOptionStyle} from './nav_bar_style.js';

export default class NavBarOption extends Component {
  static propTypes = {
  	place: PropTypes.any,
  	clickHandle: PropTypes.func,
  };

  static defaultProps = {};

  onClickHandler = () => {
  	this.props.clickHandle(this.props.place);
  };
  // shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
       <div style={navBarOptionStyle} onClick={this.onClickHandler}>
          {this.props.place.name}
       </div>
    );
  }
}