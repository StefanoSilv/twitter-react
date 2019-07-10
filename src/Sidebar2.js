import React, {Component} from 'react';
import './Sidebar2.css';
import Logout from './Logout'

class Sidebar2 extends Component {
	// Data
	state = {

	}
	// Functions

	// Render
	render() {
		return (
			<div id="sidebar2" className="col-3">
				<div id="photo_profile" className=""></div>
				<div id="logged_in"><span className="glyphicon glyphicon-user">
					</span><span>Logged as </span><span className="author">Stefano</span>
				</div>
				<Logout />
			</div>
		)
	}
}

export default Sidebar2;
