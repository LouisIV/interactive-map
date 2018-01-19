const K_WIDTH = 40;
const K_HEIGHT = 40;
const F_SIZE = 16;

const parkingLotStyles = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  borderRadius: K_HEIGHT,
  backgroundColor: '#3f51b5',
  color: 'white',
  fontSize: F_SIZE,
  fontWeight: 'light',
  padding: 4
};


const parkingTypeStyles = {
  width: K_WIDTH / 2,
  height: K_HEIGHT / 2,
  left: -K_WIDTH / 4,
  top: -K_HEIGHT / 4,

  borderRadius: K_HEIGHT / 2,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: 'white',
  fontWeight: 'bold',
  color: '#3f51b5',

  position: 'absolute',
  padding: 3.75

};

export {parkingLotStyles, parkingTypeStyles};