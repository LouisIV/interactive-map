import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {navBarStyle} from './nav_bar_style.js';

import NavBarOption from './nav_bar_option';

export default class NavBar extends Component {
    constructor(props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  }
  static propTypes = {
    text: PropTypes.string,
    options: PropTypes.array,
    onCenterChange: PropTypes.func,
  };

  static defaultProps = {};

  // shouldComponentUpdate = shouldPureComponentUpdate;

  _onClick = (place) => {
    this.props.onCenterChange(place.lat, place.lng);
    
  }

  render() {
    return (
       <div style={navBarStyle} >
      		{this.props.options.map((place, index) => (
      			<NavBarOption key={index} place={place} clickHandle={this._onClick}/>
      		))}
       </div>
    );
  }
}