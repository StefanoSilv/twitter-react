import React, {Component} from 'react';
import './Hashtag.css';

class Hashtag extends Component {
	// Data
	state = {

	}
	// Functions

	// Render
	render() {
		return (
			// The div must be removed, it is there just till the data don't arrive from the database
			<div>
			<li>#Trand</li>
			<li>#Politic</li>
			<li>#Economy</li>
			<li>#Sports</li>
			<li>#Entertainment</li>
			</div>
		)
	}
}

export default Hashtag;
