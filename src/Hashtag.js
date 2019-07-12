import React, {Component} from 'react';
import './Hashtag.css';

class Hashtag extends Component {
	// Data
	state = {
		hashtag: this.props.hashtag
	}
	// Functions

	// Render
	render() {
		return (

			<li onClick={ (id) => this.props.selectHashtag(this.state.hashtag._id)} >
				# {this.state.hashtag.name}</li>

		)
	}
}

export default Hashtag;
