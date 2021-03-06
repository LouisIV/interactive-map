const K_WIDTH = 50;
const K_HEIGHT = 40;
const F_SIZE = 18;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  // width: K_WIDTH,
  // height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  borderRadius: '3%',
  backgroundColor: 'white',
  textAlign: 'left',
  color: '#3f51b5',
  fontSize: F_SIZE,
  fontWeight: 'light',
  padding: 4
};

export {greatPlaceStyle};