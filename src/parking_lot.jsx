import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {parkingTypeStyles, parkingLotStyles} from './parking_lot_styles.js';

export default class ParkingLot extends Component {
  static propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
  };

  static defaultProps = {};

  // shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
       <div style={parkingLotStyles}>
          <div style={parkingTypeStyles}>
            {this.props.type}
          </div>
          <div>
            {this.props.text}
          </div>
       </div>
    );
  }
}