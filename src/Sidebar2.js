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
			<div id="sidebar2" class="col-3">
				<div id="photo_profile" class=""></div>
				<div id="logged_in"><span class="glyphicon glyphicon-user">
					</span><span>Logged as </span><span class="author">Stefano</span>
				</div>
				<Logout />
			</div>
		)
	}
}

export default Sidebar2;
