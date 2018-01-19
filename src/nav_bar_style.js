// nav_bar_style.js

const navBarStyle = {
	display: 'flex',

	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'row',
	flexWrap: 'wrap',

	position: 'absolute',
	bottom: 0,
	height: 100,
	width: '100%',

	borderRadius: '3%',
	backgroundColor: 'white',
	textAlign: 'left',
	color: '#3f51b5',
	// fontSize: F_SIZE,
	fontWeight: 'light',
	padding: 4
};

const navBarOptionStyle = {
	padding: 5,
	margin: 5,
	backgroundColor: '#f9f9f9'
};

export {navBarStyle, navBarOptionStyle};