import React, {Component} from 'react';
import './Oldtwits.css';

class Oldtwits extends Component {
	// Data
	state = {
		message: this.props.message
	}
	// Functions


	// Render
	render() {
		return (
			<div id="oldtwits" className="">
				<div className="message">
					<span className="author">{this.state.message.author.name}</span>
					<span className="date">{this.state.message.date}</span>
				  <p>{this.state.message.body}</p>
				</div>
			</div>
		)
	}
}

export default Oldtwits;
