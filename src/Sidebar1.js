import React, {Component} from 'react';
import './Sidebar1.css';
import Hashtag from './Hashtag'

class Sidebar1 extends Component {
	// Data
	state = {

	}
	// Functions

	// Render
	render() {
		return (
			<div id="sidebar1" className="col-3">
				<h3>#Hashtags</h3>
				<ul className= "list-unstyled">
				<Hashtag />
				</ul>
			</div>
		)
	}
}

export default Sidebar1;
