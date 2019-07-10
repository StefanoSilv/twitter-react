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
			<div id="content" className="col-6">
				<div className="row no-gutters d-flex flex-column">
					<Newtwit />
					<Oldtwits />
				</div>
			</div>
		)
	}
}

export default Content;
