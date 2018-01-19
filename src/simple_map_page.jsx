/*
 * Base Google Map example
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';
import ParkingLot from './parking_lot.jsx';
import MyGreatPlace from './my_great_place.jsx';

export default class SimpleMapPage extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any,
    data: PropTypes.array,
    onClick: PropTypes.func,
    onCenterChange: PropTypes.func,
    forceMove: PropTypes.func,
  };
  constructor(props){
    super(props);
    props.forceMove.bind(this);
  }

        // 37.980556, -121.309847
        // Buisness school
          //37.981093, -121.309167

        // Parking Lot 31
        //  37.981177, -121.309697
  static defaultProps = {
    center: [37.980556, -121.309847],
    zoom: 18,
    greatPlaceCoords: {lat: 37.980556, lng: -121.309847}
  };

  // shouldComponentUpdate = shouldPureComponentUpdate;

        //   <MyGreatPlace lat={37.981093} lng={-121.309167} text={'Eberhardt School of Business'} />
        // <ParkingLot lat={37.981177} lng={-121.309697} text={'31'} type={'P'} />
        // <ParkingLot lat={37.981177} lng={-121.308557} text={'P'} type={'31'} />
        // <MyGreatPlace {...this.props.greatPlaceCoords} text={'Knoles Hall'} /* road circle */ />
  _onChildClick = (key, childProps) => {
    var new_center = this.props.onCenterChange(childProps.lat, childProps.lng);
    this.setState({center: new_center});
    // this.forceUpdate();
  };

  render() {
    return (
       <GoogleMap
        // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
        onClick={this.props.onClick}
        onChildClick={this._onChildClick}
        center={this.props.center}
        zoom={this.props.zoom}>
        {this.props.data.map((place, index) => (
          <MyGreatPlace key={index} lng={place.lng} lat={place.lat} place={place}/>
        ))}
      </GoogleMap>
    );
  }
}