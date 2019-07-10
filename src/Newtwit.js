import React, {Component} from 'react';
import './Newtwit.css';

class Newtwit extends Component {
	// Data
	state = {

	}
	// Functions

	// Render
	render() {
		return (
			<div id="newtwit" className="">
				<div className="input-group mb-3">
					<input type="text" className="form-control" placeholder="Your next twit..." aria-label="Recipient's username" aria-describedby="button-addon2" />
					<div className="input-group-append">
					<button className="btn btn-outline-secondary" type="button" id="button-addon2">Send</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Newtwit;
