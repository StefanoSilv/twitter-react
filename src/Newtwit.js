import React, {Component} from 'react';
import './Newtwit.css';

class Newtwit extends Component {
	// Data
	state = {
		text:''
	}
	// Functions
	//Function to change the text in the message bar (input)
	changeText = (e) =>{
		this.setState({
			text: e.target.value
		})
	}

	//Function to clear the message bar after submitting (form)
	clearMessage = () => {
		this.setState({
			text: ''
		})
	}

	// Render
	render() {
		return (
			<form id="newtwit" className=""
			onSubmit={(e , text) => {this.props.createMessage(e , this.state.text);
				this.clearMessage()}}>
				<div className="input-group mb-3">
					<input type="text" className="form-control"
					value={this.state.text} onChange={(e) => this.changeText(e)}
					placeholder="Your next twit..." />
					<div className="input-group-append">
					<button className="btn btn-outline-secondary" type="submit" id="button-addon2">Send</button>
					</div>
				</div>
			</form>
		)
	}
}

export default Newtwit;
