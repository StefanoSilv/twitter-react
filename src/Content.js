import React, {Component} from 'react';
import './Content.css';
import Newtwit from './Newtwit'
import Oldtwits from './Oldtwits'

class Content extends Component {
	// Data
	state = {

	}
	// Functions

	// Render
	render() {
		return (
			<div>
			<Newtwit />
			<Oldtwits />
			</div>
		)
	}
}

export default Content;
