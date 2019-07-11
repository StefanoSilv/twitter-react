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

			<li># {this.props.hashtag.name}</li>

		)
	}
}

export default Hashtag;
