import React, {Component} from 'react';
import './Oldtwits.css';
import moment from 'moment'

class Oldtwits extends Component {
	// Data
	state = {
		message: this.props.message
	}
	// Functions
	//Set the date of the messages in a nicer format
	componentWillMount() {
		let message = this.state.message
		message.date = moment(message.date).format('D MMM YYYY - h:mma')
		this.setState({message})
	}

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
