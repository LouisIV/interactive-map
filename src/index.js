import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './index.css';

import SimpleMapPage from './simple_map_page';
import NavBar from './nav_bar';
// import EventsMapPage from './events_map_page';


// Buisness school
  //37.981093, -121.309167

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      options: [
        {
          name: 'Knoles Hall',
          lat: 37.980556,
          lng: -121.309847,
        },
        {
          name: 'Buisness school',
          lat: 37.981093,
          lng: -121.309167,
        }
      ],
      center: [37.980556, -121.309847]
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.onCenterChange = this.onCenterChange.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  onCenterChange = (lat, lng) => {
    this.setState({center: [lat, lng]});
  };

  forceMove = (lat, lng) => {
    this.setState({center: [lat, lng]});
  };

// <SimpleMapPage data={this.state.options} onClick={this.onClick} center={this.state.center}/>
  render(){
    return(
      <div style={{height: this.state.height}}>
      <SimpleMapPage data={this.state.options} onCenterChange={this.onCenterChange} forceMove={this.forceMove} center={this.state.center}/>
        <NavBar options={this.state.options} onCenterChange={this.forceMove}/>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
